using Nancy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComCampDemo
{
    public class PostsModule : NancyModule
    {
        public PostsModule()
            : base("/api")
        {
            Get["/posts"] = parameters =>
            {
                var data = new FakeData();
                return Response.AsJson<IList<Post>>(data.GetPosts());
            };

            Get["/posts/{post_id}"] = parameters =>
            {
                var data = new FakeData();
                var post = data.GetPosts().First<Post>(p => p.Id == parameters.post_id);
                return Response.AsJson<Post>(post);
            };
        }
    }

    public class Post
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Contents { get; set; }
    }

    public class FakeData
    {
        IList<Post> posts = new List<Post>();

        public IList<Post> GetPosts()
        {
            posts.Add(new Post { Id = "rails-is-omakase", Title = "Rails is Omakase", Author = "Kwon", Contents = "There are lots of a la carte software environments in this wor" });
            posts.Add(new Post { Id = "why-ruby", Title = "Why Ruby?", Author = "CodingHorror", Contents = "I have been a Microsoft developer for decades now. I weaned myself on various flavors of home computer Microsoft Basic, and I got my first paid programming gigs in Microsoft FoxPro, Microsoft Access, and Microsoft Visual Basic. I have seen the future of programming, my friends, and it is terrible CRUD apps running on Wintel boxes!" });
            return posts;
        }
    }
}

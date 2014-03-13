namespace ComCampDemo
{
    using Nancy;
    using System.Collections.Generic;

    public class IndexModule : NancyModule
    {
        public IndexModule() 
        {
            Get["/"] = parameters =>
            {
                return View["index"];
            };
        }
    }    
}
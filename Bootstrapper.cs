namespace ComCampDemo
{
    using Nancy;
    using Nancy.Conventions;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;

    public class Bootstrapper : DefaultNancyBootstrapper
    {
        protected override void ConfigureConventions(Nancy.Conventions.NancyConventions nancyConventions)
        {
            base.ConfigureConventions(nancyConventions);

            // allow files only define here
            nancyConventions.StaticContentsConventions.Add(
                StaticContentConventionBuilder.AddDirectory("/", "webapp", new string[]{"js", "css", "jpg", "jpeg"}));

            // view files location
            nancyConventions.ViewLocationConventions.Add(
                (viewName, model, context) =>
                    string.Concat("webapp/", viewName)
            );
        }

        protected override void ConfigureApplicationContainer(Nancy.TinyIoc.TinyIoCContainer container)
        {
            base.ConfigureApplicationContainer(container);

            // register custom json serializer, camelCase in this case
            container.Register(typeof(JsonSerializer), typeof(CustomJsonSerializer));
        }
    }

    public class CustomJsonSerializer : JsonSerializer
    {
        public CustomJsonSerializer()
        {
            this.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
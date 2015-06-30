using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_SPA_FRAMEWORK.Startup))]
namespace MVC_SPA_FRAMEWORK
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

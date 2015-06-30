using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC_SPA_FRAMEWORK.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVC_SPA_FRAMEWORK.Controllers
{
    public class GetDbController : Controller
    {
       
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: GetDb
        public ActionResult GetDbEmployees(Employees employee)
        {
           List<Employees> list = db.EmployeeDbSet.Where(i => i.Name == employee.Name).ToList(); //pronac ce jednog employeea
                    
            return GetJsonResult(list);
        }
        public ContentResult GetJsonResult(object data)
        {
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(data, camelCaseFormatter),
                ContentType = "application/json"
            };
            
            return jsonResult;
            //return new HttpStatusCodeResult(404, "Our custom Error message...");

        }
        
    }
}
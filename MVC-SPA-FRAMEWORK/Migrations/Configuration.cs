namespace MVC_SPA_FRAMEWORK.Migrations
{
    using MVC_SPA_FRAMEWORK.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MVC_SPA_FRAMEWORK.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MVC_SPA_FRAMEWORK.Models.ApplicationDbContext context)
        {
            context.EmployeeDbSet.AddOrUpdate(
                p => p.Name,
            new Employees {  Name="Andy Chatterton", Location ="Raquette River", Image="employee-andy.png"},
            new Employees { Name = "April Donaldson", Location = "Sarnac River", Image = "Employee-April.png" },
            new Employees {  Name = "Don Morgan", Location = "Black Creek", Image = "employee-don.png" },
            new Employees {  Name = "Tom Sullivan", Location = "Ausable River", Image = "employee-tom.png" },
            new Employees { Name="Kathy Fletcher",Location="Batten Kill",Image="employee-kathy.png"}
                );

            context.LocationsDbSet.AddOrUpdate(
               p => p.Name,
           new Locations { Name = "Raquette River",Temperature=55,Guides=20,Rafts=18,Vests=200, Image = "river1.png" },
           new Locations { Name = "Black River", Temperature=53,Guides=36,Rafts=22,Vests=250,Image = "river2.png" },
           new Locations { Name = "Hudson River", Temperature=58,Guides=56,Rafts=40,Vests=500,Image = "river3.png" },
           new Locations { Name = "Hudson Gorge", Temperature=39,Guides=8,Rafts=10,Vests=40, Image = "river4.png "},
           new Locations { Name = "Saranac River", Temperature=32,Guides=8,Rafts=8,Vests=100,Image = "river1.png" },
           new Locations { Name="Black Creek",Temperature=32,Guides=22,Rafts=12,Vests=230,Image="river2.png"},
           new Locations { Name="Batten kill",Temperature=54,Guides=20,Rafts=24,Vests=420,Image="river3.png"}

               );


       
      
      
      

            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}

using System.Reflection.PortableExecutable;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using static System.Net.Mime.MediaTypeNames;
using static System.Runtime.InteropServices.JavaScript.JSType;
using CourseService.Model;
using CourseService.Data;

namespace CourseService.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class CourseController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetQualifications()
        {
            //var qualifications = new List<Qualification>
            //{
            //    new Qualification
            //    {
            //        Code = "AK1321",
            //        Description = "Master of Analytics (MAnalytics)",
            //        Points = 180,
            //        Courses = new List<Course>
            //        {
            //            new Course { Code = "MATH802", Description = "Advanced Financial Modelling and Analytics", Points = 15 },
            //            new Course { Code = "STAT802", Description = "Advanced Topics in Analytics", Points = 15 },
            //            new Course { Code = "INFS812", Description = "Bioinformatics", Points = 15 },
            //            new Course { Code = "STAT805", Description = "Computational Mathematics and Statistics", Points = 15 },
            //            new Course { Code = "COMP809", Description = "Data Mining and Machine Learning", Points = 15 },
            //            new Course { Code = "COMP810", Description = "Data Warehousing and Big Data", Points = 15 },
            //            new Course { Code = "COMP817", Description = "Geocomputation", Points = 15 },
            //            new Course { Code = "COMP804", Description = "Health Analytics", Points = 15 },
            //            new Course { Code = "MATH803", Description = "Mathematical Modelling and Simulation", Points = 15 },
            //            new Course { Code = "STAT801", Description = "Multivariate Analysis", Points = 15 },
            //            new Course { Code = "STAT803", Description = "Official Statistics", Points = 15 },
            //            new Course { Code = "STAT804", Description = "Optimisation and Operations Research", Points = 15 },
            //            new Course { Code = "ENGE817", Description = "STEM Research Methods", Points = 15 },
            //            new Course { Code = "COMP814", Description = "Text Mining", Points = 15 },
            //            new Course { Code = "STAT995", Description = "Dissertation", Points = 60 }
            //        }
            //    },
            //    new Qualification
            //    {
            //        Code = "AK1329",
            //        Description = "Master of Computer and Information Sciences (MCIS)",
            //        Points = 180,
            //        Courses = new List<Course>() // Initialize empty list
            //    },
            //    new Qualification
            //    {
            //        Code = "AK1324",
            //        Description = "Master of Cyber Security and Digital Forensics (MCSDF)",
            //        Points = 180,
            //        Courses = new List<Course>() // Initialize empty list
            //    },
            //    new Qualification
            //    {
            //        Code = "AK1325",
            //        Description = "Master of Engineering (ME)",
            //        Points = 180,
            //        Courses = new List<Course>() // Initialize empty list
            //    },
            //    new Qualification
            //    {
            //        Code = "AK1310",
            //        Description = "Master of Forensic Information Technology (MFIT)",
            //        Points = 240,
            //        Courses = new List<Course>() // Initialize empty list
            //    },
            //    new Qualification
            //    {
            //        Code = "AK1339",
            //        Description = "Master of IT Project Management (MITPM)",
            //        Points = 120,
            //        Courses = new List<Course>() // Initialize empty list
            //    },
            //    new Qualification
            //    {
            //        Code = "DJ2037",
            //        Description = "Master of Science (MSc)",
            //        Points = 180,
            //        Courses = new List<Course>() // Initialize empty list
            //    }
            //};

            CourseRepository repository = new CourseRepository(new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build());

            var qualifications = repository.GetCoursesAsync().Result;

            return Ok(qualifications);
        }
    }

}

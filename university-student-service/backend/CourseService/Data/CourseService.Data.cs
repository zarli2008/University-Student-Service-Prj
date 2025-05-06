using Dapper;
using Microsoft.Data.SqlClient; 
using CourseService.Model;

namespace CourseService.Data
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Qualification>> GetCoursesAsync();
    }

    public class CourseRepository : ICourseRepository
    {
        private readonly IConfiguration _configuration;

        public CourseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

       
        public async Task<IEnumerable<Qualification>> GetCoursesAsync()
        {
            var sql = @"
                    SELECT 
                        q.Id, q.Code, q.Description, q.Points,
                        c.Id, c.Code, c.Description, c.Points, c.QualificationId
                    FROM Qualifications q
                    LEFT JOIN Courses c ON q.Id = c.QualificationId
                    ORDER BY q.Id;
                ";

            using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));

            var qualificationDict = new Dictionary<int, Qualification>();

            var result = await connection.QueryAsync<Qualification, Course, Qualification>(
                sql,
                (q, c) =>
                {
                    if (!qualificationDict.TryGetValue(q.Id, out var qualification))
                    {
                        qualification = q;
                        qualification.Courses = new List<Course>();
                        qualificationDict.Add(q.Id, qualification);
                    }

                    if (c != null)
                        qualification.Courses.Add(c);

                    return qualification;
                },
                splitOn: "Id"
            );

            return qualificationDict.Values.ToList();
        }

    }
}




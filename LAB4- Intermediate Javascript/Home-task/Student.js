import { University } from "./University";
import { Course } from "./Course";
class Student {
  university = University;
  courses = Course;
  constructor(id, name, dateOfBirth, courses) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth
    this.courses = courses;
  }
  belongsToUniversity = (university) => {
    this.university = university;
  };
  enroll = () => {
    console.log(
      `\n${this.name} is enrolled Successfully
      \n\nName:${this.name}\nDate Of Birth: 
      ${this.dateOfBirth}\n`
    );
    console.log(`\n==University Details==\n`);
    console.log(
      `University Name:${this.university.name}
      \nUniversity Logo: ${this.university.image}`
    );
    console.log(`\n==Course Details==\n`);
    console.log(
      `Course ID:${this.courses.id}\nCourse Name:
      ${this.courses.name}
      \nCredit Hours:${this.courses.creditHours}`
    );
  };
}
export { Student };

class Student {
  constructor(id, name, dateOfBirth) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth; }
  enroll = () => {
    console.log(
      `${this.name} is enrolled Successfully\n Details:
      \nName:${this.name}\nDate Of Birth: ${this.dateOfBirth}`
    ); }; }
export { Student };

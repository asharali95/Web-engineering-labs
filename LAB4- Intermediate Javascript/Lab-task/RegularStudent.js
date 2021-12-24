import { Student } from "./Student";

class RegularStudent extends Student {
  constructor(id, name, dateOfBirth) {
    super(id, name, dateOfBirth);
  }
  attendLab = () => {
    console.log(`${this.name} is attending Lab`);
  };
}

export { RegularStudent };

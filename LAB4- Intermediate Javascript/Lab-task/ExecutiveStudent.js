import { Student } from "./Student";

class ExecutiveStudent extends Student {
  constructor(id, name, dateOfBirth) {
    super(id, name, dateOfBirth);
  }
  attendTheory = () => {
    console.log(`${this.name} is attending theory`);
  };
}

export { ExecutiveStudent };

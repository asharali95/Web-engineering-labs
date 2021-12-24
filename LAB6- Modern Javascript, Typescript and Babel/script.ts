interface ILabMember {
  firstname: string;
  lastname: string;
  age: number;
  status: string;
  startLab: Function;
}
interface IlabAssistant extends ILabMember {}
interface IlabAdmin extends ILabMember {}
const LabAssistant: IlabAssistant = {
  firstname: "Ayesha",
  lastname: "Intekaab",
  age: 21,
  status: "Lab assistant",
  startLab: (message: string) => console.log(message),
};
const LabAdmin: IlabAdmin = {
  firstname: "Fatima",
  lastname: "Waseem",
  age: 25,
  status: "Lab Admin",
  startLab: (message: string) => console.log(message),
};
var defineLabMember = (labMember: IlabAssistant | IlabAdmin) => {
  labMember.startLab(
    `Miss ${labMember.firstname} as ${labMember.status} is starting lab`
  );
};

defineLabMember(LabAssistant);
defineLabMember(LabAdmin);

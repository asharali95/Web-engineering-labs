var LabAssistant = {
    firstname: "Ayesha",
    lastname: "Intekaab",
    age: 21,
    status: "Lab assistant",
    startLab: function (message) { return console.log(message); }
};
var LabAdmin = {
    firstname: "Fatima",
    lastname: "Waseem",
    age: 25,
    status: "Lab Admin",
    startLab: function (message) { return console.log(message); }
};
var defineLabMember = function (labMember) {
    labMember.startLab("Miss ".concat(labMember.firstname, " as ").concat(labMember.status, " is starting lab"));
};
defineLabMember(LabAssistant);
defineLabMember(LabAdmin);

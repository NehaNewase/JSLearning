let professor = {
    name: "Neha",
    empid: 2343,
    college: "coep",
    age: 33,
    qualification: "BTech",
    degrees: {
        engineering: "CSE",
        PhD: "Data Science",
        experience: 10,
        city: "Pune",
        certifications : ["Hacker rank", "IFE course", "Adv programming"],
        value: function(){
            console.log("Teacher Degree:", this.engineering ,this.PhD, this.experience,this.city);
        }
    }
}
professor.degrees.value();
let objectProfessor = Object.values(professor.degrees);
// console.log(keysStudent);
professor.totalExperience = 11;
professor.college = "DYP";
professor.degrees.certifications.push("Oracle Certification");
console.table(professor);
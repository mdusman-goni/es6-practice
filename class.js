class student {
    constructor(studentId, studentName) {
        this.id = studentId;
        this.name = studentName;
        this.school = "Jalalabad Cantonment Public School and College"
    }
}
const student1 = new student(01, "Usman");
const student2 = new student(02, "Goni");
console.log(student1.name, student2.id)
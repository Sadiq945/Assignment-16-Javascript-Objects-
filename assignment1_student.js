let student = {
    name: "Ali",
    age: 20,
    grade: "B"
};

student.subject = "Math";
student.grade = "A";
delete student.age;

console.log(student);
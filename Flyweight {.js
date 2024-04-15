// Flyweight factory
class StudentFactory {
    constructor() {
        this.students = {};
    }

    getStudent(name, age) {
        const key = age.toString();
        if (!this.students[key]) {
            this.students[key] = [];
        }

        const existingStudent = this.students[key].find(student => student.name === name);
        if (existingStudent) {
            return existingStudent;
        }

        const newStudent = new Student(name, age);
        this.students[key].push(newStudent);
        return newStudent;
    }

    getTotalStudentsByAge(age) {
        const key = age.toString();
        return this.students[key] ? this.students[key].length : 0;
    }
}

// Flyweight
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(Hi, I'm ${this.name} and I'm ${this.age} years old.);
    }
}

// Usage
const studentFactory = new StudentFactory();

// Create students
const tomas = studentFactory.getStudent("tomas", 10);
const agustin = studentFactory.getStudent("agustin", 12);
const ignacio = studentFactory.getStudent("ignacio", 10);
const santiago = studentFactory.getStudent("santiago", 12);
const martin = studentFactory.getStudent("martin", 10);

// Introduce students
tomas.introduce();
agustin.introduce();
ignacio.introduce();
santiago.introduce();
martin.introduce();

// Output total students by age
console.log("Total students aged 10:", studentFactory.getTotalStudentsByAge(10));
console.log("Total students aged 12:", studentFactory.getTotalStudentsByAge(12));

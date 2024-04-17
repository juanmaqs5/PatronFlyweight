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
    console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años.`);
    }
}

// Usage
const studentFactory = new StudentFactory();

// Crear students
const tomas = studentFactory.getStudent("tomas", 20);
const lucas = studentFactory.getStudent("lucas", 22);
const ignacio = studentFactory.getStudent("ignacio", 20);
const santiago = studentFactory.getStudent("santiago", 22);
const martin = studentFactory.getStudent("martin", 20);

// Introducir students
tomas.introduce();
lucas.introduce();
ignacio.introduce();
santiago.introduce();
martin.introduce();

// Output total students por edad
console.log("Total students aged 20:", studentFactory.getTotalStudentsByAge(20));
console.log("Total students aged 22:", studentFactory.getTotalStudentsByAge(22));

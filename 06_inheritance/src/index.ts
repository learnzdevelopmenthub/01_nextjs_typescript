class Person {
    constructor (
        public firstName: string,
        public lastName: string,
    ) {}


    get fullName(): string {
        return this.firstName + " " + this.lastName
    }

    walk(): void {
        console.log(`${this.firstName} is walking`)
    }
}


class Teacher extends Person {

    constructor(public teacherId: number, firstName: string, lastName: string) {
        super(firstName, lastName)
    }

    override get fullName(): string {
        return `Teacher: ${super.fullName}`
    }

    teach(): void {
        console.log(`${super.fullName} is teaching`)
    }
}


class Student extends Person {
    override get fullName(): string {
        return `Student: ${super.fullName}`
    }
}

class Principal extends Person {
    override get fullName(): string {
        return `Principal: ${super.fullName}`
    }
}

const t1 = new Teacher(1, "Prithvi", "Raja")

t1.walk()
t1.teach()



function printFullName(person: Person) {
    console.log(person.fullName)
}


printFullName(new Student("Anu", "Raj"))
printFullName(new Principal("Sankar", "Raj"))
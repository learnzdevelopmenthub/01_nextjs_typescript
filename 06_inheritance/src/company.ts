class Employee {
    constructor(
        public name: string, 
        private _salary: number
    ){}

    get role(): string {
        return "Employee";
    }

    salary(): void {
        console.log(`Salary for ${this.name} is ${this._salary}`)
    } 
}


class Developer extends Employee {
    override get role(): string {
        return "Developer"
    }
}

class Manager extends Employee {
    override get role(): string {
        return "Manager"
    }
}

function printRole(emp: Employee) {
    console.log(`${emp.name} is a ${emp.role}`)
}


const d1 = new Developer("Tamil", 7000)
d1.salary()
printRole(d1)

const m1 = new Manager("Raja", 10000)
m1.salary()
printRole(m1)



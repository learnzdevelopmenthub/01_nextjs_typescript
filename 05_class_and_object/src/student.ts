class Student {
    // Static 
    static schoolName: string = "ABC School"
    static totalStudents: number = 0

    constructor(
        public readonly studentId: number,
        public name: string,
        private _marks: number,
        public email?: string
    ) {
        Student.totalStudents++
    }

    get marks(): number {
        return this._marks
    }

    set marks(value: number) {
        if (value < 0 || value > 100) {
            console.log("Marks must be between 0 and 100")
        }

        this._marks = value
    }

    displayInfo(): void {
        console.log(`\n Student: ${this.name}`)
        console.log(`ID: ${this.studentId}`)
        console.log(`Marks: ${this._marks}`)
        if (this.email) {
            console.log(`Email: ${this.email}`)
        }
    }

    static showSchoolInfo(): void {
        console.log(`\n School: ${Student.schoolName}`)
        console.log(`Total Students: ${Student.totalStudents}`)
    }

}

const student1 = new Student(101, "Rahul", 85, "rahul@email.com")
const student2 = new Student(102, "Priya", 75)


console.log("\n Type Check")
console.log(typeof student1)
console.log(student2 instanceof Student)

console.log(`\n Public Access: ${student1.name}`)
console.log(`ID (readonly) Access: ${student1.studentId}`)
// student1.studentId = 103

console.log(`Marks (via getter method): ${student1.marks}`)

console.log("\n Using Setter")
student1.marks = 105
student1.marks = 90

student1.displayInfo();
student2.displayInfo();

Student.showSchoolInfo()




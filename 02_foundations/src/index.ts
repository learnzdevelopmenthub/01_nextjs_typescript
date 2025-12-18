// buitin types

// number
let age: number = 25;
console.log("Number", age)

// String
let username: string = "Tamil"
console.log("String", username)

// Boolean
let isLoggedIn: boolean = true
console.log("Boolean", isLoggedIn)


// any type
let value: any = 10;
value = "hello"
value = true
console.log(value)


// Array
let numbers: number[] = [1, 2, 3]
console.log(numbers)

// tuples
let user: [number, string] = [1, "Tamil"]
console.log(user)

// enum
// admin, user, guest

// PascalCase
enum UserRole {Admin = 1, User, Guest}

let myRole: UserRole = UserRole.Admin
console.log(myRole)

enum OrderStatus { Pending = "PENDING", Shipped = "SHIPPED", Delivered = "DELIVERED"}
console.log(OrderStatus.Pending)

// functions
function greetUser(name: string): string {
    return name
}

console.log(greetUser("Tamil"))


function multiply(a: number, b: number, c: number = 5): number {
    return a * b + c
}

multiply(5, 3, 10)


function check(value: number) {
    if (value > 10) {
        return true
    }
    return false
}

check(5)

// object
let userDetail: {
    readonly id: number; 
    name: string; 
    phoneNumber?: number;
    add: (a:number, b:number) => number;
} = {
    id: 1, 
    name: "Tamil",
    add(a, b) {
        return a + b
    },
}


userDetail.phoneNumber = 9087654322

console.log(userDetail)

userDetail.add(3, 4)
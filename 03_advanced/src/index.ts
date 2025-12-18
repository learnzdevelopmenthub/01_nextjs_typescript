// type alias
type User = {
  id: number;
  name: string;
};

let user: User = {
  id: 1,
  name: "Raja",
};

console.log(user);

type Age = number;

let userAge: Age = 25;

console.log(userAge);

// union types
let value: number | string;

value = 10;
value = "Ten";

console.log(value);

function printValue(value: number | string) {
  // Type narrowing
  if (typeof value === "string") {
    return parseInt(value) * 2.2;
  } else {
    return value * 2.2;
  }
}

printValue(10);

// Intersection Types
// let user: number & string;
type AuthInfo = {
  token: string;
  isLoggedIn: boolean;
};

type UserProfile = {
  id: number;
  name: string;
  email: string;
};

type AuthenticatedUser = AuthInfo & UserProfile;

let userData: AuthenticatedUser = {
  token: "abc123",
  isLoggedIn: true,
  id: 1,
  name: "Raja",
  email: "raja@mail.com",
};

console.log(userData);

//Optional Chaining

let userInfo = {
  profile: {
    name: "name",
  },
};

// optional property access
console.log(userInfo?.profile?.name);

// optional element access
let users = [{ name: "Tamil" }, { name: "Arun" }];

users[3]?.name;

//

type Logger = {
  log?: () => void;
};

let logger: Logger = {};

logger.log?.();

// nullish coalescing (??)

let count = 0;

// undefined, null, false, 0, ''

console.log(count || 10); // 10
console.log(count ?? 10); // 0

// Type Assertion

let element = document.getElementById("username") as HTMLInputElement;

element.value;

// unknown type
let data: unknown = "Typescript";

if (typeof data === "string") {
  console.log(data.toLocaleUpperCase());
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

throwError("error is occured.");
console.log("new");

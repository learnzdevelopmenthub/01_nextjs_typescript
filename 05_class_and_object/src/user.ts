const user: { 
   [key: string]: string | number;
 } = {}


console.log(user)

user.email = "tamil@mail.com"
user.name = 67


class ErrorBag {
    [key: string]: string
}

const errors = new ErrorBag();
errors.email = "Invalid Email"
errors.password = "Too Short"
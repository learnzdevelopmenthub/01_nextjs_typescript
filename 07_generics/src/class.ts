class KeyValuepair<K, V> {
    constructor(
        private _key: K,
        private _value: V,
    ) {}


    get key(): K {
        return this._key
    }

    get value(): V {
        return this._value
    }

    display(): void {
        console.log(`${this._key}: ${this._value}`)
    }
}

interface User {
    name: string,
    email: string
}


const student = new KeyValuepair<number, string>(101, "rahul")
student.display()


const product = new KeyValuepair<string, string>("apple_101", "Apple")
product.display()


const userData = new KeyValuepair<number, User>(1, {name: "Tamil", email: "tamil@mail.com"})
userData.display()



class Logger {
    log<T>(value: T): void {
        console.log(value);
    }
}

const logger = new Logger
logger.log<string>("hello")
logger.log<boolean>(true)
logger.log<number>(10)
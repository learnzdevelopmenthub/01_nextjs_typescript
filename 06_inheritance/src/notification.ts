// abstract class Notification {
//     constructor(
//         public recipient: string
//     ){}

//     abstract send(message: string): void;

//     abstract getDeliveryStatus(): string;
// }


interface Notification {
    recipient: string;
    send(message: string): void;
    getDeliveryStatus(): string;
}


class EmailNotification implements Notification {

    constructor(public recipient: string, private email:string){}

    send(message: string): void {
        console.log(`Sending Email(${this.email}): ${message}` )
    }
    getDeliveryStatus(): string {
        return "Email sent Successfully"
    }
}

class SMSNotification implements Notification {

    constructor(public recipient: string, private phoneNumber: string){}

    send(message: string): void {
        console.log(`Sending SMS(${this.phoneNumber}): ${message}` )
    }
    getDeliveryStatus(): string {
        return "SMS sent Successfully"
    }
}


function sendAlert(notification: Notification, message: string) {
    notification.send(message)
    notification.getDeliveryStatus()
}

const email = new EmailNotification("karthick", "karthick@mail.com")
sendAlert(email, "Hello")

const sms = new SMSNotification("karthick", "9098776653")
sendAlert(sms, "New Message")

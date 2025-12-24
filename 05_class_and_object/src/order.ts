class Order {
    orderId: number;
    customerName: string;
    totalAmount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = 0;
    }

    addItem(price: number): void {
        this.totalAmount += price
    }

    placeOrder(): void {
        console.log(`Order Placed by ${this.customerName}`)
        console.log(`Total Amount ${this.totalAmount}`)
    }
}

const order1 = new Order(101, "Tamil")
console.log(order1.customerName)
order1.addItem(120)
order1.addItem(80)
order1.placeOrder()
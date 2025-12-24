class Ride {
    static currentRide: number = 0;

    constructor(
        public customerName: string,
        public startingLocation: string,
        public dropofLocation: string ) {
    }

    start(){
        Ride.currentRide += 1 
    }

}

const ride1 = new Ride("Tamil", "Chennai", "madurai")
ride1.start()


const ride2 = new Ride("Raja", "Chennai", "madurai")
ride2.start()

console.log(Ride.currentRide)
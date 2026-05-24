

class ATMData
{

    #pin : number;
    #name : string;
    #amount : number;

    constructor(userpin : number, username : string, useramount : number)   //4545, "Indu", 9000
    {
        this.#pin = userpin;  //userpin stores into private pin
        this.#name = username; //username stores into private name
        this.#amount = useramount;  //useramount stores into private amount
    }

    usersetpin() : void
    {
        console.log("The User Entered PIN is : " + this.#pin);
    }

    usergetpin() : number
    {
        return this.#pin;
    }

}

let K = new ATMData(4545, "Indu", 9000);

K.usersetpin();
console.log("The Getting PIN Value is successfuly as " +K.usergetpin());




class food
{
    breakfast : string = "IDLY";

    constructor()
    {
        console.log("Hurry I have created a Constructor");
        console.log("Early morning I have  break fast as : " +this.breakfast);
    }

    lunch() : void
    {
        console.log("The Meals we are eating at Afternoon");
        console.log("Afternoon we never eat : " +this.breakfast);
    }

}

let H = new food();   // Object created
H.lunch();




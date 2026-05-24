class cow
{
    Color : string;
    constructor()   //parent constructor
    {
        this.Color =  "Hai I am Cow and My Color is White";
        console.log("In P --> Cow --> : " +this.Color);
    }

    runs() : void
    {
        console.log("Hai I am cow which runs faster than Calf")
    }
}

class calf extends cow
{
    Color : string = "Hai I am Calf and My color is Brown";

    runs() : void
    {
        console.log("Hai I am calf which runs slower than cow")
    }

    family(Color : string) : void   //non-static method without returntype and with one argument
    {
        console.log("Here in Family Method myColor is : " +Color);
        console.log("In C --> Calf --> : " +this.Color);  
    }
    constructor()  //child constructor
    {
        super();  //try to calls the parent constructor
    }

}

let A = new calf();
A.family("Gray");
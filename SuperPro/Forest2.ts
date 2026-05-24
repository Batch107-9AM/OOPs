class cow
{
    PColor : string = "Hai I am Cow and My Color is White"
}

class calf extends cow
{
    CColor : string = "Hai I am Calf and My color is Brown";

    family(Color : string) : void   //non-static method without returntype and with one argument
    {
        console.log("Here in Family Method myColor is : " +Color);
        console.log("With THIS -> C myColor is : " +this.CColor);   //using "this" we exclusivley access instance child variable
         console.log("With THIS -> P  myColor is : " +this.PColor);   //using "this" we exclusivley access instance parent variable
    
    }
}

let A = new calf();
A.family("Gray");
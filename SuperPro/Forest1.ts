class cow
{
    PColor : string = "Hai I am Cow and My Color is White"
}

class calf extends cow
{
    CColor : string = "Hai I am Calf and My color is Brown";

    family(AColor : string) : void   //non-static method without returntype and with one argument
    {
        console.log("Here in Family Method myColor is : " +AColor)
    }
}

let A = new calf();
A.family("White");
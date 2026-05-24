class cow
{
    Color : string = "Hai I am Cow and My Color is White"
}

class calf extends cow
{
    Color : string = "Hai I am Calf and My color is Brown";

    family(Color : string) : void   //non-static method without returntype and with one argument
    {
        console.log("Here in Family Method myColor is : " +Color);
        console.log(new cow().Color);  //using object accessing parent variable
        console.log(new calf().Color);  //using object accessing child variable
    
    }

}

let A = new calf();
A.family("Gray");
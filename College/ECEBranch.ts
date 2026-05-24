
class secondyear
{
    stdpresent : number = 52;    //instance variables
    static stdabsent : string = "V. Sankar";   //static variables

    present()    //method without any keyword ---> non-static method
    {
       console.log("Non-Static ---> Non-Static/Instance Variable : " +this.stdpresent);
        console.log("Non-Static ---> Static Variable : " +this.stdabsent);
    }

    static absent()   //method with static keyword  --> static method
    {
        console.log("Static ---> Non-Static/Instance Variable : " +this.stdpresent);
        console.log("Static ---> Static Variable : " +this.stdabsent);
    }
}

let H = new secondyear();   //H is an Object reference

H.present();
console.log("---------------------------------------------")
secondyear.absent();

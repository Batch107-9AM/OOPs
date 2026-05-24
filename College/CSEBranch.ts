
class secondyear
{
    stdcount : number = 52;    //instance variables
    static sirname : string = "V. Sankar";   //static variables

    stdpresent()    //method without any keyword ---> non-static method
    {
        let stdgirls = 14;   //local variables 
        console.log("The Girls Present in the class : " +stdgirls);
    }

    static stdabsent()   //method with static keyword  --> static method
    {
         let stdgirls = 7;   //local variables 
         console.log("The Girls Absent in the class : " +stdgirls);
    }
}

let H = new secondyear();   //H is an Object reference

console.log("The Total Student count in the Class is : "  +H.stdcount);  //To access instance variable we should need an "OBJECT REFERENCE"
H.stdpresent();    //we are calling the non-static methods using "OBJECT REFERENCE"
console.log("The Professor name is : " +secondyear.sirname);  //To access static variable we should need a classname
secondyear.stdabsent(); //we are calling thestatic methods using classname








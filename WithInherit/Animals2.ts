

class Lion
{
    Lname : string = "Hai I am King of the Forest";
    rainbow : string = "Have 7 Colors";
}

class Cub extends Lion      //child  extends parent
{
     Cname : string = "Hai I am Prince of the Forest";
     color : string = "Orange";

    cubrole()
    {
        console.log("The Cub Role is : " +this.Cname);
        console.log("The Lion Role is : " +this.Lname);
    }

}

let B = new Cub();
B.cubrole();
console.log(B.color);

let A = new Lion();
console.log(A.rainbow);
console.log(B.rainbow);






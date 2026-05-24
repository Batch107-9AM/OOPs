

class Lion
{
    Lname : string = "Hai I am King of the Forest";

    lionrole()
    {
        console.log("The Lion Role is : " +this.Lname);
    }
}

class Cub extends Lion      //child  extends parent
{
     Cname : string = "Hai I am Prince of the Forest";

    cubrole()
    {
        console.log("The Cub Role is : " +this.Cname);
    }

}

let B = new Cub();
B.cubrole();
B.lionrole();





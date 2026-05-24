

class Lion
{
    Lname : string = "Hai I am King of the Forest";

    lionrole()
    {
        console.log("The Lion Role is : " +this.Lname);
    }
}

class Cub 
{
     Cname : string = "Hai I am Prince of the Forest";

    cubrole()
    {
        console.log("The Cub Role is : " +this.Cname);
    }

    roles()   //we are creating object for Lion in another class (Cub) and calling the lionrole method
    {
            let A = new Lion();
            A.lionrole();
    }

}

let B = new Cub();
B.cubrole();
B.roles();





class btech
{
    student(stdcount : number) : void
    {
        console.log("The Total number of students in the BTECH 260")
    }
}

class btecheee extends btech
{
    student(stdeee : number) : void
    {
        console.log("The Total number of stduents in the EE Branch 90");
        super.student(9);
    }     
}

let B = new btecheee();
B.student(0);

class myaccount
{
    private pin : number = 1234;
}


class personalloan extends myaccount
{
    loaddata() :  void
    {
        console.log("My PIN is : " + this.pin);
    }       
}

let A = new personalloan();
A.loaddata();
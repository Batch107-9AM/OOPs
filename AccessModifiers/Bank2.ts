
class myaccount
{
    //private pin : number = 1234;  //accessing grobally 
    #pin : number = 1234;   //excluisely treaed as private
    protected aadharcard : number = 12345678;   //protected can be accessed in child class also
    name : string = "Manohar" ;  //public can be access any where
   
}


class personalloan extends myaccount
{
    loaddata() :  void
    {
        console.log("My PIN is : " + this.pin);
        console.log("My Aadhar card number is : " +this.aadharcard);
        console.log("The Customer name is : " +this.name)
    }       
}

let A = new personalloan();
A.loaddata();
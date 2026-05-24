class cow
{
    runs() : void
    {
        console.log("Hai I am cow which runs faster than Calf")
    }
}

class calf extends cow
{
    runs() : void
    {
        console.log("Hai I am calf which runs slower than cow")
    }

    family() : void  
    {
        this.runs();  //using this we are calling current class method data
        super.runs(); //using super are are calling the parent class method data
    }
}

let A = new calf();
A.family();
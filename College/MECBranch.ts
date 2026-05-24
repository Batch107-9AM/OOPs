
class secondyear
{
    static sirpresent()
    {
            console.log("Hai I am Static method --> sirpresent");
           //this.present();  //ReferenceError: present is not defined
           this.absent(); 
    }
    present()    
    {
            console.log("Hai I am Non-Static method --> present");
           // absent();  //ReferenceError: absent is not defined
    }

    static absent()   
    {
            console.log("Hai I am Static method --> absent");
    }

    sirabsent()
    {
            console.log("Hai I am Non-Static method --> sirabsent");
            this.present();
    }
}

let H = new secondyear();   //H is an Object reference

secondyear.sirpresent();  //ReferenceError: present is not defined

H.sirabsent();
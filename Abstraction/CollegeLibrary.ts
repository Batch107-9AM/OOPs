
//total books ordered are 100 books
abstract class TodayLibrary
{

    bookset1() : void
    {
        let bookcount : number = 72;  //books yet to arruve 100-72 = 28
        let costofbooks : number = 2500;
        console.log("The Number of Book in Set1 is : " +bookcount);
        console.log("The Cost of Set1 books is : " +costofbooks);
    }

    abstract bookset2() : void;
}

class TomorrowLibrary extends TodayLibrary
{
        bookset2() : void     //abstract method from parent changes to concrete method in child
        {
        let bookcount : number = 28; 
        let costofbooks : number = 1255;
        console.log("The Number of Book in Set2 is : " +bookcount);
        console.log("The Cost of Set2 books is : " +costofbooks);
        }
}

let C = new TomorrowLibrary();
C.bookset1();
C.bookset2();
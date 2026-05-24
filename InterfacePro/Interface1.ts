interface personallloan
{
    loandata() : void;
}
interface creditcard
{
    creditcardbill() : void;
}
interface fixeddeposit
{
       amountdeposit() : void;
}

class myaccount  implements fixeddeposit, creditcard, personallloan
{
    amountdeposit() : void
    {
        console.log("My Fixed Deposit Amount is 1LAKH");
    }

    creditcardbill() : void
    {
        console.log("My Credit Card Bill is NULL");
    }

    loandata() : void
    {
        console.log("I don't have any Loans")
    }
}

let A = new myaccount();
A.amountdeposit();
A.creditcardbill();
A.loandata();


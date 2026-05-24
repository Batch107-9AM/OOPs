class lax
{
    laxmaiah()
    {
        console.log("Hai I am Father of SnNTR");
    }
}

class snntr extends lax
{
    sntr()
    {
        console.log("Hai I am Father of HariKrishna");
    }
}

class harikrishna extends snntr
{
    hari()
    {
        console.log("Hai I am Father of JnTR");
    }
}

class jnntr extends harikrishna
{
    jntr()
    {
        console.log("Hai I am Son of HariKrishna");
    }
}

let J = new jnntr();

J.jntr();
J.laxmaiah();

let S = new snntr();
S.laxmaiah();

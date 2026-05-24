

class playerdata
{

    playerID : number = 14;

    constructor(id : number)   //10 of id stores into playerID
    {
        this.playerID = id;
    }
    playerName(pname : string ) : void
    {
        console.log("The Player ID is : " + this.playerID);
        console.log("The Player Name is  : " +pname);
    }

     playerRuns(pruns : number ) : void
    {
        console.log("The Player ID is : " +this.playerID);
        console.log("The Player Runs is  : " +pruns);
    }

    playerFood(pfavfood : string ) : void
    {
        console.log("The Player ID is : " +this.playerID);
        console.log("The Player Eats is  : " +pfavfood);
    }

    playerState(pstate : string ) : void
    {
        console.log("The Player ID is : " +this.playerID);
        console.log("The Player is From  : " +pstate);
    }

}


let Y = new playerdata(10);
Y.playerName("Sachin");






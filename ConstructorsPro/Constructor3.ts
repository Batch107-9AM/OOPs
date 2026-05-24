

class playerdata
{
    
    playerName(playerId : number , pname : string ) : void
    {
        console.log("The Player ID is : " +playerId);
        console.log("The Player Name is  : " +pname);
    }

     playerRuns(playerId : number , pruns : number ) : void
    {
        console.log("The Player ID is : " +playerId);
        console.log("The Player Runs is  : " +pruns);
    }

    playerFood(playerId : number , pfavfood : string ) : void
    {
        console.log("The Player ID is : " +playerId);
        console.log("The Player Eats is  : " +pfavfood);
    }

    playerState(playerId : number , pstate : string ) : void
    {
        console.log("The Player ID is : " +playerId);
        console.log("The Player is From  : " +pstate);
    }

}


let Y = new playerdata();
Y.playerName(10, "Sachin");
Y.playerRuns(10, 18000);
Y.playerFood(10, "Biryani");
Y.playerState(10, "Maharastra");





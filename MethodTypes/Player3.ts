

class cricket
{

    playerID : number = 10;   //instance

    playerdata(runs : number) : void     //one parameter as number
    {
        let playerName : string = "Sachin";   //local
        console.log("The Player ID is : " +this.playerID);
        console.log("The Runs scored by the player is : " +runs);
    }


}

let C = new cricket();
C.playerdata(14567);
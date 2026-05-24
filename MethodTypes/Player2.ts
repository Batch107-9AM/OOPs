

class cricket
{

    playerID : number = 10;   //instance

    playerdata() : string  //string is a returntype which returns string value
    {
        let playerName : string = "Sachin";   //local
        console.log("The Player ID is : " +this.playerID);
        return playerName;
    }


}

let C = new cricket();
console.log("The Player Name is : " +C.playerdata());


class cricket
{

    playerID : number = 10;   //instance

    playerdata(odiruns : number) : number     //one parameter as number
    {
        let playerName : string = "Sachin";   //local
        console.log("The Player ID is : " +this.playerID);
        let testruns :  number = 11903;
        return (odiruns+testruns);
    }


}

let C = new cricket();
console.log("The Total Runs Scored by player is " +C.playerdata(14567));
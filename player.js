class Player {
     constructor (){
        
        this.index = null;
        this.name = null;

     }

     getCount (){
        var playerCountref = database.ref("contestantCount")
        playerCountref.on("value", (data)=> {
            contestantCount = data.val()
        })

    }
    updateCount (count){
        database.ref("/").update({
            contestantCount: count
        })

    }
    update(){
        var playerIndex = "players/player"+this.index;
                database.ref (playerIndex).set({
            name: this.name, 
            
        })
    }

    static getPlayerInfo(){
        var playerInfo = database.ref("players")
        playerInfo.on("value", (data)=> {
            allPlayers = data.val()
        })

    }


}
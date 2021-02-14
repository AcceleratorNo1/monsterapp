new Vue({
    el : '#app',

    data : {
        player_health : 100,
        monster_health : 100,
        gameStart : false,
        logs : [],
    },
    methods : {
        startGame : function(){
            this.gameStart = true
        },
        attack : function(){
            let point = Math.ceil(Math.random() * 9)
            this.monsterAttack()
            this.monster_health -= point
            this.addLog({turn: "p", text: "Player attack: "+point+" damage!"})
        },
        special : function(){
            let point = Math.ceil(Math.random() * 14)
            this.monsterAttack()
            this.monster_health -= point
            this.addLog({turn: "p", text:"Player special attack: "+point+" damage!" })
        },
        heal : function(){
            let point = Math.ceil(Math.random() * 12)
            this.monsterAttack()
            this.player_health += point
            this.addLog({turn:"p", text:"Player heal: "+point+" damage healed!"})
        },
        giveUp : function(){
            this.player_health = 0
            if(confirm("Try Again ? ")){
                this.player_health()

            }
        },
        monsterAttack : function(){
            let point = Math.ceil(Math.random() * 12)
            this.player_health -= point
            this.addLog({turn:"m", text:"Monster attack: "+point+" damage!"})
        },
        addLog : function(log){
            this.logs.unshift(log)
        }
    },
    watch : {
        player_health : function(){
            if(this.player_health <= 0) {
                this.player_health = 0
                if(confirm("You Lost. Try Again ?")){
                    this.player_health = 100
                    this.monster_health = 100
                    this.logs = []
                }else {
                    this.player_health = 100
                    this.monster_health =100
                    this.gameStart = false
                    this.logs = []
                }
            }else if(this.player_health >= 100){
                this.player_health = 100
            }
        },
        monster_health : function(){
            if(this.monster_health <= 0){
                this.monster_health = 0
                if(confirm("You Won. Try Again ?")){
                    this.player_health = 100
                    this.monster_health = 100
                    this.logs = []
                }else {
                    this.player_health = 100
                    this.monster_health =100
                    this.gameStart = false
                    this.logs = []
                }
            }
        }
    }
})

var nomeDoHeroi = "Brunão";
var xpDoHeroi = 10001;
var rank = "ferro";

function rankDoHeroi(xp){
    var nivel
    if(xp<=1000){
        nivel = "Ferro"
    }else if(xp>1000 && xp<=2000){
        nivel = "Bronze"
    }else if(xp>2000 && xp<=5000){
        nivel = "Prata"
    }else if(xp>5000 && xp<=7000){
        nivel = "Ouro"
    }else if(xp>7000 && xp<=8000){
        nivel = "Platina"
    }else if(xp>8000 && xp<=9000){
        nivel = "Ascendent"
    }else if(xp>9000 && xp<=10000){
        nivel = "Imortal"
    }else{
        nivel = "Radiante"
    }

    return nivel;
}

rank = rankDoHeroi(xpDoHeroi);

console.log("O herói de nome "+nomeDoHeroi +" esta no nível "+ rank)
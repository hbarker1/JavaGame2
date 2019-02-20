"use strict";


let game = prompt ('Do you want to play a game?')
console.log(game);


startGame();



function startGame(){

if (game.toLowerCase() === 'yes') {
    let name = prompt ('What is your name?')
    console.log(name);
    startCombat(name);


}
else {
}
}


function startCombat(user){
let grant = 'Grant the Mighty Chicken';
let userHealth = 40;
let grantHealth = 10;
let grantNumberOfTimesDefeated = 0; 

    do {
        let attack1 = Math.floor((Math.random()*6));
        let attack2 = Math.floor((Math.random()*6));
       
        
        grantHealth = grantHealth - attack1;
        userHealth = userHealth - attack2;

        if (grantHealth <= 0) {
            grantHealth = 0;
            console.log('Grant is defeated')
            let fight = prompt ('Do you want to attack or quit?')
            console.log(fight);
            if (fight === 'attack'){
                
                grantHealth = 0;
                grantNumberOfTimesDefeated++;
                if (grantNumberOfTimesDefeated < 3) {
                grantHealth = 10;}


            } else if (fight === 'quit') {
                console.log ('Thank you for playing');
                break;
            }
            // grantHealth = 0;
            // grantNumberOfTimesDefeated++;
            // console.log('Grant is defeated')
            // if (grantNumberOfTimesDefeated < 3) {
            // grantHealth = 10;}
        }


        if (userHealth <= 0) {
            userHealth = 0;

        }

        console.log(`${grant} has ${grantHealth} health left`);

        console.log(`${user} has ${userHealth} health left`);



    }while (userHealth > 0 && grantNumberOfTimesDefeated < 3);
    


    if (userHealth === 0) {
        console.log('Grant wins the game!');
    }
    else {
        console.log (`${user} wins the game!`);
    }
getDamage();



}


function getDamage(){
//     prompt("Would you like to attack?")
// if (prompt.toLowerCase === 'yes' ) {
    // grantHealth = grantHealth - attack1;
    // userHealth = userHealth - attack2;

    // let attack1 = Math.floor((Math.random()*6));
    // let attack2 = Math.floor((Math.random()*6));
}











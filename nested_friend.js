const friendScore = 39;
const myScore = 95;

if(myScore>80){
    if(friendScore>80){
        console.log("OH! my firend You got 80. Let's go for lunch")
    }
    else if(friendScore>=80 || friendScore>=60){
        console.log("good luck next time.")
    }
    else if(friendScore>=60 || friendScore>=40){
        console.log("You are got under 60. Your message will keep unseen ")
    }
    else{
        console.log("You are under 40 so you are bloked. You are not in my friend list.")
    }
}else{
    console.log("You are under 80. go home and work heard to get better number.")
}


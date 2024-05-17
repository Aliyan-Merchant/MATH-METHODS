let randomnum = Math.floor(Math.random() * 10)
let userinput = +prompt("Enter a Number from 1 - 10")

    if(randomnum <= userinput){
        document.write(`You Win!`)
    }
else {
    document.write(`You Lose! Try Again`)
}



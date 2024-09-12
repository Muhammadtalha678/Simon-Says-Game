
let userGen = []
let gameGen = []

let randID = ['firstColor','secondColor','thirdColor','fourthColor']

let h2 = document.querySelector('h2')

let  level = 0 
let highestScore = 0
let gameStart = false

//first get if user press any key by evet lisyner on document

document.addEventListener('keypress',function(){
    if (!gameStart) {
        gameStart = true
        levelUp()
    }
})

// create levelup function to increae level and gen game rand no to get indx form randID and after
// through that id we access that button and blink that button . this process will continue till user
// match correctly sequence of gameSeq list

const levelUp = ()=>{
    level++
    let randIdx = Math.floor(Math.random()*4)
    let randId =  randID[randIdx]
    let randBtn = document.querySelector("#"+randId)
        console.log(randBtn);
        
}


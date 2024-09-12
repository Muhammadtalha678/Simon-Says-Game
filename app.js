
let userGen = []
let gameGen = []

let randID = ['btn-1','btn-2','btn-3','btn-4']

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
    userGen = []
    level++
    h2.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random()*4)
    let randId =  randID[randIdx]
    let randBtn = document.querySelector(`#${randId}`)
    gameGen.push(randId)
    console.log('gameSeq',gameGen);
    btnFlash(randBtn)
}

const btnFlash = (btn) =>{
    btn.classList.add('btnWhite')
    
    setTimeout(() => {
        btn.classList.remove('btnWhite')
    }, 300);
    
} 

const userPress = (btn)=>{
    if (gameStart) {
        btnFlash(btn)
    let usrBtnId = btn.getAttribute('id')
    userGen.push(usrBtnId)
    console.log(userGen);
    
    checkBothArrEqu()
    }
}

const checkBothArrEqu = () => {
    if (userGen[userGen.length - 1] === gameGen[userGen.length - 1]) {
        if (userGen.length == gameGen.length) {
            setTimeout(() => {
                levelUp()
            }, 500);
        }
    }
    else{
        if (highestScore < level) {
            higScr(level)
        }
        h2.innerText = `Game Over! Your score was ${level}`
        level = 0
        gameGen = []
        gameStart = false
        document.body.style.backgroundColor = 'red'
        
        setTimeout(() => {
            document.body.style.backgroundColor = 'white'
        }, 100);

    }
}

const higScr = (highestScore) => {
    const h3 = document.querySelector('h3')
    h3.innerText = `Highest Score: ${highestScore}`
} 

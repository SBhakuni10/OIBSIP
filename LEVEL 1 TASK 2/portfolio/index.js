//to change the options in about me
let myTabs=document.getElementsByClassName('tab-links');
let myDatas=document.getElementsByClassName('my-data');
function openTab(option){
    for(myTab of myTabs){
        myTab.classList.remove('action')
    }
    for(myData of myDatas){
        myData.classList.remove('show')
    }
    event.currentTarget.classList.add('action');
    document.getElementById(option).classList.add('show');

}
//clickable functions for the projects
const calculator=document.querySelector('#calculator');
calculator.addEventListener('click',()=>{
    window.open("calculator.html");
})

const MyntraClone=document.querySelector('#Myntraclone');
MyntraClone.addEventListener('click',()=>{
    window.open("myntra2.html");
}) 

const game=document.querySelector('#game');
game.addEventListener('click',()=>{
    window.open("rock paper scissor Game.html");
})

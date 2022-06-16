
let increment= document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let valuecounter= document.querySelector("#valuecounter");

let counter = 0;

increment.addEventListener("click",()=>{
    counter++;
    valuecounter.innerHTML= counter;
});
decrement.addEventListener("click",()=>{
    counter--;
    valuecounter.innerHTML=counter;
});

let increment= document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let valuecounter= document.querySelector("#valuecounter");

let counter = 0;

increment.addEventListener("click",()=>{
    counter++;
    valuecounter.innerHTML= counter;
    if(counter >=1){
        valuecounter.style.color= "green" ;  
    }else if(counter==0){
        valuecounter.style.color="black" ;
    }
});
decrement.addEventListener("click",()=>{
    counter--;
    valuecounter.innerHTML=counter;
    if(counter < 1){
        valuecounter.style.color= "red"   
    }else if(counter==0){
        valuecounter.style.color="black" ;
    }
});

const hiddenDev = document.getElementById("hiddenDev");
const visible = document.getElementById("visible");

const historyBtn = document.getElementById("History-btn");
const donet = document.getElementById("donte-btn")

historyBtn.addEventListener("click", function(){
    historyBtn.classList.add("bg-pink-300")
    historyBtn.classList.remove("bg-blue-300")
    hiddenDev.classList.add("hidden")
    visible.classList.remove("hidden")

})

donet.addEventListener("click",function(){
    donet.classList.remove("bg-blue-300")
    donet.classList.add("bg-pink-300")
    
   
    hiddenDev.classList.remove("hidden")
    visible.classList.add("hidden")
})
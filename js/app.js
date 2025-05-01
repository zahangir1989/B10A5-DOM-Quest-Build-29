
const hiddenDev = document.getElementById("hiddenDev");
const visible = document.getElementById("visible");

const historyBtn = document.getElementById("History-btn");
const donet = document.getElementById("donte-btn")

historyBtn.addEventListener("click", function(){
    historyBtn.classList.add("bg-green-200")
    historyBtn.classList.remove("bg-gray-200")
    
    hiddenDev.classList.add("hidden")
    visible.classList.remove("hidden")

})

donet.addEventListener("click",function(){
    donet.classList.remove("bg-gray-200")
    donet.classList.add("bg-red-200");
    
   
    hiddenDev.classList.remove("hidden")
    visible.classList.add("hidden")
})


// document.getElementById('btn-donate-1').addEventListener('click', function(){
//     // console.log("btn is clicked now")
//     const sumary = document.getElementById("headline");
//     const newSumary = sumary.innerText;
//     console.log(newSumary);

//     const description = document.getElementById('description');
//     const newDescription = description.innerText;
//     console.log(newDescription);

//     const visibleContainer = document.getElementById('visible');
//     const p = document.createElement('p');
//     p.innerText= newSumary;
//     p.innerText= newDescription
//     visibleContainer.appendChild(p);
// })

document.getElementById('btn-donate-1').addEventListener('click', function(){
 
    const fullDivInner = document.getElementById('fullDiv1');
    const displayDiv = fullDivInner.innerText;
    console.log(displayDiv);

const visibleContainer = document.getElementById('visible');
const  p = document.createElement('p');
p.innerText = displayDiv;
visibleContainer.appendChild(p);
})

document.getElementById('btn-donate-2').addEventListener('click', function(){
 
    const fullDivInner = document.getElementById('fullDiv2');
    const displayDiv = fullDivInner.innerText;
    console.log(displayDiv);

const visibleContainer = document.getElementById('visible');
const  p = document.createElement('p');
p.innerText = displayDiv;
visibleContainer.appendChild(p);
})

document.getElementById('btn-donate-3').addEventListener('click', function(){
 
    const fullDivInner = document.getElementById('fullDiv1');
    const displayDiv = fullDivInner.innerText;
    console.log(displayDiv);

const visibleContainer = document.getElementById('visible');
const  p = document.createElement('p');
p.innerText = displayDiv;
visibleContainer.appendChild(p);
})
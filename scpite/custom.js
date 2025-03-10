document.getElementById("theme").addEventListener("click", function () {
   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
   document.body.style.backgroundColor = randomColor;
});




// document.getElementById("something").addEventListener("click", function () {
//    window.location.href ="/main.html";  
// });



const timeElement = document.getElementById('time');
const currentDate = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
timeElement.innerText = formattedDate;

const datas = document.querySelectorAll(".data-set");
const itemDataLength = document.getElementById("item-data-length");
const card = document.getElementById("card-lanth");
const conta = document.getElementById("conta");

let activeButtons = datas.length;
let cardCount = 20;
let completedCount = 0; 

itemDataLength.innerText = activeButtons.toString();
card.innerText = cardCount.toString();

for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    const button = data.querySelector(".compolet");
    const fasdata = data.querySelector(".fasdata");

    button.addEventListener("click", function (event) {
        if (completedCount === 6) {
                alert("Congrats! You have completed 6 tasks.");
        }
         alert("Bord update succsuess")
        if (!event.target.disabled) { 
            
            
            event.target.disabled = true; 
            event.target.style.backgroundColor = "gray"; 
            event.target.innerText = "Completed"; 
            
            activeButtons--;
            itemDataLength.innerText = activeButtons.toString();
            cardCount++;  
            card.innerText = cardCount.toString();

            completedCount++; 

            const fasdataText = fasdata.innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString(); 
            const newElem = document.createElement("p");
            newElem.className = "text-xl font-bold block bg-[#F4F7FF] shadow-2xl mb-3 rounded-lg p-4";
            newElem.innerText = `You have Completed The Task - ${fasdataText} - ${timeString}`;

            conta.appendChild(newElem);

            if (completedCount === 6) {
                alert("Congrats! You have completed 6 tasks.");
            }

            
        }
    });
}


document.getElementById("clear").addEventListener("click", function() {
    const conta = document.getElementById("conta");
    conta.innerHTML = ""; 
});






let sp = document.querySelectorAll("span");

setInterval(() => {
    let no = Math.floor(Math.random() * sp.length);
    let h = Math.floor(Math.random() * 100);
    let w = Math.floor(Math.random() * 100);

    sp[no].style.top = h + "%";
    sp[no].style.left = w + "%";
    sp[no].style.opacity = 1;

    setTimeout(() => {
        sp[no].style.opacity = 0;
    }, 1000);

}, 50);

const yesbutton = document.querySelector(".yes");
const nobutton = document.querySelector(".no");
const openbutton = document.querySelector(".open");
const leavebutton = document.querySelector(".leave");
const convertbutton = document.querySelector(".convert");
const message = document.querySelector(".message");
const giff = document.querySelector(".wgif");

yesbutton.addEventListener("click",doSomething);

function doSomething(){
    message.textContent = "YAAAY , Open this😄 ";
    yesbutton.classList.add("hidden");
    nobutton.classList.add("hidden");
    openbutton.classList.remove("hidden");
    giff.src="yees.gif"

    
}
openbutton.addEventListener("click",openfunction);
function openfunction(){
    message.textContent = "Eid mubaraaaak ,Taqabbal allahu minna wa minkuuuum , May Allah accept our good deeds and worships, don't be sad if you feel like you haven't done enough this Ramadan , Allah will always reward you with what your heart carries ,And may Allah let us reach the next Ramadan so we can always do more deeds and witness this spiritual happiness again 🤲 <3 " 

    openbutton.classList.add("hidden")
    giff.src="eid.gif"

}
nobutton.addEventListener("click",notmuslimfunction);
function notmuslimfunction(){
    message.textContent = "Oops , Sorry ,you can't see this ☹️ "
    yesbutton.classList.add("hidden");
    nobutton.classList.add("hidden");
    leavebutton.classList.remove("hidden");
    convertbutton.classList.remove("hidden");
    giff.src="sad.gif"


}
convertbutton.addEventListener("click",convfunction);
function convfunction(){
    message.textContent = "That's very smart from u Sir ,You can open it then , You deserve it 😻 <3"
    openbutton.classList.remove("hidden");
    leavebutton.classList.add("hidden");
    convertbutton.classList.add("hidden");
    giff.src="smart.gif"
}
leavebutton.addEventListener("click",byebyefunction)
function byebyefunction(){
    leavebutton.classList.add("hidden");
    convertbutton.classList.add("hidden");
    message.textContent = "ByeByyye then 😿 "
    giff.src="byebye.gif"

}

const gif = document.querySelector(".gif");

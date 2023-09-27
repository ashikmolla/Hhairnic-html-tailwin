const dartMood =document.getElementById('dart');
const whatMood =document.getElementById('whit');

let mainElement =document.getElementById("main");

dartMood.addEventListener("click",()=>{
mainElement.classList.toggle("dart")
})
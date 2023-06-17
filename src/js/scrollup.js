
const calcScrollValue =  () =>{
  const refs ={
    scrollProgress:document.querySelector(".progress"),
    progressValue:document.querySelector(".progress-value"),
    pos:document.documentElement.scrollTop,
  }
const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const  scrollValue = Math.round((refs.pos * 100)/ calcHeight);
if (refs.pos > 100){
refs.scrollProgress.style.display = "grid";
} else {
  refs.scrollProgress.style.display = "none";
}
refs.scrollProgress.addEventListener("click", () =>{
document.documentElement.scrollTop = 0;
});
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let h2=document.querySelector("h2");
    let rndclr=getclr();
    h2.innerText=rndclr;
    let div=document.querySelector("div");
    div.style.backgroundColor=rndclr;

   
});
function getclr(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`
    return color;


}

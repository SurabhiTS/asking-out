const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
noBtn.addEventListener('mouseover',function(){
   
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.floor(Math.random() * window.innerHeight)+"px";
    noBtn.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    noBtn.style.transition = 'top 0.3s , left 0.3s';
    console.log(noBtn.style.top , " ", noBtn.style.left);
    console.log(window.innerHeight," ",window.innerWidth);
    console.log("--------------");
    
})
yesBtn.addEventListener('click', function(){
    document.querySelector("#text").innerText = "Yeyyyyyy!";
    document.querySelector("#gif").src = 'yes.webp';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});
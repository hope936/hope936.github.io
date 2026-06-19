window.onload = function(){
    const items = document.querySelectorAll(".ad-item");
    let index = 0;
    function autoPlay(){
        for(let i=0;i<items.length;i++) items[i].style.display = "none";
        items[index].style.display = "block";
        index = (index+1) % items.length;
    }
    autoPlay();
    setInterval(autoPlay,3000);
}

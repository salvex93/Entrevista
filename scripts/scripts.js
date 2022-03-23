window.onload = (()=>{
    let move = document.querySelector("#move-randomly");
    move.addEventListener("mouseover", function(e) {
        console.log(move);
        let min = 50;
        move.style.position = "fixed";
        move.style.left = (Math.random() * (window.screen.width - min) + min) + "px";
        move.style.top = (Math.random() * (window.screen.height - min) + min) + "px";
        
    });
})
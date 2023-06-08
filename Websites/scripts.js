let scrollY = window.scrollY;

document.addEventListener("scroll", ()=>{
    let newScrollY = window.scrollY;

    if(newScrollY < scrollY){
        console.log("up");
        scrollY = newScrollY;
    } else {
        console.log("down");
        scrollY = newScrollY;
    }
})
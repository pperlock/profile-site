export const toggleStory = (section)=>{
    console.log(section + "__white");
    let whiteOverlay = document.getElementById(section + "__white-overlay");
    let fullText = document.getElementById(section + "__full-text");
    console.log(whiteOverlay.classList.length);

    if (whiteOverlay.classList.length <= 2){
        fullText.classList.add("full-text--on");
        whiteOverlay.classList.add("white-overlay--on");

    }else{
        if (document.querySelector("white-overlay--off")){
            console.log("turn on");
            fullText.classList.add("full-text--on");
            fullText.classList.remove("full-text--off")
            whiteOverlay.classList.add("white-overlay--on");
            whiteOverlay.classList.remove("white-overlay--off");

        }else{
            console.log("turn off");
            fullText.classList.remove("full-text--on");
            fullText.classList.add("full-text--off")
            whiteOverlay.classList.add("white-overlay--off");
            whiteOverlay.classList.remove("white-overlay--on");
        }
    }
        
}
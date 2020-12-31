export const toggleStory = (section)=>{
    console.log(section);
    let whiteOverlay = document.getElementById(section + "__white-overlay");
    let fullText = document.getElementById(section + "__full-text");

    if (whiteOverlay.classList.length <= 2){
        fullText.classList.add("full-text--on");
        whiteOverlay.classList.add("white-overlay--on");

    }else{
        if (whiteOverlay.classList.contains("white-overlay--off")){
            fullText.classList.add("full-text--on");
            fullText.classList.remove("full-text--off")
            whiteOverlay.classList.add("white-overlay--on");
            whiteOverlay.classList.remove("white-overlay--off");

        }else{
            fullText.classList.remove("full-text--on");
            fullText.classList.add("full-text--off")
            whiteOverlay.classList.add("white-overlay--off");
            whiteOverlay.classList.remove("white-overlay--on");
        }
    }
        
}
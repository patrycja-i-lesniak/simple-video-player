const createPlayer = () => {
    const video = document.querySelector("video");
    const play = document.querySelector(".js-play");

    const togglePlay = () => {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    play.addEventListener("click", togglePlay);

}
createPlayer(document.querySelector(".js-videoPlayer"));

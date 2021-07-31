const createPlayer = () => {
    const video = document.querySelector("video");
    const play = document.querySelector(".js-play");

    const togglePlay = () => {
        if(video.paused) {
            video.play();
            play.classList.remove("fa-play");                   // 8a.
            play.classList.add("fa-pause");
        } else {
            video.pause();
            play.classList.remove("fa-pause");                   // 8a.
            play.classList.add("fa-play");
        }
    }

    play.addEventListener("click", togglePlay);

}
createPlayer(document.querySelector(".js-videoPlayer"));

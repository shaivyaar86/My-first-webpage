function toggleMode() {

    document.body.classList.toggle("light-mode");
}
const song = document.getElementById("mySong");

const progress = document.getElementById("progress");

const musicBtn = document.getElementById("musicBtn");

const time = document.getElementById("time");


function playSong() {

    if (song.paused) {

        song.play();

        musicBtn.innerHTML = "⏸ Pause Song";

    } else {

        song.pause();

        musicBtn.innerHTML = "▶ Play Song";
    }
}


song.addEventListener("timeupdate", () => {

    progress.max = song.duration;

    progress.value = song.currentTime;

    let currentMinutes =
        Math.floor(song.currentTime / 60);

    let currentSeconds =
        Math.floor(song.currentTime % 60);

    let totalMinutes =
        Math.floor(song.duration / 60);

    let totalSeconds =
        Math.floor(song.duration % 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
    }

    time.innerHTML =
        `${currentMinutes}:${currentSeconds}
         / ${totalMinutes}:${totalSeconds}`;
});


progress.addEventListener("input", () => {

    song.currentTime = progress.value;
});
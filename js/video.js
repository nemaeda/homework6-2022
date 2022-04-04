var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("The current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate);
	video.playbackRate *= 0.95
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("The current speed is " + video.playbackRate);
	video.playbackRate /= 0.95
	console.log("The new speed is " + video.playbackRate);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted);
	if (video.muted) {
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute"
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	console.log("The new value of mute is " + video.muted);
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is " + this.value)
	video.volume = this.value / 100
	console.log("The new volume is " + this.value)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("The current time is " + video.currentTime)
	video.currentTime += 15
	console.log("The new time is " + video.currentTime)
	video.loop = true
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
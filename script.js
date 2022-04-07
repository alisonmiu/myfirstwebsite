window.document.onkeydown = function(e) {
	if (!e) {
		e = event;
	}
	if (e.keyCode == 27) {
		lightbox_close();
	}
}

// Get all film images
let films = document.querySelectorAll(".films img");

// On click, show the lightbox with video
films.forEach(function(image) {
	image.addEventListener('click', function(event) {
		let video_url = event.target.getAttribute('data-trailer')
		let embed = youtube_embed(video_url)
		let player = document.getElementById('lightbox-player')
		player.innerHTML = '';
		player.appendChild(embed)

		document.getElementById('light').style.display = 'block';
	})
})

function youtube_embed(url) {
	let iframe = '<iframe width="560" height="315" src="' + url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	let div = document.createElement('div')
	div.innerHTML = iframe
	return div
}

function lightbox_open() {
	let lightBoxVideo = document.getElementById("MorbiusVideo");
	window.scrollTo(0, 0);

	document.getElementById('light').style.display = 'block';

	document.getElementById('fade').style.display = 'block';
	lightBoxVideo.play();
}

function lightbox_close() {
	let lightBoxVideo = document.getElementById("MorbiusVideo");

	document.getElementById('light').style.display = 'none';

	document.getElementById('fade').style.display = 'none';
	lightBoxVideo.pause();
}

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
	let iframe = '<iframe id="youtube_embed" width="560" height="315" src="' + url + '?enablejsapi=1&version=3&playerapiid=ytplayer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	let div = document.createElement('div')
	div.innerHTML = iframe
	return div
}

function lightbox_close() {
	document.getElementById('light').style.display = 'none';
	document.getElementById('fade').style.display = 'none';
	document.getElementById('youtube_embed').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
}
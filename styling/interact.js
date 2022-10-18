document.addEventListener("DOMContentLoaded", function() {
	var promise = document.getElementById("autoplay").play();

	if (promise !== undefined) {
		promise.then(function() {}).catch(function(error) {
			var autoplayCover = document.createElement("div");
			autoplayCover.id = "autoplay-cover";
			autoplayCover.innerHTML = `<img src="img/accepterB.png">`;
			document.body.appendChild(autoplayCover);
			autoplayCover.addEventListener("click", function() {
				autoplayCover.className = "hide";
				setTimeout(function() {
					document.body.removeChild(autoplayCover);
				}, 500);
				document.getElementById("autoplay").play();
			});
		});
	}
});

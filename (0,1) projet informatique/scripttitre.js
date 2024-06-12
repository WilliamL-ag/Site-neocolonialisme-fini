	
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
gsap.registerPlugin(ScrollTrigger)
	const text = baffle('.titre');
	text.set({
		characters : 'zpxzVpdfh86136░█▒ ░░░█▓ >░░ ▓/▒█▓ █ █>█▒sayg▒ ░░░█▓ >yf',
		speed: 40
	});
	text.start();
	text.reveal(1500);



	const text1 = baffle('.quote');
	text1.set({
		characters : 'qweryvger482hvh38',
		speed: 50
	});
	text1.start();
	text1.reveal(1900);

	var vid = document.getElementById("");
    vid.autoplay = false;
    vid.load();
	

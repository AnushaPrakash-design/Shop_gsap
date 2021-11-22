const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// const tl = new timelineLite({ paused: true });
const tl = new gsap.timeline({ paused: true, reversed: true });

tl.to(".cover", {
	width: "60%",
	ease: Power2.easeOut,
	duration: 1,
})
	.to(
		"nav",
		{
			height: "100%",
			ease: Power2.easeOut,
			duration: 1,
		},
		"-= 0.5"
	)
	.fromTo(
		".nav-open",
		{
			duration: "-=0.5",
			opacity: 0,
			x: 50,
			ease: Power2.easeOut,
		},
		{ opacity: 1, x: 1 }
	);

navButton.addEventListener("click", (e) => {
	if (tl.isActive()) {
		e.preventDefault();
		e.stopImmediatePropagation();
		return false;
	}

	// tl.play();
	tl.reversed() ? tl.play() : tl.reverse();
	// tl.play();
});

function christmasCountdown() {
	const christmasDate = new Date('December 25, 2022 00:00');
	const now = new Date();
	const diff = christmasDate - now;
 
	const msInSecond = 1000;
	const msInMinutes = 60 * 1000;
	const msInHours = 60 * 60 * 1000;
	const msInDay = 24 * 60 * 60 * 1000;
 
	const displayDay = Math.floor(diff / msInDay);
	document.querySelector('.days').textContent = displayDay;
 
	const displayHours = Math.floor((diff % msInDay) / msInHours);
	document.querySelector('.hours').textContent = displayHours;
 
	const displayMinutes = Math.floor((diff % msInHours) / msInMinutes);
	document.querySelector('.minutes').textContent = displayMinutes;
 
	const displaySeconds = Math.floor((diff % msInMinutes) / msInSecond);
	document.querySelector('.seconds').textContent = displaySeconds;
 
	if (diff <= 0) {
	   document.querySelector('.days').textContent = 0;
	   document.querySelector('.hours').textContent = 0;
	   document.querySelector('.minutes').textContent = 0;
	   document.querySelector('.seconds').textContent = 0;
	   clearInterval(timerId);
	   marryChristmas();
	}
 }
 let timerId = setInterval(christmasCountdown, 1000);
 
 christmasCountdown();
 
 function marryChristmas() {
	const heading = document.querySelector('h1');
	heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!!!'
	heading.classList.add('red');
 }
 
 const button = document.querySelector('#btn');
 const audio = document.querySelector('#myAudio');
 button.addEventListener('click', () => {
	if (audio.paused) {
	   audio.play();
	} else {
	   audio.pause();
	}
 })
 
 
 //snow
 particlesJS("particles-js", {
	particles: {
	   number: {
		  value: 100,
		  density: {
			 enable: true,
			 value_area: 631.3280775270874
		  }
	   },
	   color: {
		  value: "#fff"
	   },
	   shape: {
		  type: "circle",
		  stroke: {
			 width: 0,
			 color: "#fff"
		  },
		  polygon: {
			 nb_sides: 5
		  },
		  image: {
			 src: "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
			 width: 100,
			 height: 100
		  }
	   },
	   opacity: {
		  value: 0.5,
		  random: false,
		  anim: {
			 enable: false,
			 speed: 0.5,
			 opacity_min: 0.1,
			 sync: false
		  }
	   },
	   size: {
		  value: 10,
		  random: true,
		  anim: {
			 enable: false,
			 speed: 40,
			 size_min: 0.1,
			 sync: false
		  }
	   },
	   line_linked: {
		  enable: false,
		  distance: 500,
		  color: "#ffffff",
		  opacity: 0.5,
		  width: 2
	   },
	   move: {
		  enable: true,
		  speed: 2,
		  direction: "bottom",
		  random: false,
		  straight: false,
		  out_mode: "out",
		  bounce: false,
		  attract: {
			 enable: false,
			 rotateX: 300,
			 rotateY: 1200
		  }
	   }
	},
	interactivity: {
	   detect_on: "canvas",
	   events: {
		  onhover: {
			 enable: false,
			 mode: "bubble"
		  },
		  onclick: {
			 enable: true,
			 mode: "repulse"
		  },
		  resize: true
	   },
	   modes: {
		  grab: {
			 distance: 150,
			 line_linked: {
				opacity: 0.5
			 }
		  },
		  bubble: {
			 distance: 400,
			 size: 4,
			 duration: 0.3,
			 opacity: 1,
			 speed: 3
		  },
		  repulse: {
			 distance: 200,
			 duration: 0.4
		  },
		  push: {
			 particles_nb: 4
		  },
		  remove: {
			 particles_nb: 2
		  }
	   }
	},
	retina_detect: true
 });
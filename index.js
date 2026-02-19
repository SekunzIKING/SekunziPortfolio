// Navbar mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarUl = document.querySelector('.navbar ul');
menuToggle.addEventListener('click', () => {
	navbarUl.classList.toggle('active');
	menuToggle.classList.toggle('open');
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href').slice(1);
		const targetSection = document.getElementById(targetId);
		if (targetSection) {
			window.scrollTo({
				top: targetSection.offsetTop - 60,
				behavior: 'smooth'
			});
		}
		if (window.innerWidth <= 700) {
			navbarUl.classList.remove('active');
			menuToggle.classList.remove('open');
		}
	});
});

// Section reveal animation on scroll
const animatedSections = document.querySelectorAll('.animated-section');
const animatedFooter = document.querySelector('.animated-footer');
function revealOnScroll() {
	const triggerBottom = window.innerHeight * 0.85;
	animatedSections.forEach(section => {
		const sectionTop = section.getBoundingClientRect().top;
		if (sectionTop < triggerBottom) {
			section.classList.add('visible');
		}
	});
	if (animatedFooter) {
		const footerTop = animatedFooter.getBoundingClientRect().top;
		if (footerTop < window.innerHeight) {
			animatedFooter.classList.add('visible');
		}
	}
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Fade-in animation while scrolling

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.15 });


document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});


// Floating hearts

for(let i = 0; i < 12; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-30px";
    heart.style.color = "#b85d78";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "0.4";
    heart.style.fontSize = "20px";
    heart.style.zIndex = "-1";

    document.body.appendChild(heart);

    heart.animate([
        { transform: "translateY(0)", opacity: 0.4 },
        { transform: "translateY(-110vh)", opacity: 0 }
    ], {
        duration: 15000 + Math.random() * 10000,
        iterations: Infinity,
        delay: Math.random() * -15000
    });

}

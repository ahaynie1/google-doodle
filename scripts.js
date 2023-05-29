// GSAP included in `index.html`
console.log('OK');

// GSAP Animations
// drop in champs
gsap.from(".champs", {
  y: -500,
  duration: 1,
  ease: "elastic.out(.25, 0.3)"
});

// drop in medals
gsap.from(".medal", {
  y: -500,
  stagger: 0.75,
  delay: 1,
  ease: "elastic.out(.25, 0.3)"
});

// drop in rings
gsap.from(".ring", {
  y: -500,
  duration: 0.5,
  delay: 4.75,
  ease: "elastic.out(.25, 0.3)"
});

// slide GLE over
gsap.from("#g2, #l, #e", {
  x: -80,
  duration: 5,
  delay: 0.55,
  ease: "steps(6),"
});

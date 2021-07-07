const hero = document.querySelector(".about");
const brief = document.querySelector(".brief ");
gsap.registerPlugin(ScrollTrigger);

var tl = new TimelineMax({});

tl.fromTo(
  hero,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power2.easeInOut }
)
  .fromTo(hero, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(brief, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");

// gsap.to(".brief_info", {
//   scrollTrigger: {
//     trigger: ".brief_info",
//     pin: true, // pin the trigger element while active
//     start: "center", // when the top of the trigger hits the top of the viewport
//     end: "+=500", // end after scrolling 500px beyond the start
//   },
//   x: 500,
//   rotation: 360,
// });
// tl.addLabel("start")
//   .from(".brief_info", { scale: 0.3, rotation: 45, autoAlpha: 0 })
//   .addLabel("color")
//   .from(".box", { backgroundColor: "#28a92b" })
//   .addLabel("spin")
//   .to(".box", { rotation: 360 })
//   .addLabel("end");

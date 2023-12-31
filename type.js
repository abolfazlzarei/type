const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500;

hero.addEventListener("mousemove", function (event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;
  x += event.target.offsetLeft;
  y += event.target.offsetTop;
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgb(215,195,165),
        ${xWalk * -1}px ${yWalk}px 0 rgb(52 ,31,151),
        ${yWalk}px ${xWalk * -1}px 0 rgba(243 ,104,224,.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(254 ,202,87,.7)                                                        
    `;
});





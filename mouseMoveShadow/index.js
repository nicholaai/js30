const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
// how many pixels at the most should the image be stretched -- 100px;
const walk = 200;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX: x, offsetY: y } = e;

  /*
    when we are doing a mouseover, even though the event listener is on hero,
    it can be called when the element in focus is the h1 tag.
    if so, we need to make x and y equal to the old values of x and y
    PLUS the coordinates of the cursor on the h1 tag.
    this will always be hero, that's where the listener is, but the target
    can change. if they're not the same, then this addition needs to take
    place.
  */
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // with a walk of 100, we'll have a range from -50 to 50
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue
  `;
}

hero.addEventListener('mousemove', shadow);

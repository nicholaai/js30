const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandList = document.querySelector('#bands');

function trim(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim().toUpperCase();
}

const sortedBands = bands.sort((a, b) => {
  const aTrim = trim(a);
  const bTrim = trim(b);
  if (aTrim < bTrim) {
    return -1;
  } else if (aTrim > bTrim) {
    return 1;
  }
  return 0;
});

bandList.innerHTML = sortedBands.map(item => `<li>${item}</li>`).join('');

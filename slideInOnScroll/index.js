function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');
/*
  This example will slide the image in and out as you move up and down
  the page. In a real use case, we would want to keep a flag for the image
  to only slide in once.

  1. slideInAt is the pixel on the y axis that is halfway through the image
  2. if the current pixel on Y axis we're at is greater than how far the image top is
     from the top of the window, the image is half shown
  3. the bottom of the image is location on the y axis is determined
     by getting how far the top of the image is from the top of the page
     and adding in the height of the image
  4. if we haven't scrolled past the image, our current
     window.scrollY(which is the pixel at the top of the window) will be
     less than the image bottom pixel
*/
function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));

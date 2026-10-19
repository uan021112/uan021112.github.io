const avatarButton = document.querySelector('.profile-photo');
const avatarImage = avatarButton.querySelector('img');
const originalSrc = avatarImage.getAttribute('src');
const originalAlt = avatarImage.alt;
const originalLabel = avatarButton.getAttribute('aria-label');
let clickCount = 0;

avatarButton.addEventListener('click', () => {
  clickCount += 1;

  if (clickCount === 5) {
    avatarImage.src = 'images/hi.png';
    avatarImage.alt = 'Alternate avatar';
    avatarButton.setAttribute('aria-label', 'Restore original avatar');
  } else if (clickCount === 6) {
    avatarImage.src = originalSrc;
    avatarImage.alt = originalAlt;
    avatarButton.setAttribute('aria-label', originalLabel);
    clickCount = 0;
  }
});

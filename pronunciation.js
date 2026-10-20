const pronunciation = document.querySelector('.name-pronunciation');
const trigger = pronunciation.querySelector('.pronunciation-trigger');
const tooltip = pronunciation.querySelector('.pronunciation-tooltip');

const showPronunciation = () => {
  tooltip.hidden = false;
};

const hidePronunciation = () => {
  tooltip.hidden = true;
};

pronunciation.addEventListener('pointerenter', (event) => {
  if (event.pointerType !== 'touch') showPronunciation();
});
pronunciation.addEventListener('pointerleave', () => {
  if (document.activeElement !== trigger) hidePronunciation();
});
trigger.addEventListener('focus', showPronunciation);
trigger.addEventListener('blur', hidePronunciation);
trigger.addEventListener('click', showPronunciation);

document.addEventListener('pointerdown', (event) => {
  if (!pronunciation.contains(event.target)) hidePronunciation();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hidePronunciation();
});

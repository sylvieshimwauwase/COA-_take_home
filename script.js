const effect = document.querySelectorAll('.section');

effect.forEach((section) => {
  const image = section.querySelector('.image');
  const textDescription = section.querySelector('.textDescription');
  const imageTexts = section.querySelector('.imageTexts');
  const element = document.createElement('element');
  element.classList.add('btn-primary');

  element.innerHTML = 'Know more &#129130;';
  imageTexts.appendChild(element);

  // Hide element initially with opacity
  element.style.opacity = 0;

  section.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1)';
    image.style.filter = 'grayscale(100%) blur(4px) brightness(50%)';
    image.style.transition = 'all 0.5s ease';
    textDescription.style.transform = 'translateY(-20%)';
    textDescription.style.transition = 'all 0.5s ease';

    // Fade in element on hover
    element.style.opacity = 1;
  });

  section.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1.1)';
    image.style.filter = 'grayscale(0%) blur(0px) brightness(100%)';
    image.style.transition = 'all 0.5s ease';
    textDescription.style.transform = 'translateY(0%)';
    textDescription.style.transition = 'all 0.5s ease';

    // Fade out element on mouseout
    button.style.opacity = 0;
  });
});

const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
      const image = section.querySelector('.image');
      const textDescription = section.querySelector('.textDescription');
      const imageTexts = section.querySelector('.imageText');
      const button = document.createElement('button');
      button.classList.add('btn-primary');
      button.innerHTML = 'Know more';
      button.appendChild(button);

      // setting button invisible by default
      button.style.display = 'none';

      section.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1)';
            image.style.filter = 'grayscale(100%) blur(4px) brightness(50%)';
            image.style.transition = 'all 0.5s ease';
            textDescription.style.transform = 'translateY(-20%)';
            textDescription.style.transition = 'all 0.5s ease';

            // setting button visible on hover
            button.style.display = 'block';
      });
      section.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1.1)';
            image.style.filter = 'grayscale(0%) blur(0px) brightness(100%)';
            image.style.transition = 'all 0.5s ease';
            textDescription.style.transform = 'translateY(0%)';
            textDescription.style.transition = 'all 0.5s ease';

            // setting button invisible on mouseout
            button.style.display = 'none';
      });
});
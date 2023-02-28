const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {'pic1.jpg' : 'Closeup of a human eye','pic2.jpg' : 'Rock that looks like a wave','pic3.jpg' : 'Purple and white pansies','pic4.jpg' : 'Section of wall from a pharoah\'s tomb','pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

button.addEventListener('click', () => {
  const buttonClass = button.getAttribute('class');
  if (buttonClass === 'dark') {
    button.setAttribute('class','light');
    button.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    button.setAttribute('class','dark');
    button.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
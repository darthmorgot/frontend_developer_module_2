import MainComponent from './js/MainComponent.js';

const component = MainComponent('My component text');

document.querySelector('body').appendChild(component);

const init = () => {
  const div = document.getElementById('content');
  if(div){
    div.textContent = 'Text is added by javascript and webpack!!!';
  }
};

init();

console.log(`2 * 4 = ${2 * 4}`);

console.log('Test index page.');

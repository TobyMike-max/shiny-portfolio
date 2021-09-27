
let theme = localStorage.getItem('theme');

if(theme === null){
  setTheme('light')
} else {
  setTheme(theme)
}




let themeDots = document.getElementsByClassName('theme-dot')

for( var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', (e) => {
    let mode = e.target.dataset.mode;
    setTheme (mode);
    })
}

function setTheme (mode) {
  if (mode === 'light') {
    document.getElementById('theme-style').href = 'default.css'
  }
  if (mode === 'blue') {
    document.getElementById('theme-style').href = 'blue.css'
  }
  if (mode === 'green') {
    document.getElementById('theme-style').href = 'green.css'
  }
  if (mode === 'purple') {
    document.getElementById('theme-style').href = 'purple.css'
  }


localStorage.setItem('theme', mode);
}





const TypeWriter = function(txtElement, words, wait= 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// type() Method
TypeWriter.prototype.type = function () {

// Current index of word
const current = this.wordIndex % this.words.length;

// Get full text of current word
const fullTxt = this.words[current];

// Check if isDeleting state
if(this.isDeleting){
  // Remove char
this.txt = fullTxt.substring(0, this.txt.length - 1)

} else {
  // Add char
  this.txt = fullTxt.substring(0, this.txt.length + 1)
}

// Insert txt into element
this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

// Initial Type speed
let typeSpeed = 300;

if(this.isDeleting){
  typeSpeed /= 2;
}

// If word is complete
if(!this.isDeleting && this.txt === fullTxt){

  // Make pause at end
  typeSpeed = this.wait;

  // Set delete to true
  this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;

  // Move to next word
  this.wordIndex++;

  // Pause before start typing
  typeSpeed = 500;
}

  setTimeout(() => this.type(), typeSpeed)
};


// Init on DOM Download
document.addEventListener('DOMContentLoaded', init);

// Init app
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait)
}




// ES6 Class
//
// class TypeWriter2 {
//   constructor(txtElement, words, wait=3000) {
//
//   }
//
//   type(){
//
//   }
// }

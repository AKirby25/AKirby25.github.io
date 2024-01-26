let myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/images/white-mountains.jpeg") {
      myImage.setAttribute("src", "/images/white-mountains.jpeg");
    } else {
      myImage.setAttribute("src", "/images/white-mountains.jpeg");
    }
  };

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Andre Kirby Welcomes, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Andre Kirby Welcomes, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
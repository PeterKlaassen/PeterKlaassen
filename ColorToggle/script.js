
let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "272px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

       toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        
        getSidebar.style.width = "50px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUL.style.visibility = "hidden";

        toggleNavStatus = false;
    }
};

const changeColorRed = document.getElementById("red");
    changeColorRed.addEventListener("click", function(event) {
        console.log(event.target.id)
        const bodyElement = document.body;
        bodyElement.classList.toggle("red-background");
    });

const changeColorOrange = document.getElementById("orange");
    changeColorOrange.addEventListener("click", function(event) {
        console.log(event.target.id)
        const bodyElement = document.body;
        bodyElement.classList.toggle("orange-background");
    });

const changeColorPurple = document.getElementById("purple");
    changeColorPurple.addEventListener("click", function(event) {
        console.log(event.target.id)
        const bodyElement = document.body;
        bodyElement.classList.toggle("purple-background");
    });


const changeColorGreen = document.getElementById("green");
    changeColorGreen.addEventListener("click", function(event) {
        console.log(event.target.id)
        const bodyElement = document.body;
        bodyElement.classList.toggle("orange-background");
    });

const attachEventToChangeColorDefault = function() {
    const changeColorDefault = document.getElementById("click-btn-toggle-nav");
    changeColorDefault.addEventListener("click", function() {
    document.querySelector("body").classList.remove('red-background', 'orange-background', 'purple-background', 'green-background'); 
    });
};

//using which (but is also deprecated) iso keyCode (source: https://css-tricks.com/snippets/javascript/javascript-keycodes/)
window.addEventListener('keydown', event => {
  switch (event.which) {
      case 49:
        setBackgroundColor('#c4bcbc');
        break;
      case 50:
        setBackgroundColor('red');
        break;
      case 51:
        setBackgroundColor('orange');
        break;
      case 52:
        setBackgroundColor('purple');
        break;
      case 53:
        setBackgroundColor('green');
        break;
  }
});
    
function setBackgroundColor(color) {
    document
      .querySelector('body')
      .style
      .backgroundColor = color;
}

attachEventToChangeColorDefault();
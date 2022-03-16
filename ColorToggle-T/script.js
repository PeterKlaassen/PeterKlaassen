
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
}

let toggleColorRed = function() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

let toggleColorOrange = function() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("orange-background");
};

let toggleColorPurple = function() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("purple-background");
};

let toggleColorGreen = function() {
    let bodyElement = document.body;
    bodyElement.classList.toggle("green-background");
};

let attachEventToChangeColorRed = function() {
    let changeColor = document.getElementById("redBg");
    changeColor.addEventListener("click", function() {
        toggleColorRed();
    });
};

let attachEventToChangeColorOrange = function() {
    let changeColor = document.getElementById("orangeBg");
    changeColor.addEventListener("click", function() {
        toggleColorOrange();
    });
};

let attachEventToChangeColorPurple = function() {
    let changeColor = document.getElementById("purpleBg");
    changeColor.addEventListener("click", function() {
        toggleColorPurple();
    });
};

let attachEventToChangeColorGreen = function() {
    let changeColor = document.getElementById("greenBg");
    changeColor.addEventListener("click", function() {
        toggleColorGreen(); 
    });
};

let attachEventToChangeColorDefault = function() {
    let changeColor = document.getElementById("click-btn-toggle-nav");
    changeColor.addEventListener("click", function() {
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

attachEventToChangeColorRed();
attachEventToChangeColorOrange();
attachEventToChangeColorPurple();
attachEventToChangeColorGreen();
attachEventToChangeColorDefault();


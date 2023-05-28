
// tab js


// function openPage(pageName2) {
//   // Hide all elements with class="tabcontent" by default */
//   let l, tabcontent2;
//   tabcontent2 = document.getElementsByClassName("tabcontent2");
//   for (l = 0; l < tabcontent2.length; l++) {
//     tabcontent1[l].style.display = "none";
//   }

  

//   // Show the specific tab content
//   document.getElementById(pageName2).style.display = "block";

//   // Add the specific color to the button used to open the tab content
//   // elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// // document.getElementById("defaultOpen").click();
// // document.querySelectorAll("#defaultOpen").click();
// document.getElementById("defaultOpen").click();




//   // TABS TWO JS 

  
// function openPage(pageName) {
//   // Hide all elements with class="tabcontent" by default */
//   let l, tabcontent2;
//   tabcontent2 = document.getElementsByClassName("tabcontent2");
//   for (l = 0; l < tabcontent2.length; l++) {
//     tabcontent2[l].style.display = "none";
//   }

//   // Remove the background color of all tablinks/buttons
//   // tablinks2 = document.getElementsByClassName("tablink2");
//   // for (l = 0; l < tablinks2.length; l++) {
//   //   tablinks2[l].style.backgroundColor = "";


//     document.getElementById(pageName).style.display = "block";
//   }




// document.getElementById("defaultOpen2").click();




  // END TABS TWO JS 



// accodion javascript

let acc = document.getElementsByClassName("accordion");
let j;

for (j = 0; j < acc.length; j++) {
  acc[j].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

}

// range slide js 

let slider = document.getElementById("amount");
let output = document.getElementById("loan-amount");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


let slider2 = document.getElementById("term");
let output2 = document.getElementById("loan-term");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}


let slider3 = document.getElementById("rate");
let output3 = document.getElementById("intrest-rate");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}


// js of range tab


function openCity(evt, cityName) {
  // Declare all variables
  let k, tabcontent3, tablinks3;

  // Get all elements with class="tabcontent" and hide them
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (k = 0; i < tabcontent3.length; k++) {
    tabcontent3[k].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks3 = document.getElementsByClassName("tablinks3");
  for (i = 0; k < tablinks3.length; k++) {
    tablinks3[k].className = tablinks3[k].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





// all swiper js code 


var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3.5,
  // centeredSlides: true,
  spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
});



var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1.3,
  // spaceBetween: 10,
  autoplay: {
    delay: 2500,
  },
})
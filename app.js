'use strict';

// functions for changing the main photo view 
function og(){
  document.getElementById('art')
  .src='cst_art.jpg'
}
function bw(){
  document.getElementById('art')
  .src='cst_art_bw.jpg'
}
function vf(){
  document.getElementById('art')
  .src='flip_v.jpg'
}
function hf(){
  document.getElementById('art')
  .src='flip_h.jpg'
}
function thirds(){
  document.getElementById('art')
  .src='rule_thirds.jpg'
}
function gold(){
  document.getElementById('art')
  .src='grid_d.jpg'
}

function expand(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

//functions for switching gifs
function b1(){
  document.getElementById('gifs')
  .src='b1.gif'
}
function b2(){
  document.getElementById('gifs')
  .src='b2.gif'
}
function b3(){
  document.getElementById('gifs')
  .src='b3.gif'
}
function b4(){
  document.getElementById('gifs')
  .src='b4.gif'
}
function b5(){
  document.getElementById('gifs')
  .src='b5.gif'
}
function b6(){
  document.getElementById('gifs')
  .src='b6.gif'
}
function b7(){
  document.getElementById('gifs')
  .src='b7.gif'
}
function b8(){
  document.getElementById('gifs')
  .src='b8.gif'
}

//mood board button
function mb(){
  document.getElementById('gifs')
  .src='mood_board.jpg'
}

//test collapsable
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//test for adding element to list 
function iv(){
  var ivt = document.createElement('A');
  ivt.innerHTML = 'Invert';
  ivt.id = 'tester';
  document.getElementById('drop-views').appendChild(ivt);
}

function rv(){
  var vf = document.getElementById('vert');
  document.getElementById('drop-views').removeChild(vf);
}


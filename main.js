
const menuBtn = document.getElementById("menuBtn");
const closeBtnX = document.getElementById("closeBtnX");

closeBtnX.addEventListener ('click', ()=>{
  document.getElementById("bubbleMenu").style.display = "none";
  document.getElementById("menuitems").style.display = "none";
  document.getElementById("closeBtnX").style.display = "none";
})

menuBtn.addEventListener ('click', ()=> {
  document.getElementById("bubbleMenu").style.display = "block";
  document.getElementById("menuitems").style.display = "block";
  document.getElementById("closeBtnX").style.display = "block";
});



// // When the user clicks on <span> (x), close the bubbleMenu
// span.onclick = function () {
//   bubbleMenu.style.display = "none";
// }

// When the user clicks anywhere outside of the bubbleMenu, close it


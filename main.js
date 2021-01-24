const sidebarDeploy =function () {
const menu = document.getElementById("menu0");
menu.addEventListener ('click', () => {
  const submenu = document.getElementById("menu0").getElementsByClassName("submenu");
  console.log (submenu[0]);
  console.log (submenu[0].style.display)
  if (submenu[0].style.display === "block") {
    submenu[0].style.display = "none";
    } else {
    submenu[0].style.display = "block";
    } 
});
}
sidebarDeploy();
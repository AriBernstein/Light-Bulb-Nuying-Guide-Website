/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.querySelector(".navlist");
    if (x.className === "navlist") {
        x.className += " responsive";
    } else {
        x.className = "navlist";
    }
}
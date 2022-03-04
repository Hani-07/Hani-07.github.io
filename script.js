const parallax = window.getComputedStyle(document.getElementById('hero'), ':before');
console.log(parallax)
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";    
    console.log(offset);
    console.log(parallax);
})
let key = document.querySelector('#keyColor');
let downSvg = document.querySelector('#downSvg');
let upSvg = document.querySelector('#upSvg');

document.getElementById("keyColor").addEventListener("mouseenter", function( event ) {
    downSvg.style.display = 'none';
    upSvg.style.display = 'inline';
});
document.getElementById("keyColor").addEventListener("mouseleave", function( event ) {
    downSvg.style.display = 'inline';
    upSvg.style.display = 'none';
});
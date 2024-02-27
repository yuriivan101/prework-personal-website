const text = "trying to get into the Code Academy";
const typingSpeed = 175; // milliseconds
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById('typingEffect').textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, typingSpeed);
  }
}

//Scroll to about section
document.getElementById('aboutBtn').addEventListener('click', function(){
    //document.getElementById('about-border').setAttribute('style','display:block')
    const aboutSection = document.getElementById('about-section');
    aboutSection.setAttribute('style','display:block')
    const topOfSection = aboutSection.offsetTop

    window.scrollTo({
        top: topOfSection,
        behavior: "smooth"
    })
})

window.onload = function() {
  typeEffect();
};
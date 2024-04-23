let currentIndex=0;
const slides=document.querySelectorAll('.slide-show img')
function changeSlide(index){
  slides.forEach((slide, i)=>slide.style.display=i===index? 'block':'none')

}


function nextSlide(){
  currentIndex=(currentIndex+1)%slides.length
  changeSlide(currentIndex)
  
}
setInterval(nextSlide, 3000)
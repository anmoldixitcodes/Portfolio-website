var typed = new Typed('#element', {
    strings: ["Web Developer.","Web Designer."],
    typeSpeed: 50,
  });

const btn = document.querySelector('.btn-icon');

const nav= document.querySelector('.appear');
btn.addEventListener('click',()=>{
  if(nav.classList.contains('disappear'))
  {
    nav.classList.remove('disappear');
    // btn.innerHTML='<i class="fa-solid fa-rectangle-xmark"></i>';
  }
  else{
    nav.classList.add('disappear');
    // btn.innerHTML='<i class="fa-solid fa-bars"></i>';
  }
  // nav.classList.toggle("disappear");
  console.log(nav);
})
// for Animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element)=> observer.observe(element));
console.log("helllo");
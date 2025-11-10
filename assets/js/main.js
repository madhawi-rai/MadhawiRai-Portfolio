
document.addEventListener('DOMContentLoaded', function(){
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:0.12});
  reveals.forEach(r=>io.observe(r));
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){ e.preventDefault(); const id = this.getAttribute('href'); document.querySelector(id).scrollIntoView({behavior:'smooth'}); });
  });
});

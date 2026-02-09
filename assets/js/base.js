/* ================= SCROLL REVEAL ================= */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.15});

/* Elements to animate */
document.querySelectorAll(".card, h2, .subtext, .electric-line").forEach(el=>{
  el.classList.add("reveal");
  observer.observe(el);
});

/* ================= LIGHTBOX ================= */
function openLightbox(src){
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  if(box && img){
    img.src = src;
    box.style.display="flex";
  }
}
function closeLightbox(){
  const box = document.getElementById("lightbox");
  if(box){ box.style.display="none"; }
}

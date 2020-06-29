const modal = document.querySelector(".modal");
const items = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

items.forEach(item => {
    item.addEventListener('click',() => {
     modal.classList.add("open");
     original.classList.add("open");
     const originalSrc = item.getAttribute("data-original");
     original.src = `./large image/${originalSrc}` ;
     const altText = item.alt;
     imgText.textContent = altText;
    });
});

modal.addEventListener('click',(e) => {
   if(e.target.classList.contains("modal")){
       modal.classList.remove("open");
       original.classList.remove("open");
   }
});
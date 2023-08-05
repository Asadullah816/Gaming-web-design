const hero_section= document.querySelector(".hero-section")
const nav_header=document.querySelector(".header-area");
const observer= new IntersectionObserver((entries)=>{ 
    const ent = entries[0];
    console.log(ent)
    ent.isIntersecting==false ? nav_header.classList.add("sticky") :
    nav_header.classList.remove("sticky");
 }, {
    root:null,
    rootMargin:"",
    threshold:"",
});

observer.observe(hero_section);

// ==================== Toggle navbar ===================
const toggleBtn = document.querySelector(".toggle");
const nav_bar= document.querySelector(".toggle-navbar");
$(toggleBtn).ready(function () {
   $(toggleBtn).click(function (){
    $(nav_bar).toggleClass("open")
   })
})

// =========================================================== FOR SHOP TABS ==============================
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab=> {
   tab.addEventListener('click',()=> {
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent=>{
         tabContent.classList.remove('active-tab')
      })
      target.classList.add('active-tab') 
   })
})
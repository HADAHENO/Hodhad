const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active'); 
})
let preveiwContainer=document.querySelector('.products-preview');
let previewBox=preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.product-container .product').forEach(product=>{
    product.onclick=()=>{
        preveiwContainer.style.display='flex';
let name=product.getAttribute('data-name');
previewBox.forEach(preview=>{
let target= preview.getAttribute('data-target');
if(name==target){
    preview.classList.add('active');
}
});
    };
});
previewBox.forEach(close=>{
close.querySelector('')
})(jQuery);
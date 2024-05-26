const shareLogo=document.getElementById('button');
const shareBox=document.querySelector('.share');

shareLogo.addEventListener('click', ()=>{
        shareBox.classList.toggle('active');

   
});

const closeBtn=document.getElementById('buttonCloseOne');

closeBtn.addEventListener('click', ()=> {
    shareBox.classList.toggle('active')
})
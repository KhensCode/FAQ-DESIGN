
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click' , () => {
        const ans = button.nextElementSibling;
        ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    });
})
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll' , () => {
    if(window.scrollY > 0 ) {
        backToTopButton.style.display = 'block';
    }
    else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click' , () => {
window.scrollTo({top:0 , behavior : 'smooth'});
});

const toggleBtn = document.querySelectorAll('.faq');



toggleBtn.forEach(item => {
    item.addEventListener('click',(e) => toggleFunc(e))
});

function toggleFunc(e){
    if(e.target.classList.contains('fa-chevron-down')){
        e.target.parentElement.parentElement.classList.toggle('active')
    }else if(e.target.classList.contains('fa-times')){
        e.target.parentElement.parentElement.classList.toggle('active')
    }
}
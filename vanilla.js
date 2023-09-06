let hamMenuIcon = document.getElementById('ham_menu');
let navBar = document.querySelector('.hamburger_wrap');
//안되면 쿼리셀렉터로

let navLinks = document.querySelectorAll('.hamburger_nav li');

hamMenuIcon.addEventListener('click', function(){
    navBar.classList.toggle('active');
    hamMenuIcon.classList.toggle('fa-times');
})


navLinks.forEach(function(x){
    x.addEventListener('click', function(){
        navBar.classList.remove('active');
        hamMenuIcon.classList.toggle('fa-times');
    })
});
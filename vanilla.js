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

let globalIcon = document.querySelector('.global_icon');
let globalDepth = document.querySelector('.global_depth');

globalIcon.addEventListener('click', function(){
    globalDepth.classList.toggle('active');
})

let familyBtn = document.querySelector('.family_btn');
let familyList = document.querySelector('.family_list');

familyBtn.addEventListener('click', function(){
    familyList.classList.toggle('active');
})
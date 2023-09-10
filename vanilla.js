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
//family_btn
let familyBtn = document.querySelector('.family_btn');
let familyList = document.querySelector('.family_list');

familyBtn.addEventListener('click', function(){
    familyList.classList.toggle('active');
})
//mo_family_btn
let moFamilyBtn = document.querySelector('.mo_family_btn');
let moFamilyList = document.querySelector('.mo_family_list');

moFamilyBtn.addEventListener('click', function(){
    moFamilyList.classList.toggle('active');
})

//main_slide
$('.main_slider').bxSlider({
  mode : 'horizontal',
  minSlides :1,
  maxSlides: 1,
  moveSlides:1,
  // slideWidth: '100%',
  // slideMargin: 10,
  auto:true,
  speed: 1000
});


//service_slide
// $('.gallery_1').bxSlider({
//     mode : 'vertical',
//     minSlides: 1,
//     maxSlides: 1,
//     slideWidth: 'auto',
//     slideMargin: 20,
//     ticker: true,
//     speed: 50000
//   });
//   $('.gallery_2').bxSlider({
//     mode : 'vertical',
//     minSlides: 1,
//     maxSlides: 1,
//     slideWidth: 'auto',
//     slideMargin: 20,
//     ticker: true,
//     speed: 50000
//   });

  //mo_service_slide
$('.mo_gallery_1').bxSlider({
    mode : 'horizontal',
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 'auto',
    slideMargin: 10,
    ticker: true,
    speed: 50000,
    infiniteLoop: true
  });
  $('.mo_gallery_2').bxSlider({
    mode : 'horizontal',
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 'auto',
    slideMargin: 10,
    ticker: true,
    speed: 50000,
    infiniteLoop: true
  });
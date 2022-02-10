$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        1000: {
            items: 1,
        }
    }
});

var listPhoiSuong = [{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG SỐT XÍ MUỘI',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184953/sanpham/phoisuong/1_q1wruf.jpg',
},
{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG SỐT ME',
    price: '10.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184949/sanpham/phoisuong/2_qf1wxj.jpg',
},
{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG MUỐI TÔM TẮC ỚT',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184950/sanpham/phoisuong/3_xkddaf.jpg',
},
{
    name: 'BÁNH TRÁNG DẺO TÔM SỐT BƠ ĐẶC BIỆT',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184954/sanpham/phoisuong/4_ebzpnv.jpg',
},
{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG SA TẾ MUỐI NHUYỄN',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184949/sanpham/phoisuong/5_yfdsxx.jpg',
}, {
    name: 'BÁNH TRÁNG PHƠI SƯƠNG TẮC MUỐI NHUYỄN',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184947/sanpham/phoisuong/6_bgfeib.jpg',
},
{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG TỎI PHI MUỐI NHUYỄN',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184949/sanpham/phoisuong/7_oniu9u.jpg',
},
{
    name: 'BÁNH TRÁNG DẺO TÔM SỐT BƠ',
    price: '8.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184950/sanpham/phoisuong/8_jd9iai.jpg',
}];

var listPhoiSuongElement = document.querySelector('.list-product');

//PHOI SUONG
$(document).ready(function () {
    var arrPhoiSuong = '';
    for (let i = 0; i < listPhoiSuong.length; i++) {
        arrPhoiSuong += `<div class="zoom-dark card item-all" style="width: 230px;">
        <a href="`+listPhoiSuong[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listPhoiSuong[i].image + `" alt="Card image cap">
        </a>  
          <div class="card-body">
            <h5 class="card-title">`+ listPhoiSuong[i].name + `</h5>
            <p class="card-text">`+ listPhoiSuong[i].price + `</p>
          </div>
          </div>`;
    }
    listPhoiSuongElement.innerHTML = arrPhoiSuong;
});

//back to top
var backToTop = document.querySelector('.back-to-top');

window.addEventListener("scroll",() => {
  if(window.pageYOffset > 100){
    backToTop.classList.add("active");
  }else {
    backToTop.classList.remove("active");
  }
})
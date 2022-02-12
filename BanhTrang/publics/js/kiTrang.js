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

var listKiTrang = [{
    name: 'BÁNH TRÁNG PHƠI SƯƠNG',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184934/sanpham/kitrang/5_p5hwy6.jpg',
  },
  {
    name: 'BÁNH TRÁNG TRẮNG VUÔNG',
    price: '49.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184932/sanpham/kitrang/1_o5ysmw.jpg',
  },
  {
    name: 'BÁNH TRÁNG TRỘN 5 LI',
    price: '16.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184934/sanpham/kitrang/3_hmbo1u.jpg',
  },
  {
    name: 'BÁNH TRÁNG TRỘN 9 LI',
    price: '20.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184934/sanpham/kitrang/4_m7t1qx.jpg',
  }, {
    name: 'BÁNH TRÁNG TRỘN MIẾN TRẮNG VUÔNG CẮT SẴN',
    price: '50.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184935/sanpham/kitrang/2_nngat3.jpg',
  }];

var listKiTrangElement = document.querySelector('.list-product');

//PHOI SUONG
$(document).ready(function () {
    var arrKiTrang = '';
    for (let i = 0; i < listKiTrang.length; i++) {
        arrKiTrang += `<div class="zoom-dark card item-all" style="width: 230px;">
        <a href="`+listKiTrang[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listKiTrang[i].image + `" alt="Card image cap">
        </a>  
          <div class="card-body">
            <h5 class="card-title">`+ listKiTrang[i].name + `</h5>
            <p class="card-text">`+ listKiTrang[i].price + `</p>
          </div>
          </div>`;
    }
    listKiTrangElement.innerHTML = arrKiTrang;
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
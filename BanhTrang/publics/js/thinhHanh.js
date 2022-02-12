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

var listThinhHanh =[{
    name: 'BÁNH CUỐN VỊ THẬP CẨM',
    price: '8.500đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184973/sanpham/thinhhanh/5_lwddsw.jpg',
  },
  {
    name: 'BÁNH CUỐN VỊ PHOMAI SỮA',
    price: '8.500đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184974/sanpham/thinhhanh/6_zx5pwi.jpg',
  },
  {
    name: 'BÁNH DẺO TÔM ĐẶC BIỆT',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184974/sanpham/thinhhanh/3_irnam7.jpg',
  },
  {
    name: 'BÁNH DẺO TÔM',
    price: '30.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184975/sanpham/thinhhanh/9_fvo1ft.jpg',
  }, {
    name: 'BÁNH ỐNG MUỐI',
    price: '3.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184973/sanpham/thinhhanh/8_aqouut.jpg',
  },
  {
    name: 'BÁNH ỐNG RUỐC',
    price: '3.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184976/sanpham/thinhhanh/4_tjujwd.jpg',
  },
  {
    name: 'BÁNH TRÁNG NGHỆ SĨ -XÌ KE-MUỐI TỎI',
    price: '7.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184974/sanpham/thinhhanh/7_criaas.jpg',
  },
  {
    name: 'BÁNH TRỘN CHÀ BÔNG GÀ 6 LOẠI GIA VỊ',
    price: '10.000đ',
    image:'https://res.cloudinary.com/banhtrang/image/upload/v1643184976/sanpham/thinhhanh/10_hsaezd.jpg',
  },
  {
    name:'BÁNH XẾP BƠ LÁ MỎNG',
    price:'2.000đ',
    image:'https://res.cloudinary.com/banhtrang/image/upload/v1643184978/sanpham/thinhhanh/11_ppetk0.jpg',
  }];

var listThinhHanhElement = document.querySelector('.list-product');

//PHOI SUONG
$(document).ready(function () {
    var arrThinhHanh = '';
    for (let i = 0; i < listThinhHanh.length; i++) {
        arrThinhHanh += `<div class="zoom-dark card item-all" style="width: 230px;">
        <a href="`+listThinhHanh[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listThinhHanh[i].image + `" alt="Card image cap">
        </a>  
          <div class="card-body">
            <h5 class="card-title">`+ listThinhHanh[i].name + `</h5>
            <p class="card-text">`+ listThinhHanh[i].price + `</p>
          </div>
          </div>`;
    }
    listThinhHanhElement.innerHTML = arrThinhHanh;
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
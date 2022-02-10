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

var listTronSan = [{
    name: 'BÁNH MIẾN VỊ BỘT PHOMAI VÀNG',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185007/sanpham/tronssan/3_esaqhj.jpg',
  },
  {
    name: 'BÁNH MIẾN VỊ GÀ',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185004/sanpham/tronssan/4_pda3o0.jpg',
  },
  {
    name: 'BÁNH MIẾN VỊ MUỐI TỎI',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185006/sanpham/tronssan/1_gqmflj.jpg',
  },
  {
    name: 'BÁNH MIẾN VỊ PHOMAI SỮA MÈ SA TẾ TÔM',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185006/sanpham/tronssan/5_ha9btw.jpg',
  }, {
    name: 'BÁNH MIẾN VỊ SA TẾ TÔM',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185005/sanpham/tronssan/2_ujc61z.jpg',
  },
  {
    name: 'BÁNH ỐNG VỊ GÀ LÁ CHANH',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185005/sanpham/tronssan/7_qg2kud.jpg',
  },
  {
    name: 'BÁNH ỐNG PHOMAI SỮA MÈ',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185007/sanpham/tronssan/8_fowjpo.jpg',
  },
  {
    name: 'BÁNH ỐNG VỊ SIÊU CHAY',
    price: '40.000đ',
    image:'https://res.cloudinary.com/banhtrang/image/upload/v1643185008/sanpham/tronssan/10_rpstbe.jpg',
  },
  {
    name:'BÁNH ỐNG VỊ SA TẾ TÔM',
    price:'40.000đ',
    image:'https://res.cloudinary.com/banhtrang/image/upload/v1643185007/sanpham/tronssan/9_h8sqlt.jpg',
  },
  {
    name: 'BÁNH MIẾN VỊ BÒ',
    price: '40.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643185007/sanpham/tronssan/3_esaqhj.jpg',
  }];

var listTronSanElement = document.querySelector('.list-product');

//PHOI SUONG
$(document).ready(function () {
    var arrTronSan = '';
    for (let i = 0; i < listTronSan.length; i++) {
        arrTronSan += `<div class="zoom-dark card item-all" style="width: 230px;">
        <a href="`+listTronSan[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listTronSan[i].image + `" alt="Card image cap">
        </a>  
          <div class="card-body">
            <h5 class="card-title">`+ listTronSan[i].name + `</h5>
            <p class="card-text">`+ listTronSan[i].price + `</p>
          </div>
          </div>`;
    }
    listTronSanElement.innerHTML = arrTronSan;
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
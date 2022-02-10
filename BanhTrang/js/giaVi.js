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

var listGiavi = [{
    name: 'KHÔ MỰC TẨM SỢI',
    price: '95.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184907/sanpham/giavi/1_ipfdki.jpg',
  },
  {
    name: 'KHÔ BÒ SỢI',
    price: '75.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184907/sanpham/giavi/3_fpe85i.jpg',
  },
  {
    name: 'KHÔ GÀ LÁ CHANH',
    price: '75.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184909/sanpham/giavi/7_bbadsa.jpg',
  },
  {
    name: 'CON RUỐC SẤY',
    price: '30.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184909/sanpham/giavi/9_zpceur.jpg',
  }, {
    name: 'ĐẬU PHỘNG BÓC VỎ',
    price: '25.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184911/sanpham/giavi/4_qvjrsc.jpg',
  },
  {
    name: 'ĐẬU PHỘNG MUỐI',
    price: '25.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184907/sanpham/giavi/6_ydxb1d.jpg',
  },
  {
    name: 'HÀNH PHI THƠM BÉO',
    price: '35.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184908/sanpham/giavi/8_ekjico.jpg',
  },
  {
    name: 'MUỐI NHUYỄN TÂY NINH',
    price: '28.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184912/sanpham/giavi/2_fykt5d.jpg',
  },
  {
    name: 'MUỐI HỘT TÂY NINH',
    price: '28.000đ',
    image: 'https://res.cloudinary.com/banhtrang/image/upload/v1643184910/sanpham/giavi/5_zud5e0.jpg',
  }];

var listGiaViElement = document.querySelector('.list-product');

//PHOI SUONG
$(document).ready(function () {
    var arrGiaVi = '';
    for (let i = 0; i < listGiavi.length; i++) {
        arrGiaVi += `<div class="zoom-dark card item-all" style="width: 230px;">
        <a href="`+listGiavi[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listGiavi[i].image + `" alt="Card image cap">
        </a>  
          <div class="card-body">
            <h5 class="card-title">`+ listGiavi[i].name + `</h5>
            <p class="card-text">`+ listGiavi[i].price + `</p>
          </div>
          </div>`;
    }
    listGiaViElement.innerHTML = arrGiaVi;
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
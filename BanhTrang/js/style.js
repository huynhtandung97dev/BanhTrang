$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  nav: true,
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
    1000:{
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

//danh sach tat ca san pham
var listAll = listGiavi.concat(listKiTrang,listPhoiSuong,listThinhHanh,listTronSan);

var elementSlider = document.querySelector('.product-slider');
var listProductElement = document.querySelector('.list-product');



// var html = `<div class="card" style="width: 18rem;">
// <img class="card-img-top" src="..." alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`;

//TRANG CHU
$(document).ready(function () {
  var arrSlider = ''; //slider san pham
  var arrAll = ''; // tat ca san pham
  var arrPhoiSuong = ''; // phoi suong
  //hien thi slider san pham
  for (let i = 0; i < listGiavi.length; i++) {
    arrSlider += `<div class="zoom-dark card" style="width: 250px;">
        <a class="tem-parent" href="`+listGiavi[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listGiavi[i].image + `" alt="Card image cap">
          <img class="tem-slick" width="50px" src="https://res.cloudinary.com/banhtrang/image/upload/v1643184777/logo/logo-footer_q61wps.png" alt="">
        </a>
        <div class="card-body">
          <h5 class="card-title">`+ listGiavi[i].name + `</h5>
          <p class="card-text">`+ listGiavi[i].price + `</p>
        </div>
        </div>`;
  }
  elementSlider.innerHTML = arrSlider;

  //hien thi tat ca san pham trang chu
  for (let i = 0; i < listAll.length; i++) {
    arrAll += `<div class="zoom-dark card item-all">
      <div class="hover-img">
        <a class="tem-parent" href="`+listAll[i].image+`" data-lightbox="mygallery">  
          <img class="card-img-top" src="`+ listAll[i].image + `" alt="Card image cap">
          <img class="tem-product" width="50px" src="https://res.cloudinary.com/banhtrang/image/upload/v1643184777/logo/logo-footer_q61wps.png" alt="">
        </a>
      </div>
        <div class="card-body">
          <div class="caption-product">
            <div class="name-product">
              <h5 class="card-title">`+ listAll[i].name + `</h5>
            </div>
              <p class="card-text">`+ listAll[i].price + `</p>
          </div>
      </div>
    </div>`;
    
  }
  listProductElement.innerHTML = arrAll;

  //custom slick slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //custom footer slider
  $('.slogan').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
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

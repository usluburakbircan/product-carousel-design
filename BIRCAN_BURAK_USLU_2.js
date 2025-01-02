(() => {
  document.body.innerHTML = ''
  const newBody = document.createElement('body')
  document.documentElement.replaceChild(newBody, document.body)

const init = () => {
    appendMetaTags()
    appendHeader()
    toggleMenu()
    ensureProductDetailExists()
    appendCarousel()
    appendProductDetails()
    buildCSS()
    setEvents()
    fetchProducts()
  }

  const appendMetaTags = () => {
    let head = document.querySelector('head')
    if (!head) {
      head = document.createElement('head')
      document.documentElement.prepend(head)
    }

    const metaViewport = document.createElement('meta')
    metaViewport.name = 'viewport'
    metaViewport.content = 'width=device-width, initial-scale=1.0'
    head.appendChild(metaViewport)
  }

  const appendHeader = () => {
    const headerHTML = `
        <header class="main-header">
            <div class="logo">
                <span>LCW*COM</span>
            </div>
            <nav class="main-menu">
                <ul>
                    <li><a href="#">KADIN</a></li>
                    <li><a href="#">ERKEK</a></li>
                    <li><a href="#">ÇOCUK & BEBEK</a></li>
                    <li><a href="#">AYAKKABI</a></li>
                    <li><a href="#">AKSESUAR</a></li>
                    <li><a href="#">EV & YAŞAM</a></li>
                    <li><a href="#">KOZMETİK</a></li>
                    <li><a href="#">TÜM KATEGORİLER</a></li>
                </ul>
            </nav>
            <div class="hamburger-menu">
                <div class="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="header-actions">
                <a href="#">Favorilerim</a>
                <a href="#">Sepetim</a>
            </div>
        </header>
        <div class="hamburger-dropdown">
            <ul>
                <li><a href="#">KADIN</a></li>
                <li><a href="#">ERKEK</a></li>
                <li><a href="#">ÇOCUK & BEBEK</a></li>
                <li><a href="#">AYAKKABI</a></li>
                <li><a href="#">AKSESUAR</a></li>
                <li><a href="#">EV & YAŞAM</a></li>
                <li><a href="#">KOZMETİK</a></li>
                <li><a href="#">TÜM KATEGORİLER</a></li>
                <br>
                <li><a href="#">Favorilerim</a><li>
                <li><a href="#">Sepetim</a><li>
            </ul>
        </div>
    `;
    $('body').prepend(headerHTML)
  }

  const toggleMenu = () => {
    const menu = document.querySelector('.hamburger-dropdown');
    const menuButton = document.querySelector('.hamburger-icon');

    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('open');
      menuButton.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuButton.classList.remove('active');
      }
    });

    menu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  };

  const ensureProductDetailExists = () => {
    if ($('.product-detail').length === 0) {
      $('body').append('<div class="product-detail"></div>')
    }
  }

  const appendCarousel = () => {
    const html = `
        <div class="container">
            <div class="product-carousel">
                <h2>You Might Also Like</h2>
                <div class="carousel-container">
                    <button class="arrow left-arrow">◀</button>
                        <div class="carousel-track"></div>
                    <button class="arrow right-arrow">▶</button>
                </div>
            </div>
        </div>
    `;

    const productDetail = $('.product-detail')
    if (productDetail.length) {
      productDetail.after(html)
    } else {
      console.error(
        'Error: .product-detail element could not be found or created.'
      )
    }
  }

  const appendProductDetails = () => {
    const html = `
        <div class="container">
            <nav class="breadcrumb">
                <ul>
                <li><a href="#">Ana Sayfa >> </a></li>
                <li><a href="#">Erkek >> </a></li>
                <li><a href="#">Erkek Giyim >> </a></li>
                <li><a href="#">Erkek Tişört >> </a></li>
                <li>LC WAIKIKI Siyah Bisiklet Yaka Kısa Kollu Penye Erkek Tişört</li>
                </ul>
            </nav>
            <div class="product-detail-section">
                <div class="product-gallery">
                    <div class="product-main-image">
                        <img src="https://placehold.co/500" alt="Ürün Görseli" />
                    </div>
                    <div class="product-thumbnails">
                        <img src="https://placehold.co/100" alt="Thumbnail 1" />
                        <img src="https://placehold.co/100" alt="Thumbnail 2" />
                        <img src="https://placehold.co/100" alt="Thumbnail 3" />
                        <img src="https://placehold.co/100" alt="Thumbnail 4" />
                        <img src="https://placehold.co/100" alt="Thumbnail 5" />
                        <img src="https://placehold.co/100" alt="Thumbnail 6" />
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-info-box">
                        <span class="product-code">Ürün Kodu:</span>
                        <span class="product-code">W4GG72Z8 - CVL - Yeni Siyah</span>
                        <h1 class="product-name">Bisiklet Yaka Kısa Kollu Penye Erkek Tişört</h1>
                        <p class="product-price">89,99 ₺</p>
                        <p class="product-description">Satıcı: <strong>LC Waikiki</strong> (İade Süresi: 120 Gün)</p>
                        <div class="product-sizes">
                            <span>Beden: </span>
                            <button class="size-option">S</button>
                            <button class="size-option">M</button>
                            <button class="size-option unavailable">L</button>
                            <button class="size-option">XL</button>
                        </div>
                        <button class="add-to-cart">Sepete Ekle</button>
                    </div>
                    <div class="product-info-box">
                        <div class="product-details">
                            <div class="detail-section">
                                <h2 class="section-title">Açıklama<span> &#8593; </span></h2>
                                <div class="section-content" style="display: block">
                                    <p><strong>Ürün Açıklaması:</strong> Penye kumaştan üretilmiştir ve%100 pamuk içeriği ile konforlu bir giyim deneyimi sunar.</p>
                                    <p><strong>Manken Bilgisi:</strong> Göğüs: 97 cm, Bel: 79 cm, Basen: 96 cm, Boy: 189 cm</p>
                                    <p><strong>Ürün İçeriği ve Özellikleri:</strong></p>
                                    <ul>
                                        <li>Ürün İçeriği: %100 Pamuk</li>
                                        <li>Satıcı: LC Waikiki</li>
                                        <li>Marka: LC Waikiki</li>
                                        <li>Cinsiyet: Erkek</li>
                                        <li>Kalıp: Standart & Regular</li>
                                        <li>Yaka: Bisiklet Yaka</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="detail-section">
                                <h2 class="section-title">Bakım <span> &#8595; </span></h2>
                            </div>
                            <div class="detail-section">
                                <h2 class="section-title">İade ve Değişim <span> &#8595; </span></h2>
                            </div>
                            <div class="detail-section">
                                <h2 class="section-title">Mağaza Stok Durumu <span> &#8595; </span></h2>
                            </div>
                            <div class="detail-section">
                                <h2 class="section-title">Ödeme Seçenekleri</h2>
                                <div class="payment-methods">
                                    <span><img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/nakit-odeme.svg"/>Kapıda Nakit Ödeme</span>
                                    <span><img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/kredi-kartı.svg"/>Kart ile Ödeme</span>
                                    <span><img src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/masterpass.svg"/>Masterpass ile Ödeme</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    $('.product-detail').before(html)
  }

  const buildCSS = () => {
    const css = `
        @charset "UTF-8";
        body {
            background: #fff !important;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 12px 48px;
            background-color: #fff;
        }
        .main-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 48px;
            border-bottom: 1px solid #ddd;
            margin-bottom: 48px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.06);
        }
        .main-header .logo {
            font-size: 24px;
            font-weight: bold;
            color: #193db0;
        }
        .main-menu ul {
            display: flex;
            gap: 20px;
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .main-menu ul li a {
            text-decoration: none;
            font-size: 14px;
            color: #555;
            transition: color 0.2s ease;
        }
        .main-menu ul li a:hover {
            color: #193db0;
        }
        .header-actions a {
            margin-left: 20px;
            text-decoration: none;
            font-size: 14px;
            color: #555;
            transition: color 0.2s ease;
        }
        .header-actions a:hover {
            color: #193db0;
        }
        .breadcrumb {
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
        }
        .breadcrumb ul {
            display: flex;
            list-style: none;
            gap: 5px;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        .breadcrumb ul li {
            white-space: nowrap;
            color: #555;
        }
        .breadcrumb ul li a {
            text-decoration: none;
            color: #193db0;
            transition: color 0.2s ease;
        }
        .breadcrumb ul li a:hover {
            color: #555;
        }
        .breadcrumb ul li:last-child {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 100%;
            display: inline-block;
        }
        .product-carousel {
            margin: 48px 0;
            color: #0f0f0f;
        }
        .product-carousel h2 {
            margin: 12px 0;
        }
        .carousel-container {
            display: flex;
            align-items: center;
            position: relative;
        }
        .carousel-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        .carousel-track::-webkit-scrollbar {
            display: none;
        }
        .arrow {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            user-select: none;
        }
        .left-arrow {
            position: absolute;
            left: -36px;
        }
        .right-arrow {
            position: absolute;
            right: -36px;
        }
        .product-card {
            position: relative;
            scroll-snap-align: start;
            flex: 0 0 auto;
            width: 13%;
            margin: 0 5px;
            text-align: left;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            background: #fff;
        }
        .product-card h1 {
            color: #0f0f0f;
            text-align: left;
            font-size: 14px;
            font-weight: 300;
            margin: 12px 0 16px;
        }
        .product-card a {
            text-decoration: none;
        }
        .product-card span {
            color: #193db0;
            text-align: left;
            font-size: 16px;
            font-weight: bold;
        }
        .product-card img {
            max-width: 100%;
            border-radius: 5px;
        }
        .size-option.unavailable {
            position: relative;
            color: #aaa;
            cursor: not-allowed;
            background-color: #f8f8f8;
            border-color: #ddd;
        }
        .size-option.unavailable::before {
            content: '';
            position: absolute;
            top: 25%;
            left: 25%;
            width: 100%;
            height: 100%;
            background: transparent;
            border-top: 2px solid #ff9e9e;
            transform: rotate(-45deg);
            transform-origin: center;
            pointer-events: none;
        }
        .like-indicator {
            position: absolute;
            top: 24px;
            right: 24px;
            cursor: pointer;
            z-index: 10;
            width: 16px;
            height: 16px;
            background-color: #fff;
            border-radius: 100%;
            padding: 6px;
        }
        .like-indicator__heart {
            width: 100%;
            height: 100%;
            transition: fill 0.3s ease, stroke 0.3s ease, transform 0.2s ease;
        }
        .like-indicator__heart--liked path {
            fill: rgb(25, 61, 176) !important;
            stroke: none !important;
        }
        .like-indicator__heart--not-liked path {
            fill: rgb(255, 255, 255);
            stroke: rgb(155, 155, 155);
        }
        .like-indicator__heart--liked {
            animation: pop 0.2s ease;
        }
        @keyframes pop {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }
        .product-detail-section {
            display: flex;
            gap: 24px;
            margin: 12px 0;
            padding: 24px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #fff;
        }
        .product-gallery {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .product-main-image img {
            width: 100%;
            border-radius: 8px;
            border: 1px solid #ddd;
        }
        .product-thumbnails {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 8px;
        }
        .product-thumbnails img {
            width: 100%;
            height: auto;
            cursor: pointer;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
        .product-thumbnails img:hover {
            border-color: #193db0;
        }
        .product-info {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .product-name {
            font-size: 24px;
            font-weight: bold;
            color: #0f0f0f;
            margin: 6px 0 0;
        }
        .product-code {
            color: #0f0f0f;
            font-size: 12px;
            margin: 0;
        }
        .product-price {
            font-size: 24px;
            font-weight: bold;
            color: #193db0;
            margin: 0;
        }
        .product-description {
            font-size: 16px;
            line-height: 1;
            color: #555;
            margin: 0;
        }
        .product-sizes {
            display: flex;
            gap: 8px;
            align-items: center;
        }
        .size-option {
            padding: 8px 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f8f8f8;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .size-option:hover {
            background-color: #193db0;
            color: #fff;
        }
        .add-to-cart {
            padding: 12px 24px;
            font-size: 16px;
            color: #fff;
            background-color: #193db0;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin: 12px 0 6px;
            transition: background-color 0.2s ease;
        }
        .add-to-cart:hover {
            background-color: #0f0f0f;
        }
        .product-info-box {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-bottom: 12px;
            padding: 0 24px;
        }
        .section-title {
            font-size: 16px;
            font-weight: 300;
            color: #4e8afd;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 12px 0;
            margin: 0;
        }
        .detail-section {
            border-top: 1px solid #e0e0e0;
            line-height: 36px;
        }
        .section-title span {
            font-weight: bold;
            margin-right: 12px;
        }
        .section-title.open {
            color: #0f0f0f;
        }
        .section-content {
            font-size: 14px;
            color: #555;
            line-height: 1.5;
            padding-left: 16px;
            padding-top: 8px;
            display: none;
        }
        .section-content p,
        .section-content ul {
            margin: 0 0 16px;
        }
        .toggle-icon {
            font-size: 14px;
            color: #555;
            transition: transform 0.2s ease;
        }
        .section-title.open .toggle-icon {
            transform: rotate(180deg);
        }
        .payment-methods {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            flex-direction: row;
            margin-right: 12px;
        }
        .payment-methods span {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        .hamburger-menu {
            display: none;
        }
        .hamburger-dropdown {
            display: none;
            position: absolute;
            top: 70px;
            right: 0;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }
        .hamburger-dropdown.open {
            display: block;
        }
        .hamburger-dropdown ul {
            list-style: none;
            margin: 0;
            padding: 10px 20px;
        }
        .hamburger-dropdown ul li {
            margin-bottom: 10px;
        }
        .hamburger-dropdown ul li a {
            text-decoration: none;
            color: #555;
            font-size: 14px;
            transition: color 0.2s ease;
        }
        .hamburger-dropdown ul li a:hover {
            color: #193db0;
        }
        .hamburger-icon {
            display: flex;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            padding: 10px;
        }
        .hamburger-icon span {
            width: 30px;
            height: 3px;
            background-color: #555;
            transition: all 0.2s ease;
        }
        .hamburger-icon.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger-icon.active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger-icon.active span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
        }
        @media (max-width: 1280px) {
            .main-menu ul li a {
                text-decoration: none;
                font-size: 12px;
                color: #555;
                transition: color 0.2s ease;
            }
            .payment-methods {
                display: block;
                text-align: left;
            }
        }
        @media (max-width: 1024px) {
            .main-menu {
                display: none;
            }
            .header-actions {
                display: none;
            }
            .breadcrumb {
                font-size: 12px;
            }
            .hamburger-menu {
                display: block;
            }
            .product-thumbnails {
                grid-template-columns: repeat(3, 1fr);
            }
            .product-thumbnails img {
                width: 100% !important;
                height: auto !important;
            }
            .product-detail-section {
                display: block;
                gap: 24px;
                margin: 12px 0;
                padding: 36px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #fff;
            }
            .product-info-box {
                padding: 0;
                margin-top: 12px;
            }
            .product-card {
                position: relative;
                scroll-snap-align: start;
                flex: 0 0 auto;
                width: 33.333%;
                margin: 0 5px;
                text-align: left;
                border: 1px solid #ddd;
                border-radius: 5px;
                padding: 10px;
                background: #fff;
            }
            .product-card h1 {
                color: #0f0f0f;
                text-align: left;
                font-size: 14px;
                font-weight: 300;
                margin: 12px 0 16px;
            }
            .product-card span {
                color: #193db0;
                text-align: left;
                font-size: 16px;
                font-weight: bold;
            }
            .breadcrumb ul li:last-child {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                max-width: 100px;
                display: inline-block;
            }
        }
        @media (max-width: 480px) {
            .breadcrumb {
                font-size: 12px;
            }
            .hamburger-dropdown ul li a {
                font-size: 12px;
            }
            .container {
                padding: 12px 36px;
            }
            .product-card {
                position: relative;
                scroll-snap-align: start;
                flex: 0 0 auto;
                width: 50% !important;
                margin: 0 5px;
                text-align: left;
                border: 1px solid #ddd;
                border-radius: 5px;
                padding: 10px;
                background: #fff;
            }
            .product-detail-section {
                padding: 24px;
            }
            .product-card h1 {
                color: #0f0f0f;
                text-align: left;
                font-size: 14px;
                font-weight: 300;
                margin: 12px 0 16px;
            }
            .product-card span {
                color: #193db0;
                text-align: left;
                font-size: 16px;
                font-weight: bold;
            }
        }
    `;
    $('<style>').html(css).appendTo('head')
  }

  const setEvents = () => {
    $(document).on('click', '.like-indicator', function () {
      const card = $(this).closest('.product-card')
      const productId = card.data('id')
      let favorites = JSON.parse(localStorage.getItem('favorites')) || []
      const heart = $(this).find('.like-indicator__heart')

      if (heart.hasClass('like-indicator__heart--not-liked')) {
        heart
          .removeClass('like-indicator__heart--not-liked')
          .addClass('like-indicator__heart--liked')
        favorites.push(productId)
      } else {
        heart
          .removeClass('like-indicator__heart--liked')
          .addClass('like-indicator__heart--not-liked')
        favorites = favorites.filter((id) => id !== productId)
      }

      localStorage.setItem('favorites', JSON.stringify(favorites))
    })
  }

  const fetchProducts = () => {
    const localProducts = localStorage.getItem('products')
    if (localProducts) {
      renderCarousel(JSON.parse(localProducts))
    } else {
      fetch(
        'https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json'
      )
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('products', JSON.stringify(data))
          renderCarousel(data)
        })
        .catch((error) => console.error('Ürünleri alırken hata oluştu:', error))
    }
  }

  const renderCarousel = (products) => {
    const carouselTrack = $('.carousel-track');
    carouselTrack.empty();

    products.forEach(product => {
        const productHTML = `
          <div class="product-card" data-id="${product.id}">
              <a href="${product.img}" target="_blank">
                  <img src="${product.img}" alt="${product.name}" />
                  <h1>${product.name}</h1>
              </a>
              <span class="price">${product.price} TRY</span>
              <div class="like-indicator">
                  <svg class="like-indicator__heart like-indicator__heart--not-liked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.755 24.173" id="icon-not-liked">
                      <path data-name="like (1)" d="M24.7 8.684c-.364-3.974-3.177-6.858-6.7-6.858a6.655 6.655 0 0 0-5.7 3.285 6.413 6.413 0 0 0-5.564-3.285C3.216 1.826.4 4.71.042 8.684a7.072 7.072 0 0 0 .21 2.606 11.178 11.178 0 0 0 3.425 5.715l8.618 7.821 8.766-7.82a11.18 11.18 0 0 0 3.425-5.716 7.087 7.087 0 0 0 .214-2.606z" transform="translate(.509 -1.326)" style="fill: rgb(255, 255, 255); stroke: rgb(155, 155, 155);"></path>
                  </svg>
              </div>
          </div>
        `;
        carouselTrack.append(productHTML);
    });

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(id => {
        const heart = $(`.product-card[data-id="${id}"] .like-indicator__heart`);
        heart.removeClass('like-indicator__heart--not-liked').addClass('like-indicator__heart--liked');
    });
  };

  if (typeof jQuery === 'undefined') {
    const script = document.createElement('script')
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
    script.type = 'text/javascript'
    script.onload = init
    document.getElementsByTagName('head')[0].appendChild(script)
  } else {
    $(document).ready(init)
  }
})();

(() => {
  document.body.innerHTML = '';
  const newBody = document.createElement('body');
  document.documentElement.replaceChild(newBody, document.body);

  const init = () => {
      appendMetaTags();
      ensureProductDetailExists();
      appendCarousel();
      buildCSS();
      setEvents();
      fetchProducts();
  };

  const appendMetaTags = () => {
    let head = document.querySelector('head');
    if (!head) {
        head = document.createElement('head');
        document.documentElement.prepend(head);
    }

    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    head.appendChild(metaViewport);
  };

  const ensureProductDetailExists = () => {
      if ($('.product-detail').length === 0) {
          $('body').append('<div class="product-detail"></div>');
      }
  };

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
      const productDetail = $('.product-detail');
      if (productDetail.length) {
          productDetail.after(html);
      } else {
          console.error('Error: .product-detail bulunamadı.');
      }
  };

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
        @media (max-width: 1024px) {
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
        }

        @media (max-width: 480px) {
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
      $('<style>').html(css).appendTo('head');
  };

  const fetchProducts = () => {
      const localProducts = localStorage.getItem('products');
      if (localProducts) {
          renderCarousel(JSON.parse(localProducts));
      } else {
          fetch('https://gist.githubusercontent.com/sevindi/5765c5812bbc8238a38b3cf52f233651/raw/56261d81af8561bf0a7cf692fe572f9e1e91f372/products.json')
              .then(response => response.json())
              .then(data => {
                  localStorage.setItem('products', JSON.stringify(data));
                  renderCarousel(data);
              })
              .catch(error => console.error('Ürünleri alırken hata oluştu:', error));
      }
  };

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

  const setEvents = () => {
      $(document).on('click', '.like-indicator', function() {
          const card = $(this).closest('.product-card');
          const productId = card.data('id');
          let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          const heart = $(this).find('.like-indicator__heart');

          if (heart.hasClass('like-indicator__heart--not-liked')) {
              heart.removeClass('like-indicator__heart--not-liked').addClass('like-indicator__heart--liked');
              favorites.push(productId);
          } else {
              heart.removeClass('like-indicator__heart--liked').addClass('like-indicator__heart--not-liked');
              favorites = favorites.filter(id => id !== productId);
          }

          localStorage.setItem('favorites', JSON.stringify(favorites));
      });

      $(document).on('click', '.left-arrow', function() {
          const track = $('.carousel-track');
          const productCard = $('.product-card').first();
          const cardWidth = productCard.outerWidth(true);
          const currentScroll = track.scrollLeft();
          const newScroll = currentScroll - cardWidth;

          track.stop(true, true).animate({
              scrollLeft: newScroll
          }, 400, 'swing');
      });

      $(document).on('click', '.right-arrow', function() {
          const track = $('.carousel-track');
          const productCard = $('.product-card').first();
          const cardWidth = productCard.outerWidth(true);
          const currentScroll = track.scrollLeft();
          const newScroll = currentScroll + cardWidth;

          track.stop(true, true).animate({
              scrollLeft: newScroll
          }, 400, 'swing');
      });

  };

  if (typeof jQuery === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      script.type = 'text/javascript';
      script.onload = init;
      document.getElementsByTagName('head')[0].appendChild(script);
  } else {
      $(document).ready(init);
  }
})();
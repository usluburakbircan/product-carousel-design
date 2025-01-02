# insider-product-carousel-design

<b>Introduction</b>
In addition to meeting the requested status requirements, I used the additional time available to implement an improved version of the product detail page. I designed this version to make the carousel look more meaningful within the context of the page and because the time was more than enough. I look forward to your feedback in advance.

Implemented Features and Explanations
Meta Tag Addition:
The viewport meta tag was added dynamically to ensure the page scales correctly on mobile devices.

Dynamic Structure Creation:
Checked for the presence of a .product-detail element in the DOM and dynamically created it if it did not exist.

Carousel Integration:
A "You Might Also Like" carousel section was dynamically appended after the product detail section.

Fetching and Caching Products:
Products were fetched from an API and cached locally in localStorage to optimize performance.

Favorite Functionality:
Interactive favorite icons (like-indicator) were implemented, allowing users to add or remove products from their favorites list.
Favorite selections are stored in localStorage, ensuring the data persists across page reloads.

Dynamic CSS Styling:
CSS for the entire application was created and dynamically injected into the DOM.

Event Handling:
Multiple event handlers were implemented, including:
Clicking the favorite icon to toggle favorites.
Navigating through the carousel using arrow buttons.

jQuery Loading and Validation:
The script checks if jQuery is already loaded in the environment. If not, it dynamically loads the library. Ensures the project runs smoothly without requiring manual dependency management.

Enhanced Product Detail Features (Extra Implementation in BIRCAN_BURAK_USLU_2.JS file):
Added a more comprehensive product detail section, including product images, descriptions, sizes, and purchase options to leverage additional time to create a richer user experience on the product page.

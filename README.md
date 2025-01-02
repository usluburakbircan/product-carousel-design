# insider-product-carousel-design

<b>Introduction</b><br>
In addition to meeting the requested status requirements, I used the additional time available to implement an improved version of the product detail page. I designed this version to make the carousel look more meaningful within the context of the page and because the time was more than enough. I look forward to your feedback in advance.

<b>Implemented Features and Explanations</b><br>
Meta Tag Addition:<br>
The viewport meta tag was added dynamically to ensure the page scales correctly on mobile devices.
<br><br>
Dynamic Structure Creation:<br>
Checked for the presence of a .product-detail element in the DOM and dynamically created it if it did not exist.
<br><br>
Carousel Integration:<br>
A "You Might Also Like" carousel section was dynamically appended after the product detail section.
<br><br>
Fetching and Caching Products:<br>
Products were fetched from an API and cached locally in localStorage to optimize performance.
<br><br>
Favorite Functionality:<br>
Interactive favorite icons (like-indicator) were implemented, allowing users to add or remove products from their favorites list.<br>
Favorite selections are stored in localStorage, ensuring the data persists across page reloads.
<br><br>
Dynamic CSS Styling:<br>
CSS for the entire application was created and dynamically injected into the DOM.
<br><br>
Event Handling:<br>
Multiple event handlers were implemented, including:<br>
Clicking the favorite icon to toggle favorites.<br>
Navigating through the carousel using arrow buttons.<br>
<br>
jQuery Loading and Validation:<br>
The script checks if jQuery is already loaded in the environment. If not, it dynamically loads the library. Ensures the project runs smoothly without requiring manual dependency management.
<br><br>
Enhanced Product Detail Features (Extra Implementation in BIRCAN_BURAK_USLU_2.JS file):<br>
Added a more comprehensive product detail section, including product images, descriptions, sizes, and purchase options to leverage additional time to create a richer user experience on the product page.

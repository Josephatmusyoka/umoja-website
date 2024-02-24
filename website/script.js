document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    for (let link of navLinks) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const productInfo = document.querySelector('.product-info');
    const products = [
        { name: 'Trendy Sunglasses', description: "Shield your eyes in style with these trendy sunglasses. Featuring UV protection lenses and a sleek design, these shades are perfect for sunny days spent outdoors. Whether you're lounging by the pool or exploring the city streets, these sunglasses add a touch of cool to any outfit", image: "img/images (3).jpg" },
        { name: 'Cozy Scarf', description: "Wrap yourself in warmth and style with this cozy scarf. Made from soft, luxurious fabric, this scarf is perfect for chilly days and cool evenings. Its versatile design allows you to wear it in multiple ways, whether draped loosely around your neck or wrapped snugly for extra warmth. Add a pop of color to your winter wardrobe with this must-have accessory.", image: "img/images (2).jpg" },
        { name: 'Classic Wristwatch', description: "Keep track of time in timeless style with this classic wristwatch. Featuring a sleek design and precision movement, this watch is both elegant and reliable. With its stainless steel case and genuine leather strap, it exudes sophistication and durability. Whether you're dressing up for a special occasion or keeping it casual for everyday wear, this wristwatch adds a touch of refinement to any ensemble.", image: "img/images (1).jpg"}
    ]; // Add your products here
    let currentProductIndex = 0;

    function displayProduct() {
        const currentProduct = products[currentProductIndex];
        productInfo.innerHTML = `
            <img src="${currentProduct.image}" alt="${currentProduct.name}">
            <div class="product-details">
                <h3>${currentProduct.name}</h3>
                <p>${currentProduct.description}</p>
            </div>
        `;
        currentProductIndex = (currentProductIndex + 1) % products.length;
    }

    // Initial call
    displayProduct();

    // Change product every 30 seconds
    setInterval(displayProduct, 30000);
});
// Example data (replace with actual data from your database)
const reviewsData = [
    { name: "John Doe", review: "Love this product! It exceeded my expectations." },
    { name: "Jane Smith", review: "Highly recommend this item. Great quality and value." }
    // Add more reviews as needed
];

// Function to display reviews
function displayReviews(reviews) {
    const reviewsList = document.querySelector('.reviews ul');
    reviewsList.innerHTML = '';
    reviews.forEach(review => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${review.name}:</strong> "${review.review}"`;
        reviewsList.appendChild(listItem);
    });
}

// Call the function to display reviews
displayReviews(reviewsData);
document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');
    let currentReviewIndex = 0;

    function displayReview() {
        // Hide all reviews
        reviews.forEach(review => review.style.display = 'none');

        // Display current review
        reviews[currentReviewIndex].style.display = 'block';

        // Move to the next review
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    }

    // Initial call to display first review
    displayReview();

    // Change review every 20 seconds
    setInterval(displayReview, 20000);
});
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault();
            const url = this.href;
            window.open(url, '_blank');
        });
    });
});

// Navigation Function
function navigateTo(page) {
    const routes = {
        'home': '../home_page/home.html',
        'product': '../product_page/product.html',
        'research': '../research_page/research.html',
        'blog': '../blog_page/blog.html',  // You'll need to create this
        'about': '../about_page/about.html'  // You'll need to create this
    };
    
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Page not found: " + page);
    }
}

// Bg color chager of navigationlet header = document.querySelector("header"); // Select the header

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY; // Get current scroll position
  if (scrollY > 0) {
    // If scrolled down, add background color
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    // If at the top, make background transparent
    header.style.backgroundColor = "transparent";
  }
});

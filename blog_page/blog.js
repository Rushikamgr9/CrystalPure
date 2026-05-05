// Navigation Function
function navigateTo(page) {
    const routes = {
        'home': '../home_page/home.html',
        'product': '../product_page/product.html',
        'research': '../research_page/research.html',
        'blog': '../blog_page/blog.html',
        'about': '../about_page/about.html'
    };
    
    if (routes[page]) {
        window.location.href = routes[page];
    } else {
        console.error("Page not found: " + page);
    }
}

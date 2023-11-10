function toggleMenu() {
    const mobileLinks = document.querySelector(".mobile-links");
    const icon = document.querySelector(".icon")
    mobileLinks.classList.toggle("open") // add class open if it is not there and remove if it is there.
    icon.classList.toggle("open")
    
}
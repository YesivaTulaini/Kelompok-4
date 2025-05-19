document.addEventListener("DOMContentLoaded", () => {
    let banner = document.querySelector(".banner");
    
    setTimeout(() => {
        banner.style.opacity = "1";
        banner.style.transition = "opacity 2s ease-in-out";
    }, 500);
});
document.addEventListener("DOMContentLoaded", () => {
    let elements = document.querySelectorAll(".about-content, .contact-form, .banner");
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }, index * 300);
    });

    let navItems = document.querySelectorAll("nav ul li");

    navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.style.color = "#ff9800";
        });

        item.addEventListener("mouseleave", () => {
            item.style.color = "white";
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            link.style.backgroundColor = "#e68900";
            link.style.transform = "scale(0.95)";
            setTimeout(() => {
                link.style.transform = "scale(1)";
                link.style.backgroundColor = "";
            }, 200);
        });
    });
});
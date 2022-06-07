const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-item");

window.onload = () => {
    checkPosition();
}

window.onscroll = () => {
    checkPosition();
};

function checkPosition() {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.id;
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}
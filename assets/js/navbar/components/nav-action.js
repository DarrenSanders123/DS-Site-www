// const sections = document.querySelectorAll("section");
const navLists = $(`.nav-item`);

navLists.click(function (event) {
    event.preventDefault();
    const element = $(`#${this.classList.item(1)}`);
    const offset = element.offset().top - 70;
    window.scrollTo({
        top: offset,
        left: 100,
        behavior: 'smooth'
    });
})
const navButton = $(`[data-button-toggle-dropdown]`);
let nav = $(`.nav`);
let header = $(`header`);

navButton.click(function () {
    if (nav.hasClass('show')) {
        nav.removeClass('show');
        header.removeClass('open');
    } else {
        nav.addClass('show');
        header.addClass('open');
    }
});
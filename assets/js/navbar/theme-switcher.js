let body = $(`body`);
let themeButton = $(`[data-button-toggle-theme]`);
let cover = $(`.cover`);
$(document).ready(function () {
    toggleTheme(true);
})

themeButton.click(function () {
    toggleTheme();
});

function toggleTheme(load = false) {
    const cookieTheme = Cookies.get('theme');
    let isDarkMode = body.hasClass('dark');
    const switchThemes = {light: `dark`, dark: `light`};

    if (load) {
        if (cookieTheme !== undefined) {
            setTheme(cookieTheme, switchThemes[cookieTheme]);
        } else {
            setTheme('dark', 'light');
        }
    } else if (isDarkMode) {
        setTheme(switchThemes['dark'], 'dark');
    } else {
        setTheme(switchThemes['light'], 'light');
    }
}

function setTheme(theme, oldTheme) {
    Cookies.set('theme', theme);
    body.switchClass(oldTheme, theme);
    setIcons(theme);
    themeButton.attr('title', `Set theme to: ${oldTheme}`);
}

function setIcons(theme) {
    const color = theme === 'dark' ? '#fff' : '#000';
    $(`box-icon`).attr('color', color);
}
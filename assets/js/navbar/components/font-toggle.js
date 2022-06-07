let html = $(`html`);
let button = $(`[data-button-toggle-font]`);

$(document).ready(function () {
    toggleFont();
})

button.click(function () {
    toggleFont();
});

function toggleFont() {
    const cookieFont = Cookies.get('font');
    let currentFont = html.css('font-family');
    const fonts = ['Arial', 'Comic Code Ligatures'];
    const switchFonts = {Arial: `Comic Code Ligatures`, 'Comic Code Ligatures': `Arial`};

    currentFont = currentFont.replaceAll('\"', '');

    if ($.inArray(currentFont, fonts) === -1) {
        if (cookieFont !== undefined) {
            setFont(cookieFont, switchFonts[cookieFont]);
        } else {
            setFont('Arial', 'Comic Code Ligatures');
        }
    } else if (currentFont !== undefined) {
        setFont(switchFonts[currentFont], currentFont);
    }
}

function setFont(font, oldFont) {
    Cookies.set('font', font);
    html.css('font-family', font);
    button.attr('title', `Set font to: ${oldFont}`);
}
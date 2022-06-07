let languageButton = $(`[data-button-toggle-language]`);

$(document).ready(function () {
    toggleLanguage(true);
})

languageButton.click(function () {
    toggleLanguage();
});

function toggleLanguage(load = false) {
    const cookieLanguage = Cookies.get('language');
    const currentLanguage = html.attr('lang');
    const switchLanguages = {nl: `en`, en: `nl`};
    const langFull = {nl: 'dutch', en: 'english'}

    if (load) {
        if (cookieLanguage !== undefined) {
            setLanguage(cookieLanguage, langFull[switchLanguages[cookieLanguage]]);
        } else {
            setLanguage('en', langFull['nl']);
        }
    } else if (currentLanguage !== undefined) {
        setLanguage(switchLanguages[currentLanguage], langFull[currentLanguage]);
    }
}

function setLanguage(language, oldLanguage) {
    Cookies.set('language', language);
    html.attr('lang', language);

    if (language === 'nl') {
        const langNl = {english: 'Engels', dutch: 'Nederlands'};
        languageButton.attr('title', `Zet taal naar: ${langNl[oldLanguage]}`);
    } else {
        languageButton.attr('title', `Set language to: ${oldLanguage}`);
    }

    $(`[data-nl]`).each(function () {
        if (language === 'nl') {
            $(this).text($(this).attr('data-nl'));
        } else {
            $(this).text($(this).attr('data-en'));
        }
    })
}

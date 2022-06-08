const template = $(`#reviews > div`);
let reviews = null;

$.ajax({
    method: 'get',
    url: 'https://api.darrensanders.nl/index.php',
    success: function (data) {
        let reviews = [];

        Object.values(data['reviews']).forEach(val => {
            reviews.push(val);
        });

        displayReviews(reviews);

    }
})

function displayReviews(reviews) {
    let review = null;

    reviews.forEach(function (review) {
        template.loadTemplate($("#template"),
            {
                header: `${review.user}<br>${review.title}`,
                body: `${review.body}`,
                footer: moment(review.timestamp).fromNow(),
            }, {append: true, paged: true, elemPerPage: 10});
    })
}
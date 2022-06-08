const template = $(`#reviews > div`);
let reviews = null;


$.ajax({
    type: 'GET',
    headers: {  'Access-Control-Allow-Origin': '*' },
    dataType: 'jsonp',
    url: 'http://api.darrensanders.nl/comments.json',
    success: function (data) {
        let reviews = [];

        Object.values(data).forEach(val => {
            Object.values(val).forEach(val2 => {
                reviews.push(val2);
            });
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
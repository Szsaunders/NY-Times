// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//     'api-key': "c9abce99a40e43cba203321b6a5bd4fd",
//     'q': "great depression"
// });
// $.ajax({
//     url: url,
//     method: 'GET',
// }).done(function(result) {
//     for (var i = 0; i < result.response.docs.length; i++) {
//         $("#article-titles").append(result.response.docs[i].headline.main + "<br>");
//     }

// }).fail(function(err) {
//     throw err;
// });

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var query = "placeholder";
var numberRecords = 5;
var beginDate = "00000000";
var endDate = "00000000";

function articleGet () {
    query = $("#usr").attr("value")
url += '?' + $.param({
'api-key': "b979efd373ab4ede84ab7ff3d79ac33d",
'q': query,
});
if (beginDate != "00000000") {
url += '&begin_date=' + beginDate;
}
if (endDate != "00000000") {
url += '&end_date=' + endDate;
}
$.ajax({
url: url,
method: 'GET',
}).done(function(result) {
    console.log(result)
for (var i = 0; i < numberRecords; i++) {
var articleDiv = $("<div>");
var snippetP = $("<p>");
$(snippetP).html(result.response.docs[i].snippet);
$(articleDiv).prepend(snippetP);
$("#articles").append(articleDiv); }
}).fail(function(err) {
throw err;
});
}

$("#searchButton").click( function() {
    articleGet ();
}
)

// $("#search-team").attr("value")
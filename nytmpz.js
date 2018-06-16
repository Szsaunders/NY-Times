var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "c9abce99a40e43cba203321b6a5bd4fd",
    'q': "great depression"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    for (var i = 0; i < result.response.docs.length; i++) {
        $("#article-titles").append(result.response.docs[i].headline.main + "<br>");
    }

}).fail(function(err) {
    throw err;
});

// $("#search-team").attr("value")
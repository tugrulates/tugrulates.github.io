
$(document).ready(function () {
    $("a[href^='http'], a[href^='//'], a[rel='external']")
        .attr("target", "_blank")
        .attr("rel", "external");

    var subtitles = $("article").find("h2, h3, h4, h5, h6");
    subtitles
        .addClass('anchor')
        .prepend(function (index, html) {
            return '<a class="anchor-left" href="{{ page.url | relative_url }}#' + subtitles[index].id + '"></a>';
        })
        .append(function (index, html) {
            return '<a class="anchor-right" href="{{ page.url | relative_url }}#' + subtitles[index].id + '"></a>';
        });
});

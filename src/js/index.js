$(function () {
    // chiamata generale di tutti i personaggi
    $.getJSON("src/api/characters.json", {
        "apikey": "6855e608549da5f59a51c62c2f4f57b3"
    }).done(function (msg) {
        console.log(arguments);
        var source = document.getElementById("character-template").innerHTML;
        var template = Handlebars.compile(source);
        var context = msg.data;
        var html = template(context);
        $("#characters-container").html(html);
    }).fail(function (err) {
        console.log(err);
    });
});
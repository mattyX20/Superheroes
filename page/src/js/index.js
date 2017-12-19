$(function () {
    // chiamata generale di tutti i personaggi
    $.getJSON("src/api/characters.json", {
        "apikey": "6855e608549da5f59a51c62c2f4f57b3"
    }).done(function (msg) {
        console.log(arguments);
        // Template Handlebars for Cards
        var source = document.getElementById("character-template").innerHTML;
        var template = Handlebars.compile(source);
        var context = msg.data;
        var html = template(context);
        $("#characters-container").html(html);
        var source2 = document.getElementById("personaggio-template").innerHTML;
        var template2 = Handlebars.compile(source2);
        // recupero ID
        $(".id").click(function () {
            var idshow = $(this).attr("data-id");
            var elshow = msg.data.results.filter(function (el) {
                return el.id == idshow;
            })[0];
            console.log(elshow);
            $("#personaggio-container").html(template2(elshow));
        });
    }).fail(function (err) {
        console.log(err);
    });
});
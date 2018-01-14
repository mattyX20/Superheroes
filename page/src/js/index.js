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
        $(".character-container").flip({trigger:'manual'});
        // recupero ID
        $(".character-container")
            // Mosrtra descrizione dei personaggi
            .on("click", function () {
                $(".character-container").not(this).flip(false);
                $(this).flip("toggle");
                // Nasconde descrizione dei personaggi
            }).on("mouseover", function () {
                $(this).find(".front .character-name").fadeIn();
            }).on("mouseleave", function () {
                $(this).find(".front .character-name").fadeOut();
            });
    }).fail(function (err) {
        console.log(err);
    });
});

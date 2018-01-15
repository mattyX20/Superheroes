$(function () {
    // chiama tutti i personaggi
    $.getJSON("src/api/characters.json", {
        "apikey": "6855e608549da5f59a51c62c2f4f57b3"
    }).done(function (msg) {
        console.log(arguments);
        // Template Handlebars for Cards
        var source = document.getElementById("character-template").innerHTML;
        var template = Handlebars.compile(source);
        var context = msg.data;
        var html = template(context);
        // Mostra il template nel html
        $("#characters-container").html(html);
        $(".character-container").flip({
            trigger: 'manual'
        });
        // recupero ID
        $(".character-container")
            // Abilita il flip
            .on("click", function () {
                $(this).flip("true");
                // Mostra nome e descrizione dei personaggi  flippando
            }).on("mouseover", function () {
                $(this).find(".front .character-name").fadeIn();
                // Nasconde descrizione dei personaggi unflippando uscendo fuori con il mouse
            }).on("mouseleave", function () {
                $(this).find(".front .character-name").fadeOut();
                $(this).flip(false);
            });
    })
});

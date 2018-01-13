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
        // recupero ID
        $(".character-container")
            // Mosrtra descrizione dei personaggi
            .on("click", function () {
                $(this).find(".character-description").show();
                // Nasconde descrizione dei personaggi
            }).on("mouseleave", function () {
                $(this).find(".character-description").hide();
                // Mostra nome dei personaggi
            }).on("mouseover", function () {
                $(this).find(".character-name").show();
            }).on("mouseleave", function () {
                // Nasconde nome dei personaggi
                $(this).find(".character-name").hide();
            });
    }).fail(function (err) {
        console.log(err);
    });
});
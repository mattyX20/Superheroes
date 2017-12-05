// chiamata generale di tutti i personaggi
$.ajax({
        method: "GET",
        url: "src/api/characters.json",
        data: {
            "apikey": "6855e608549da5f59a51c62c2f4f57b3"
        }
    })
    .done(function (msg) {
        console.log(msg);
    });
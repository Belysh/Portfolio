const $ = require('jquery');

$(document).ready(function() {
    $(".form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./assets/php/mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Спасибо за письмо");
            setTimeout(function() {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

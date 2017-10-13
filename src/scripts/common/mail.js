const $ = require('jquery');

$(function(){
    $(".form").on("submit", function(e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();
        $.ajax({
            url: "assets/php/send.php",
            type: "POST",
            dataType: 'JSON',
            data: formData,
            success: function(data) {
                console.log(formData);
            }
         }).fail(function(ans) {
            console.log('Я рукожоп');
        });
    });
});

/***************BOTON LEER MÁS******************/
    $(document).ready(function() {
        $('.read-more').click(function() {
            $(this).siblings('.additional-text').slideToggle();
            $(this).text(function(i, text) {
                return text === "Read more" ? "Read less" : "Read more";
            });
        });
    });

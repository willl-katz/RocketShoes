$(document).ready(() => {
    $('.opcao-1').click(() => {
        $('.lista-imagem-produto').addClass("before1");
        $('.lista-imagem-produto').removeClass("before2");
        $('.lista-imagem-produto').removeClass("before3");
        $('#imagem-ampliada').attr('src', './assets/tenis-2-ampliado.png');
    });
    $('.opcao-2').click(() => {
        $('.lista-imagem-produto').addClass("before2");
        $('.lista-imagem-produto').removeClass("before1");
        $('.lista-imagem-produto').removeClass("before3");
        $('#imagem-ampliada').attr('src', './assets/tenis-1-ampliado.png');
    });
    $('.opcao-3').click(() => {
        $('.lista-imagem-produto').addClass("before3");
        $('.lista-imagem-produto').removeClass("before1");
        $('.lista-imagem-produto').removeClass("before2");
        $('#imagem-ampliada').attr('src', './assets/tenis-3-ampliado.png');
    });

    $('#video-ampliado').click(() => {
        $('.pop-video').css('display', 'flex');
        $('.video-man').attr('src', './assets/video-tenis.mp4');
    });
    $('.pop-video .close').click(() => {
        $('.pop-video').css('display', 'none');
        $('.video-man').attr('src', './assets/');
    })

    $('.loja').mouseenter(() => {
        $('.loja').attr('src', './assets/icon-bag-red.svg', 0.1);
    });

    $('.loja').mouseleave(() => {
        $('.loja').attr('src', './assets/icon-bag.svg', 0.1);
    });
});
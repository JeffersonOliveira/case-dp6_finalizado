// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//----------------index.html
// Exclusivo para o menu "entre em contato"
jQuery('.menu-lista-contato').on('click', function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});
// Exclusivo para o menu "download_pdf"
jQuery('.menu-lista-download').on('click', function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});


//----------------analise.html
// Atende aos botões “Lorem”, “Ipsum” e “Dolor”.
jQuery('.card-montadoras').on('click', function() {
    var label = jQuery(this).attr("data-id");
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: label
    });
});

//----------------sobre.html
// Atende aos preenchimentos dos formulários  “nome”, “email” e “telefone”.
jQuery('.contato input[type="text"],.contato input[type="email"],.contato input[type="tel"]').on('blur', function() {
    var name_action = jQuery(this).attr('id');
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: name_action,
        eventLabel: 'preencheu'
    });
});

// Atende ao click do checkbox "aceito".
jQuery('.contato input[type="checkbox"]').on('click', function() {
    var name_action = jQuery(this).attr('id');
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: name_action,
        eventLabel: 'clicou'
    });
});

// Atende ao envio do formulário.
jQuery('.contato input[type="submit"]').on('click', function() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
});
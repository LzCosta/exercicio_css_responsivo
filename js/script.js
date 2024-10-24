$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  $("#telefone").mask("(00) 00000-0000", { placeholder: "(00) 00000-0000" });

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
      BebidasInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      console.log(camposIncorretos);
    },
  });

  $(".lista-bebidas button").click(function () {
    const destino = $("#contato");
    const nomeBebida = $(this).parent().find("h3").text();

    $("#bebida-interesse").val(nomeBebida);
    $("#mensagem").val(`Gostaria de mais inforamções sobre o ${nomeBebida}.`);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });

  $("#bebida-loja").click(function () {
    const destino2 = $("#sobre-a-loja");

    $("html").animate(
      {
        scrollTop: destino2.offset().top,
      },
      1000
    );
  });

  $("#bebidas-compradas").click(function () {
    const destino2 = $("#mais-comprados");

    $("html").animate(
      {
        scrollTop: destino2.offset().top,
      },
      1000
    );
  });

  // $('#roll-promo').click(function(){
  //     const destino2 = $('#promocoes-do-dia');

  //     $('html').animate({
  //         scrollTop: destino2.offset().top
  //     }, 1000)
  // })

  $("#bebida-contato").click(function () {
    const destino2 = $("#contato");

    $("html").animate(
      {
        scrollTop: destino2.offset().top,
      },
      1000
    );
  });
});

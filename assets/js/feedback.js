// ENVENTO DE AO CLICAR  APARECE UMA MENSAGEM "FEDDBACK ENVIADO!"
    $("#btn-enviar").on("click", function(){
       var caixa = $("#caixa");
       caixa.slideDown(500);

       setTimeout(function(){
        caixa.slideUp(500);
    }, 2000);
    });

    // ENVENTO DE AO CLICAR  APARECE UMA MENSAGEM "SUGESTÃO ENVIADA!"
    $("#btn-sugestoes").on("click", function(){
        var sugestoes = $("#sugestoes");
        sugestoes.slideDown(500);
 
         setTimeout(function(){
          sugestoes.slideUp(500);
      }, 2000);
     });

     // ENVENTO DE AO PASSAR O MOUSE POR CIMA DO INPUT ELE AUMENTE A LARGURA("WIDTH") INPUT FEEDBACK
     $(document).ready(function(){
        $("#feedbackInput").hover(function(){
            $(this).animate({width: '+=500px'}, 'fast');
          },
          function(){
            $(this).animate({width: '-=500px'}, 'fast');
          }
        );
      });

      // ENVENTO DE AO PASSAR O MOUSE POR CIMA DO INPUT ELE AUMENTE A LARGURA("WIDTH") INPUT SUGESTOES
      $(document).ready(function(){
        $("#sugestoesInput").hover(function(){
            $(this).animate({width: '+=500px'}, 'fast');
          },
          function(){
            $(this).animate({width: '-=500px'}, 'fast');
          }
        );
      });

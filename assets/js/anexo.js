$(document).ready(function () {
    $('#portfolio-container').css('display', 'none')
    
    $("#agua").css({
        "background-color": "rgba(255, 255, 255, 0)",
        "color": "black"
    })
    $("#aire").css({
        "background-color": "rgba(255, 255, 255, 0)",
        "color": "black"
    })
    $("#fuego").css({
        "background-color": "rgba(255, 255, 255, 0)",
        "color": "black"
    })
    $("#tierra").css({
        "background-color": "rgba(255, 255, 255, 0)",
        "color": "#000000"
    })
    $("#5elemento").css({
        "background-color": "rgba(255, 255, 255, 0)",
        "color": "black"
    })


  

    var $cabecera = $('#header');
    var previousScroll = 0;
    $(window).on("scroll", function (event) {

        var scroll = $(this).scrollTop();
        if (scroll > previousScroll && scroll > 10) {

            $("#header").css('background-color', 'transparent');
            $("#navbar").css('display', 'none');
            $("#logo").css('display', 'none');
            $("#navbarTitle").css('display', 'none');
            $("#empezar").css('display', 'none');
            $("#registrarse").css('display', 'none');
            $("#mapa_registro").css('display', 'none');
            $("#contacto").css('display', 'none');


        } else {
            // alert("hola");
            $("#header").css('background-color', 'white');
            $("#navbar").css('display', 'block');
            $("#logo").css('display', 'block');
            $("#navbarTitle").css('display', 'block');
            $("#empezar").css('display', 'block');
            $("#registrarse").css('display', 'block');
            $("#mapa_registro").css('display', 'block');
            $("#contacto").css('display', 'block');

        }
        previousScroll = scroll;
    });

    //configuracion agua
    $("#agua").click(function () {
        $("#agua").css("background-color", "#007BE3")
        $("#aire").css({
            "background-color": "#FFFFFF",
            "color": "black"
        })
        $("#fuego").css({
            "background-color": "#FFFFFF",
            "color": "black"
        })
        $("#tierra").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;' s><strong>Tranquilidad y Reflexión: </strong><br>" +
            "Sumérgete en la serenidad del elemento agua mientras exploras nuestras playas, ríos y lagos serenos.Deja que las olas te acaricien en la costa, disfruta de un paseo en bote por aguas tranquilas o relájate junto a una cascada pintoresca.Estos espacios naturales te brindan un ambiente propicio para la introspección y la renovación, permitiéndote conectar con la fluidez y el poder calmante del agua." +
            " </h5 > ");

    //configuracion  aire
    $("#aire").click(function () {
        $("#agua").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#fuego").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#tierra").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#aire").css("background-color", "#FFFFFF")

        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;'><strong>Aventura y Libertad:  </strong><br>" +
            "Si buscas la emoción del aire en tus viajes, nuestras montañas y costas escarpadas te ofrecen una experiencia verdaderamente enérgica. Siente la brisa acariciando tu piel mientras exploras senderos panorámicos o te aventuras en parapente sobre valles y acantilados. El elemento aire te invita a liberar tu espíritu aventurero y a abrazar la sensación de libertad en medio de paisajes impresionantes." +
            " </h5 > ")
    });

    //configuracion tierra
    $("#fuego").click(function () {
        $("#agua").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#aire").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#tierra").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#fuego").css("background-color", "#FF2132")

        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;'><strong>Pasión y Energía:  </strong><br>" +
            "Experimenta la pasión y la vitalidad del elemento fuego en nuestros desiertos y volcanes impresionantes. Observa la tierra arder con la intensidad de la lava, captura la belleza de las llamas danzantes en la oscuridad o maravíllate con un amanecer o atardecer ardiente. Estos lugares te invitan a sentir la energía primordial del fuego y a conectarte con tu propia pasión interior." +
            " </h5 > ")
    });

    //configuracion tierra
    $("#tierra").click(function () {
        $("#agua").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#aire").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#fuego").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })

        $("#tierra").css({
            "background-color": "#000000",
            "color": "white"
        })

        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;'><strong>Conexión y Estabilidad:  </strong><br>" +
            "Encuentra la estabilidad y la conexión con la tierra en nuestros bosques, jardines botánicos y reservas naturales. Explora senderos rodeados de vegetación exuberante, admira la majestuosidad de árboles centenarios y descubre la diversidad de la vida silvestre en su hábitat natural. Al sumergirte en la tierra, podrás restablecer el equilibrio y la armonía con la naturaleza que te rodea." +
            " </h5 > ")
    });

    //configuracion quinto elemento
    $("#5elemento").click(function () {
        $("#agua").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#aire").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#fuego").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#tierra").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "#FFC90A",
            "color": "black"
        })
    
        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;'><strong>Exploración y Descubrimiento:  </strong><br>" +
            "Si buscas experiencias únicas y una conexión con la historia geológica, nuestros lugares con presencia de este elemento te cautivarán. Explora minas abandonadas, cuevas repletas de minerales y formaciones rocosas excepcionales. Al conectar con este elemento, te sumergirás en una aventura de descubrimiento profundo y te cautivaran con la belleza oculta en las capas subterráneas de la tierra o donde la arquitectura metálica se mezcla con la tecnología más avanzada. Explora museos de artefactos futuristas, donde la robótica y la inteligencia artificial han dado lugar a creaciones asombrosas que desafían la imaginación. Sumérgete en una experiencia de exploración que abarca la convergencia de la humanidad y la tecnología." +
            " </h5 > ")
    });

    $("#elementos").click(function () {

        $("#agua").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#aire").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#fuego").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#tierra").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#5elemento").css({
            "background-color": "rgba(255, 255, 255, 0)",
            "color": "black"
        })
        $("#element_description").html("<h5 id='' class='col-md-12 mb-5' style='text-align: justify;'><strong><h2>Transforma tu elemento en experiencia con Hey Trips!</h2></strong><br>" +
            "Explora la sinergia ideal de tus deseos de viajar en una experiencia única que incorpora los elementos naturales " +
            " </h5 > ")
    })
   

    
    })




})


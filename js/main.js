$(function(){
    //largeur du conteneur
    var nbreItem =$('.secondary-nav').length;
    var largeurConteneur = nbreItem*100;
    $('#secondary-navs').width(largeurConteneur+'%');

    //largeur d'un item
    var largeurItem = 100/nbreItem;
    $('.secondary-nav').width(largeurItem+'%');

    $('#primary-nav a').on('click', function(event){
        event.preventDefault();
    });

    //SLIDING MENU
    $('#primary-nav li').click(function(){
        $('#secondary-navs').css('height', 'auto');
        var index = ($(this).parent().children().index(this));
        var slide = '-'+(index*100)+'%';

        $('#secondary-navs').css('left', slide);
        $('.activeCategory').removeClass('activeCategory');
        $(this).addClass('activeCategory');

        if($(window).width() < 1000){
            $('#primary-nav').slideUp();
            $('#responsive-title').slideDown();

            }

        });

    $('#responsive-title a').click(function(){
        $('#primary-nav').slideDown();
        $('#responsive-title').hide();
        $('#secondary-navs').css('left', '100%');
        $('.activeCategory').removeClass('activeCategory');
    });


    $('#primary-nav li a').click(function(){
        $('#secondary-navs').css('height', 'auto');
        var titre = $(this).html();
        $('#category-title').html(titre);
    });

    //SHOW MENU
    $('#showMenu').click(function(){
        $('#sliding-menu-brice-j>div').toggle();
    });


    $( window ).resize(function() {
        if($(window).width() < 1000){
            $('.activeCategory').removeClass('activeCategory');
            $('#secondary-navs').css('height', '0');
            $('#secondary-navs').css('left', '100%');
            }
    });


});



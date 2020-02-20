//dynamic menu toggler coding

$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('#menu').collapse('toggle');
        $('#menu').addClass('animated zoomIn');
    });
});

//typing header txt animation

$(document).ready(function(){
    var string = "BE STYLIST";
    var i=0;
    if(i<string.length){
        setInterval(function(){
            document.querySelector('.header-txt').innerHTML += string.charAt(i);
            i++;
        },100);
    }
});

//search bar coding

$(document).ready(function(){
    $('#search-icon').click(function(){
        $('#search-bar').collapse('toggle');
    });

    $('#search-bar').on('show.bs.collapse',function(){
        $('#slider h1').animate({marginTop:'50px'},300);
    });

    $('#search-bar').on('hide.bs.collapse',function(){
        $('#slider h1').animate({marginTop :'0'},300);
    });
});

//prev and next carousel btn for client 

$(document).ready(function(){
    $('#prev-btn').click(function(){
        $('#client-slider').carousel('prev');
    });

    $('#next-btn').click(function(){
        $('#client-slider').carousel('next');
    });
});

//start dynamic no increasing coding

$(window).scroll(function(){
    if(sessionStorage.getItem('key') == null){
        var classnames = $('#people-say-col').attr('class');
        if(classnames.indexOf('animated') != -1){
            animation();
            sessionStorage.setItem('key','yes');   
        }
    }
});

function animation(){
    $(document).ready(function(){
        var num = 0;
        var repeat = setInterval(function(){
            num += 1
            $('#num-one').html(num+'+');
            if(num == 500)
            {
                clearInterval(repeat);
            }
        },1);
    });
    
    $(document).ready(function(){
        var num = 0;
        var repeat = setInterval(function(){
            num += 1
            $('#num-two').html(num+'+');
            if(num == 470)
            {
                clearInterval(repeat);
            }
        },1);
    });
    
    $(document).ready(function(){
        var num = 0;
        var repeat = setInterval(function(){
            num += 1
            $('#num-three').html(num+'+');
            if(num == 600)
            {
                clearInterval(repeat);
            }
        },1);
    });
    
    $(document).ready(function(){
        var num = 0;
        var repeat = setInterval(function(){
            num += 1
            $('#num-four').html(num+'+');
            if(num == 250)
            {
                clearInterval(repeat);
            }
        },1);
    });
}
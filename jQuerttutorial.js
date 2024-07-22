// $(document).ready(function(){
//     $('h1').mouseup(function(){
//     $(this).after("<p style='color:red'>this is ramuuuu....<p>");
// });

//     $('p').click(function(){
//         $(this).hide();

// });

// })

$(document).ready(function () {
    ///////////////////event/////////////////////////////////
    


    ///////////////////////animate///////////////////////////////////
    // $("#lorem").animate({opacity:0.3,
    //     height :'100px',
    //     width:'100px',
    // },2000)

    ////////////////////////////hide and shoew method with argument/////////////////////////////
    // $('#lorem').hide(5000,function(){
    //     document.write("<h1>0hidden<h1>")
    // })
    // $('#lorem').show(5000,function(){
    //     document.write("<h1>show<h1>")
    // })
    // $('#btn').click(function () {
    //     $('#lorem').fadeTo(2000);
    // });
    ////////////////////////////////slide methos//////////////////////////////////
    // $('#btn').click(function () {
    //     $('#lorem').slideToggle(2000);
    // })
    // $('#lorem').slideUp(2000);

    ////////////////////////////////////////////////////

    ////////////event of mouseleave..///////////////////////////////////////////
    $('#gg').mouseleave(function () {
        console.log("this is the mouseleave event", this)
    })




    ////////////////////////////////this is demoing on method/////////////////////////////////////////////
    $('.gk').on({

        'click': function () {
            console.log('i am demong on by once click', this)
        },
        hover: function () {
            console.log("this is hover case", this);
        }
    })
})
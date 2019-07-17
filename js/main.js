let button_home = document.getElementById('home-btn');
let button_about_us = document.getElementById('aboutus-btn');
let button_jobs = document.getElementById('jobs-btn');
//let button_clients = document.getElementById('clients-btn');

/**
* variable de estado
* 0 = home en pantalla
* 1 = about us en pantalla
* 2 = jobs en pantalla
* 3 = clients en pantalla
*/
let state = 0;

$('.about-us').hide();
$('.jobs').hide();

button_about_us.addEventListener('click', function () {

  if (state == 0) {
    //home en pantalla
    let main = $('.main');
    let contactform = $('.contact-form');
    let aboutus = $('.about-us');

    aboutus.show();
    main.animate({marginLeft: '-100%'}, 500);
    contactform.animate({marginLeft: '-100%'}, 300);

    setTimeout(function () {
      aboutus.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

    setTimeout(function(){
      contactform.hide();
    },500);

  }else if (state == 1 ) {
    //about us en pantalla
  }else if (state == 2) {
    //our work en pantalla
    let jobs = $('.jobs');
    let aboutus = $('.about-us');

    aboutus.show();
    jobs.animate({marginLeft: '100%'}, 500);

    setTimeout(function () {
      aboutus.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

    setTimeout(function(){
      jobs.hide();
    },500);

  }else if (state == 3) {
    //clients en pantalla
    let main = $('.main');
    let contactform = $('.contact-form');
    let aboutus = $('.about-us');

    aboutus.show();
    main.animate({marginLeft: '-100%'}, 500);
    contactform.animate({marginLeft: '-100%'}, 300);

    setTimeout(function () {
      aboutus.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

  }



    state = 1;
});

button_home.addEventListener('click', function () {
  if(state == 0){

  }else if(state == 1){
    let main = $('.main');
    let contactform = $('.contact-form');
    let aboutus = $('.about-us');

    contactform.show();
    aboutus.animate({marginLeft: '100%', opacity: '0'}, 300);

    setTimeout(function () {
      main.animate({marginLeft: '0'}, 300);

        if(window.innerWidth > 750){
          contactform.animate({marginLeft: '64%'}, 500);
        }else{
          contactform.animate({marginLeft: '0'}, 500);
        }

    }, 100);

    setTimeout(function(){
      aboutus.hide();
    },500);

  }else if (state == 2) {
    let main = $('.main');
    let contactform = $('.contact-form');
    let jobs = $('.jobs');

    contactform.show();
    jobs.animate({marginLeft: '100%', opacity: '0'}, 300);

    setTimeout(function () {
      main.animate({marginLeft: '0'}, 300);

      if(window.innerWidth > 800){
        contactform.animate({marginLeft: '64%'}, 500);
      }else{
        contactform.animate({marginLeft: '0'}, 500);
      }

    }, 100);

    setTimeout(function(){
      jobs.hide();
    },500);
  }else if (state = 3) {
    let main = $('.main');
    let contactform = $('.contact-form');
    let clients = $('.clients');

    clients.animate({marginLeft: '100%', opacity: '0'}, 300);

    setTimeout(function () {
      main.animate({marginLeft: '0'}, 300);
      contactform.animate({marginLeft: '64%'}, 500);
    }, 100);

    setTimeout(function(){
      clients.hide();
    },500);
  }

  state = 0;
});

button_jobs.addEventListener('click', function () {

  if (state == 0) {
    //home en pantalla
    let main = $('.main');
    let contactform = $('.contact-form');
    let jobs = $('.jobs');

    jobs.show();
    main.animate({marginLeft: '-100%'}, 500);
    contactform.animate({marginLeft: '-100%'}, 300);

    setTimeout(function () {
      jobs.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

    setTimeout(function(){
      contactform.hide();
    },500);

  }else if (state == 1 ) {
    //about us en pantalla
    let aboutus = $('.about-us');
    let jobs = $('.jobs');

    jobs.show();
    aboutus.animate({marginLeft: '-100%'}, 500);

    setTimeout(function () {
      jobs.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

    setTimeout(function(){
      aboutus.hide();
    },500);

  }else if (state == 2) {
    //our work en pantalla
  }else if (state == 3) {
    //clients en pantalla
    let main = $('.main');
    let contactform = $('.contact-form');
    let aboutus = $('.about-us');

    aboutus.show();
    main.animate({marginLeft: '-100%'}, 500);
    contactform.animate({marginLeft: '-100%'}, 300);

    setTimeout(function () {
      aboutus.animate({marginLeft: '0', opacity: '1'}, 500);
    }, 200);

  }

  state = 2;

});

/**
button_clients.addEventListener('click', function () {

});

*/
let form = document.getElementById('form');
let bgimage = $('.background-image');
let something = $('.something');

form.addEventListener('mouseover', function () {
  bgimage.css({filter: 'blur(3px)'});
  something.css({filter: 'blur(3px)'});
});

form.addEventListener('mouseleave', function () {
  bgimage.css({filter: 'none'});
  something.css({filter: 'none'});
});

//VALIDACION DE FORMULARIO

//button to send mail
let send = document.getElementById('send-btn');
let mensajeError = "";
let mensaje_error_div = document.getElementById('error-message');

send.addEventListener('click', function () {

  console.log('click ok');

  //variables

  let asunto = document.getElementById('asunto').value;
  let mail = document.getElementById('mail').value;
  let mensaje = document.getElementById('mensaje');

  if(asunto == ""){
    mensajeError = "Por favor completa todos los campos";
    mensaje_error_div.innerText = mensajeError;
    $('#asunto').css({border: '1px solid #f80063'});
  }else if (mail == "") {
    mensajeError = "Por favor completa todos los campos";
    mensaje_error_div.innerText = mensajeError;
    $('#mail').css({border: '1px solid #f80063'});
  }else if (mensaje == "") {
    mensajeError = "Por favor completa todos los campos";
    mensaje_error_div.innerText = mensajeError;
    $('#mensaje').css({border: '1px solid #f80063'});
  }else{
      $('.btn-none').click();
  }
});


let btn_nav_menu = document.getElementById('btn-nav-menu');

btn_nav_menu.addEventListener('click', function () {
  $('.nav-menu').slideToggle(200);
  $('.nav-menu').css({display: 'flex', justifyContent: 'center'});
});

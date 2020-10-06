import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  ngOnInit() {
    var $w = $(window).scroll(function(){
      if ( $w.scrollTop() > 250 ) { 
        $('.bot_top').css('display', 'block');
      }else{
        $('.bot_top').css('display', 'none');
      }
});    

// scroll to specific anchor
$('.scroll').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
var target = $(this.hash);
target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
if (target.length) {
  $('html,body').animate({
    scrollTop: target.offset().top - 100
  }, 650);
  
  return false;
}
}
});

$('.bot_pop').click(function() {

var target = $(this.hash);

$('html,body').animate({
   scrollTop: target.offset().top - 100
 }, 650);

$('#exampleModalCenter').modal('hide');
 
 return false;

});

var anchorLogo_color = $("#logo_color").offset().top - 600;
var anchorSoft = $("#software_dev").offset().top - 600;
var anchorServicios = $("#servicios").offset().top - 500;
var anchorStaff = $("#staff").offset().top - 500;
var anchorNumeros = $("#numeros").offset().top - 450;
var anchorExp = $("#exp").offset().top - 500;
var anchorRecruiting = $("#recruiting").offset().top - 500;
var anchorStaffing = $("#staffing").offset().top - 500;
var anchorExpertise = $("#expertise").offset().top - 500;
var anchorClientes = $("#clientes").offset().top - 500;
var anchorContact = $("#contact").offset().top - 500;

var $w = $(window).scroll(function(){

if ( $w.scrollTop() > anchorLogo_color ) { 
    //$('.circ_1').css('display', 'block');
    $('.logo_color').css('visibility', 'visible');
    $('.logo_color').addClass('animated zoomIn');
   }else {

   }

  if ( $w.scrollTop() > anchorSoft ) { 
    //$('.circ_1').css('display', 'block');
    $('.tit_dev_1').css('visibility', 'visible');
    $('.tit_dev_1').addClass('animated bounceInUp');
    $('.tit_dev_2').css('visibility', 'visible');
    $('.tit_dev_2').addClass('animated bounceInUp');
    $('.tit_calidad').css('visibility', 'visible');
    $('.tit_calidad').addClass('animated bounceInUp');
    $('.texto_calidad').css('visibility', 'visible');
    $('.texto_calidad').addClass('animated bounceInUp');
   }else {

   }

   

   if ( $w.scrollTop() > anchorServicios ) { 
     $('.caja_1').css('visibility', 'visible');
     $('.caja_1').addClass('animated bounceInRight');
     $('.caja_2').css('visibility', 'visible');
     $('.caja_2').addClass('animated bounceInRight');
     $('.caja_3').css('visibility', 'visible');
     $('.caja_3').addClass('animated bounceInRight');
      
   }

   if ( $w.scrollTop() > anchorStaff ) { 
     $('.img_staff').css('visibility', 'visible');
    $('.img_staff').addClass('animated fadeInLeft');
    $('.tit_expertise').css('visibility', 'visible');
    $('.tit_expertise').addClass('animated fadeInRight');
    $('.texto_expertise').css('visibility', 'visible');
    $('.texto_expertise').addClass('animated fadeInRight');
      
   }

   if ( $w.scrollTop() > anchorNumeros ) { 
     $('.caja_num_1').css('visibility', 'visible');
    $('.caja_num_1').addClass('animated zoomInDown');
    $('.caja_num_2').css('visibility', 'visible');
    $('.caja_num_2').addClass('animated zoomInDown');
    $('.caja_num_3').css('visibility', 'visible');
    $('.caja_num_3').addClass('animated zoomInDown');
    $('.caja_num_4').css('visibility', 'visible');
    $('.caja_num_4').addClass('animated zoomInDown');
     $('.count').css('visibility', 'visible');
     $('.cero').css('display', 'none');
     contar();
      
   }

      if($(window).width() > 767){

   if ( $w.scrollTop() > anchorExp ) { 
     $('.foto_g_1').css('visibility', 'visible');
    $('.foto_g_1').addClass('animated fadeInUpBig');
    $('.foto_g_2').css('visibility', 'visible');
    $('.foto_g_2').addClass('animated fadeInDownBig');
    $('.texto_experiencia').css('visibility', 'visible');
    $('.texto_experiencia').addClass('animated fadeInRightBig');
    $('.texto_experiencia_2').css('visibility', 'visible');
    $('.texto_experiencia_2').addClass('animated fadeInLeftBig');
      
   }

     }else{

        if ( $w.scrollTop() > anchorExp ) { 
        $('.foto_g_1').css('visibility', 'visible');
        $('.foto_g_1').addClass('animated fadeInLeftBig');
        $('.foto_g_2').css('visibility', 'visible');
        $('.foto_g_2').addClass('animated fadeInRightBig');
        $('.texto_experiencia').css('visibility', 'visible');
        $('.texto_experiencia').addClass('animated fadeInRightBig');
        $('.texto_experiencia_2').css('visibility', 'visible');
        $('.texto_experiencia_2').addClass('animated fadeInLeftBig');
        }
        
     }

   if ( $w.scrollTop() > anchorRecruiting ) { 
        $('.bajada_reclu').css('visibility', 'visible');
        $('.bajada_reclu').addClass('animated fadeIn');
     $('.tit_reclu').css('visibility', 'visible');
    $('.tit_reclu').addClass('animated fadeIn');
    $('.rec_1').css('visibility', 'visible');
    $('.rec_1').addClass('animated fadeInUp');
    $('.rec_2').css('visibility', 'visible');
    $('.rec_2').addClass('animated fadeInUp');
    $('.rec_3').css('visibility', 'visible');
    $('.rec_3').addClass('animated fadeInUp');
    $('.rec_4').css('visibility', 'visible');
    $('.rec_4').addClass('animated fadeInUp');
    $('.rec_5').css('visibility', 'visible');
    $('.rec_5').addClass('animated fadeInUp');
    $('.rec_6').css('visibility', 'visible');
    $('.rec_6').addClass('animated fadeInUp');
      
   }

   if ( $w.scrollTop() > anchorStaffing ) { 
     $('.texto_staffing').css('visibility', 'visible');
    $('.texto_staffing').addClass('animated zoomIn');
    $('.texto_azul_staffing').css('visibility', 'visible');
    $('.texto_azul_staffing').addClass('animated zoomIn');
    $('.check_staffing').css('visibility', 'visible');
    $('.check_staffing').addClass('animated zoomIn');
    $('.img_staffing').css('visibility', 'visible');
    $('.img_staffing').addClass('animated flipInY');
      
   }

   if ( $w.scrollTop() > anchorExpertise ) { 
     $('.tit_banner_expertise').css('visibility', 'visible');
    $('.tit_banner_expertise').addClass('animated fadeIn');
     $('.texto_banner_expertise').css('visibility', 'visible');
    $('.texto_banner_expertise').addClass('animated fadeIn');
    
      
   }

   if ( $w.scrollTop() > anchorClientes ) { 
     $('.clientes_1').css('visibility', 'visible');
    $('.clientes_1').addClass('animated slideInLeft');
     $('.clientes_2').css('visibility', 'visible');
    $('.clientes_2').addClass('animated slideInRight');
        $('.clientes_3').css('visibility', 'visible');
        $('.clientes_3').addClass('animated slideInLeft');
        $('.clientes_4').css('visibility', 'visible');
        $('.clientes_4').addClass('animated slideInRight');
    
      
   }

   if ( $w.scrollTop() > anchorContact ) { 
     $('.formulario').css('visibility', 'visible');
    $('.formulario').addClass('animated bounceIn');
     $('.info_contacto').css('visibility', 'visible');
    $('.info_contacto').addClass('animated bounceIn');
    
      
   }

   
});	

var hola = 'no';
function contar(){
//alert(hola);
if(hola == 'no'){
$('.count').each(function () {
$(this).prop('Counter',0).animate({
  Counter: $(this).text()
}, {
  duration: 2000,
  easing: 'swing',
  step: function (now) {
      $(this).text(Math.ceil(now));
  }
});
});

}
hola = 'si';
}

$('.grecaptcha-badge').css('display','none');

  }
}


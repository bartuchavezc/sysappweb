<?php

  //post recived
  $nombre = $_POST['nombre'];
  $mail = $_POST['mail'];
  $mensaje = $_POST['mensaje'];

  //hardcode
  $destinatario = 'sysappweb@gmail.com';
  $asunto = 'Contacto desde www.sysapppweb.com';

  $carta = "De: $nombre \n";
  $carta .= "Correo: $mail \n";
  $carta .= "Mensaje: $mensaje \n";

  //mostrar en pantalla por si acaso
  //echo "$carta";

  //envio de mail
  mail($destinatario, $asunto, $carta);


  //redirect
  header( 'Location: success_message.html');
 ?>

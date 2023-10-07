<?php

$destinatario = 'alexis@fese.mx';
$nombre = $_POST['nombre'];
$asunto = 'Formulario Rellenado de CERTIFICACIONES : '.$_POST['asunto'];
$email = $_POST['correo'];

$header = "Enviado desde Entidad Certificadora";
$mensaje = "Nombre: ".$nombre."\nEmail: $email \nMensaje:".$_POST['mensaje'];


mail($destinatario, $asunto, $mensaje, $header);


echo"<script>alert('correo enviado exitosamente')</script>";
echo"<script>setTimeout(\"location.href='index.html'\",1000)</script>";

// if($mail){
//     echo "Correo enviado";
//     // sleep(0.1);
//     header("Location: index.html");
// }
// else 
// {
//     // header("Location: index.html");

//     ?>
<!-- //     <script> -->
<!-- //         window.location = "index.html" -->
<!-- //     </script> -->
//     <?php 

// }
//echo "Correo enviado";
//sleep(1);


?>
<?php
$nombre = $_POST['nombre'];
$email = $_POST['correo'];
$asunto = 'Formulario Rellenado de CERTIFICACIONES';
$mensaje = "Nombre: ".$nombre."\nEmail: $email \nMensaje:".$_POST['mensaje'];
$mail = @mail('francisco@fese.mx', $asunto, $mensaje);

if($mail){
    echo "Correo enviado";
    sleep(1);
    header("Location: index.html");
}
else 
{
    header("Location: index.html");
}
//echo "Correo enviado";
//sleep(1);


?>
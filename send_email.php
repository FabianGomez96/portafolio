<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['nombre'];
    $email = $_POST['email'];
    $message = $_POST['mensaje'];

    $to = "ofgomez048@gmail.com";
    $subject = "Mensaje desde tu portafolio";
    $headers = "From: " . $email;

    $fullMessage = "Nombre: $name\nCorreo: $email\n\nMensaje:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        // echo json_encode([
        //     "mensaje" => "Correo enviado con éxito."
        // ]);
        echo "Correo enviado con éxito.";
    } else {
        // echo json_encode([
        //     "mensaje" => "Hubo un error al enviar el correo."
        // ]);
        echo "Hubo un error al enviar el correo.";
    }
}
?>

<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail ->CharSet ="UTF-8";

    $mail->setFrom('janea.rosculet@mail.ru', 'ivpret')
    // mail to
    $mail->addAddress("chironda.98@mail.ru", );

    // tema
    $mail->Subject = "Wedding 09.08.2024";

    $body.='<p>Numele Prenumele: '.$_POST['name'].'</p>';
    $body.='<p>Numele Prenumele: '.$_POST['person'].'</p>';
    $body.='<p>Numele Prenumele: '.$_POST['child'].'</p>';
    $body.='<p>Numele Prenumele: '.$_POST['message'].'</p>';

    $mail->Body = $body;

    if(!$mail->send()){
        $message = "Error";
    }else {
        $message = "Succes!! ";
    }

    $response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    
    ?>
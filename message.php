<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            $reciever = "bismasuryamahendra@gmail.com"; //email receiver email address 
            $subject = "From: $name <$email>";
            $body = "Name: $name\nEmail: $email\n Phone: $phone\n website: $website\n $message\n\nRegards,\n $name";
            $sender = "From: $email"; //sender email
            if(mail($reciever, $subject, $body, $sender)){ //mail() is a inbuilt php function to send mail
                echo "Your message has been sent!";
            } else {
                echo "Sorry, failed send your message!";
            }
        }else{
            echo "Enter a valid email address!";
        }
    }else{
        echo "Email and Password field is required!"; 
    }  
?>
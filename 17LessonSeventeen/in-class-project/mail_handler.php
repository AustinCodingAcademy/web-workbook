<?php
    $to = "harrywada@gmail.com";
    $from = $_POST['email'];
    $name_first = $_POST['name_first'];
    $name_last = $_POST['name_last'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name_first . " " . $name_last . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name_first . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name_first . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
?>

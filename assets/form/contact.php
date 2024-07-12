<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $issueType = $_POST["issue_type"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = ""; 

    // Set subject
    $subject = "New Contact Form Submission";

    // Build the email message
    $messageBody = "Name: $name\n";
    $messageBody .= "Phone: $phone\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Type of Issue: $issueType\n";
    $messageBody .= "Message:\n$message";

    // Additional headers
    $headers = "From: $email";

    // Attempt to send the email
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>

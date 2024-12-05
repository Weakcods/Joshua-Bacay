<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// Check if it's a POST request
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo "Method not allowed";
    exit;
}

// Validate required fields
if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])) {
    http_response_code(400);
    echo "All fields are required";
    exit;
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Invalid email format";
    exit;
}

// Retrieve form data
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'bacayjhoshuajm@gmail.com';
    $mail->Password = 'gcghhjghf012003';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    //Recipients
    $mail->setFrom('bacayjhoshuajm@gmail.com', 'Contact Form'); // Set a fixed from address
    $mail->addReplyTo($email, $name); // Add reply-to with the sender's email
    $mail->addAddress('bacayjhoshuajm@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();
    http_response_code(200);
    echo "Message sent successfully!";
} catch (Exception $e) {
    http_response_code(500);
    echo "Failed to send message. Error: " . $mail->ErrorInfo;
}
?>
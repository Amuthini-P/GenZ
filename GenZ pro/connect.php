<?php
// Start session if needed
session_start();

// Get POST values
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Basic validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !$password) {
    echo "Please enter a valid email and password.";
    exit;
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Connect to the database
$conn = new mysqli("localhost", "root", "", "GenZDB");
if ($conn->connect_error) {
    echo "Connection Failed: " . $conn->connect_error;
    exit;
}

// Insert into table
$stmt = $conn->prepare("INSERT INTO loginInformation (Email, Password) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $hashedPassword);

$execval = $stmt->execute();

if ($execval) {
    echo "success";
} else {
    // If email already exists, return user-friendly message
    if ($conn->errno === 1062) {
        echo "Email is already registered.";
    } else {
        echo "Error: " . $stmt->error;
    }
}

$stmt->close();
$conn->close();
?>
<?php
// Database config


// Connect
$conn = new mysqli("localhost","root","","GenZDB");
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

// Sanitize POST input
$name   = trim($_POST['name'] ?? '');
$sector = trim($_POST['sector'] ?? '');
$idea   = trim($_POST['idea'] ?? '');

if ($name === '' || $sector === '' || $idea === '') {
    echo "All fields are required.";
    exit;
}

// Prepare and insert
$stmt = $conn->prepare("INSERT INTO Ideas (Name, Sector, Idea) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $sector, $idea);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "Failed to submit idea.";
}

$stmt->close();
$conn->close();
?>

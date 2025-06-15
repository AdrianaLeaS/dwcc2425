<?php
session_start();
header("Content-Type: application/json");

$usuarios = [
    "admin" => "1234",
    "usuario" => "1234"
];

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'] ?? '';
$password = $data['password'] ?? '';

if (isset($usuarios[$username]) && $usuarios[$username] === $password) {
    $_SESSION['user'] = $username;
    $_SESSION['role'] = $username === 'admin' ? 'admin' : 'user'; // Rol baseado no nome de usuario

    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}

// A resposta é un JSON que indica se a autenticación foi exitosa ou non
// Se a autenticación foi exitosa, se establece a sesión do usuario
// Se a autenticación fallou, se devolve un JSON indicando o erro
 

?>


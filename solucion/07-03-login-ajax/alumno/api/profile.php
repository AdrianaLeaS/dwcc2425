<?php
// api/profile.php
header("Content-Type: application/json");

// Verificar se a sesión está activa
session_start();
if (!isset($_SESSION['user'])) {
    echo json_encode(["error" => "Non autenticado"]);
    http_response_code(401);
    exit;
}

// Procesar a petición POST
$input = json_decode(file_get_contents("php://input"), true);
if ($input['action'] === "get_profile") {
    // Exemplo de datos do perfil
    if ($_SESSION['user'] === 'admin') {
        $response = [
            "role" => "admin",
            "name" => "Administrador",
            "email" => "admin@exemplo.com",
            "permissions" => ["manage_users", "edit_content", "view_reports"],
            "registered_since" => "2020-01-01"
        ];
    } elseif ($_SESSION['user'] === 'usuario') {
        $response = [
            "role" => "user",
            "name" => "Usuario Exemplo",
            "email" => "usuario@exemplo.com",
            "registered_since" => "2023-01-01"
        ];
    } else {
        $response = [
            "error" => "Rol descoñecido"
        ];
        http_response_code(403);
    }
    echo json_encode($response);
} else {
    echo json_encode(["error" => "Acción non válida"]);
    http_response_code(400);
}
?>
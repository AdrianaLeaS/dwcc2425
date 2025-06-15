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
    $response = [];
 
    $response = '[
        {
            "id_tarefa": 1,
            "titulo": "Estudar para o exame de Matemáticas",
            "descripcion": "Revisar os capítulos 3 e 4 do libro.",
            "prioridade": "Alta",
            "data_limite": "2025-04-15"
        },
        {
            "id_tarefa": 2,
            "titulo": "Completar o proxecto de Historia",
            "descripcion": "Preparar unha presentación sobre a Revolución Industrial.",
            "prioridade": "Media",
            "data_limite": "2025-04-20"
        },
        {
            "id_tarefa": 3,
            "titulo": "Enviar o traballo de Inglés",
            "descripcion": "Escribir un ensaio sobre o impacto da tecnoloxía.",
            "prioridade": "Baixa",
            "data_limite": "2025-04-25"
        },
        {
            "id_tarefa": 4,
            "titulo": "Preparar a exposición de Ciencias",
            "descripcion": "Facer un modelo do sistema solar.",
            "prioridade": "Alta",
            "data_limite": "2025-04-30"
        },
        {
            "id_tarefa": 5,
            "titulo": "Revisar para o exame de Historia",
            "descripcion": "Estudar os principais eventos da Segunda Guerra Mundial.",
            "prioridade": "Media",
            "data_limite": "2025-05-05"
        },
        {
            "id_tarefa": 6,
            "titulo": "Fazer o traballo de Arte",
            "descripcion": "Crear unha pintura inspirada na obra de Van Gogh.",
            "prioridade": "Baixa",
            "data_limite": "2025-05-10"
        },
        {
            "id_tarefa": 7,
            "titulo": "Completar a tarefa de Educación Física",
            "descripcion": "Practicar para a competición de atletismo.",
            "prioridade": "Alta",
            "data_limite": "2025-05-15"
        },
        {
            "id_tarefa": 8,
            "titulo": "Enviar o traballo de Filosofía",
            "descripcion": "Escribir un ensaio sobre a ética de Aristóteles.",
            "prioridade": "Media",
            "data_limite": "2025-05-20"
        }
    ]';
 

     
    echo json_encode($response);

?>
<?php

sleep(1);

function filtrarCampo($campo,$especie, $lista){
    $resultado = array();
 
    if (empty($especie)) {
         return $lista;
    }

    foreach ($lista as $valor) {
        if ( ($valor[$campo] == $especie)) {
            array_push($resultado, $valor);

        } else {
           // Nada que facer
        }
    }
    return $resultado;
}

function filtrarCampoLike($campo,$especie, $lista){
    $resultado = array();
    foreach ($lista as $valor) {
        if (str_contains($valor[$campo], $especie)) {
        //if ($valor[$campo] == $especie) {
            array_push($resultado, $valor);

        } else {
           // Nada que facer
        }
    }
    return $resultado;
}
 


$data = file_get_contents('datos.json');
$json = json_decode($data, true);
$listaFiltrada = $json["pescafresca"]["detalle"];

//Filtramos request
foreach($_REQUEST as $key => $val)
{
    if (isset($_REQUEST[$key])) {
       
        $listaFiltrada = filtrarCampo($key,$val,$listaFiltrada);
    }
}


header('Content-Type: application/json');
echo json_encode($listaFiltrada);


?>
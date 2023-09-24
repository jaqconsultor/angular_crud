<?php
include('../header.php');
include('../config.php');

    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
if($nombre!=""){
    $sqlEmpleaados = mysqli_query($conexionBD,"INSERT INTO formato_archivo(nombre) VALUES('".$nombre."') ");
    echo json_encode(["success"=>1]);
    }
    exit();

?>

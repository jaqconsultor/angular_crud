<?php
include('../header.php');
include('../config.php');

$data = json_decode(file_get_contents("php://input"));

$id=$_GET["id"];
$nombre=$data->nombre;

$sqlEmpleaados = mysqli_query($conexionBD,"UPDATE formato_archivo SET nombre='$nombre' WHERE id='$id'");
echo json_encode(["success"=>1]);
exit();

?>

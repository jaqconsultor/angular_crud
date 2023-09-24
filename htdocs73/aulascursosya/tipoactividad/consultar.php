<?php
include('../header.php');
include('../config.php');

$sqlEmpleaados = mysqli_query($conexionBD,"SELECT * FROM temas WHERE id = ".$_GET["id"]);
if(mysqli_num_rows($sqlEmpleaados) > 0){
	$empleaados = mysqli_fetch_all($sqlEmpleaados,MYSQLI_ASSOC);
	echo json_encode($empleaados);
	exit();
}
else{  echo json_encode(["success"=>0]); }

?>

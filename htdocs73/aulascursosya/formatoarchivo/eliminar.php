<?php
include('../header.php');
include('../config.php');

$sqlEmpleaados = mysqli_query($conexionBD,"DELETE FROM formato_archivo WHERE id=".$_GET["id"]);
if($sqlEmpleaados){
	echo json_encode(["success"=>1]);
	exit();
}
else{  echo json_encode(["success"=>0]); }

?>

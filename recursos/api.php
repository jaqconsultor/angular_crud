<?php
include("api_header.php");
include("db_config.php");

$valor = "";
$tabla = "";

if( isset( $_GET["acc"] )) {
    $valor = $_GET["acc"];
}

if( isset( $_GET["tab"] )) {
    $tabla = $_GET["tab"];
}

switch ($valor) {

    case "scr":
		
        $sqlEmpleaados = mysqli_query($conexionBD, "SELECT * FROM " . $tabla);
        //if (mysqli_num_rows($sqlEmpleaados) > 0) {
            $empleaados = mysqli_fetch_all($sqlEmpleaados, MYSQLI_ASSOC);
            echo json_encode($empleaados);
        //} else {
        //    echo json_encode([["success" => 0]]);
        //}
        break;

    case "agr":
        $data = json_decode(file_get_contents("php://input"));
        
		$nombre = $data->nombre;
		
        $sqlEmpleaados = mysqli_query($conexionBD, "INSERT INTO empleados(nombre) VALUES('$nombre') ");
        echo json_encode(["success" => $nombre]);
        break;

    case "con":
        $sqlEmpleaados = mysqli_query($conexionBD, "SELECT * FROM empleados WHERE id = " . $_GET["id"]);
        if (mysqli_num_rows($sqlEmpleaados) > 0) {
            $empleaados = mysqli_fetch_all($sqlEmpleaados, MYSQLI_ASSOC);
            echo json_encode($empleaados);
            exit();
        } else {
            echo json_encode(["success" => 0]);
        }
        break;

    case "mod":
        $data = json_decode(file_get_contents("php://input"));
		
        $id = $_GET["id"];
        $nombre = $data->nombre;
		
        $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE empleados SET nombre='$nombre' WHERE id='$id'");
        echo json_encode(["success" => 1]);
        break;

    case "eli":
        $sqlEmpleaados = mysqli_query($conexionBD, "DELETE FROM empleados WHERE id=" . $_GET["id"]);
        if ($sqlEmpleaados) {
            echo json_encode(["success" => 1]);
            exit();
        } else {
            echo json_encode(["success" => 0]);
        }
        break;

    case "act":
        $data = json_decode(file_get_contents("php://input"));
        $id = $_GET["id"];
        $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE empleados SET in_activo='1' WHERE id='$id'");
        echo json_encode(["success" => 1]);
        break;

    case "inc":
        $data = json_decode(file_get_contents("php://input"));
        $id = $_GET["id"];
        $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE empleados SET in_activo='0' WHERE id='$id'");
        echo json_encode(["success" => 1]);
        break;

    case "adm":
        $data = json_decode(file_get_contents("php://input"));
        $id = $_GET["id"];
        $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE empleados SET in_admin='1' WHERE id='$id'");
        echo json_encode(["success" => 1]);
        break;

    case "nor":
        $data = json_decode(file_get_contents("php://input"));
        $id = $_GET["id"];
        $sqlEmpleaados = mysqli_query($conexionBD, "UPDATE empleados SET in_admin='0' WHERE id='$id'");
        echo json_encode(["success" => 1]);
        break;


    default:
        echo json_encode([["success" => -1, "error" => "No realizo ninguna acción"]]);
        break;
}
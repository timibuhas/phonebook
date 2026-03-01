<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

$group_id = $data['id'];

$sql="DELETE FROM contacte_grupuri WHERE Group_ID=$group_id";
mysqli_query($conn, $sql);

$sql="DELETE FROM grupuri WHERE ID=$group_id";
mysqli_query($conn, $sql);

?>

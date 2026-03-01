<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

$contact_id = $data['contact_id'];
$group_id = $data['group_id'];

$sql="DELETE FROM contacte_grupuri WHERE contacte_grupuri.Contact_ID = $contact_id AND contacte_grupuri.Group_ID=$group_id";

mysqli_query($conn, $sql);

?>

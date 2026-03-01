<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['nume']))
{
  $nume = $data['nume'];

  $sql="INSERT INTO Grupuri (Nume) Values ('$nume')";
  mysqli_query($conn,$sql);

}
else{
  echo "Eroare";
}

?>

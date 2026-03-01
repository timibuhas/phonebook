<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['id'],$data['nume'],$data['prenume'],$data['nr_telefon'],$data['adresa']))
{
  $id=$data['id'];
  $nume = $data['nume'];
  $prenume = $data['prenume'];
  $nr_telefon = $data['nr_telefon'];
  $adresa = $data['adresa'];

  $sql="UPDATE Contacte SET Nume='$nume', Prenume='$prenume', Nr_telefon='$nr_telefon', Adresa='$adresa' WHERE ID = $id";
  mysqli_query($conn,$sql);

}
else {
  echo 'Error';
}

?>

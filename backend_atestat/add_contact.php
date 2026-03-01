<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['nume'],$data['prenume'],$data['nr_telefon'],$data['adresa']))
{
  $nume = $data['nume'];
  $prenume = $data['prenume'];
  $nr_telefon = $data['nr_telefon'];
  $adresa = $data['adresa'];

  $sql="INSERT INTO Contacte (Nume,Prenume,Nr_telefon,Adresa) Values ('$nume','$prenume','$nr_telefon','$adresa')";
  mysqli_query($conn,$sql);

}
else{
  echo "Eroare";
}

?>

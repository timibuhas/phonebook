<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql="SELECT * FROM Contacte";
$query=mysqli_query($conn,$sql);
$list=array();

while ($res = mysqli_fetch_array($query)){

$list[] = array("id"=>$res['ID'],"nume"=> $res['Nume'], "prenume"=> $res['Prenume'], "nr_telefon"=> $res['Nr_telefon'], "adresa"=> $res['Adresa']);

}
echo json_encode($list);


?>

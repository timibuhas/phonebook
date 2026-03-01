<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$sql="SELECT * FROM grupuri";
$query=mysqli_query($conn,$sql);
$grupuri=array();
$contacte=array();
while ($res = mysqli_fetch_array($query)){
$grupuri[] = array("id"=>$res['ID'],"nume"=> $res['Nume'],"contacte"=>array());
}

foreach($grupuri as &$grup){

  $id= $grup['id'];
  $sql = "SELECT * FROM contacte where contacte.ID IN (SELECT contacte_grupuri.Contact_ID FROM contacte_grupuri WHERE contacte_grupuri.Group_ID=$id )";
  $query = mysqli_query($conn, $sql);

  while ($res = mysqli_fetch_array($query)){
    array_push($grup['contacte'], array("id"=>$res['ID'],"nume"=>$res['Nume'],"prenume"=>$res['Prenume'],"nr_telefon"=>$res['Nr_telefon'],"adresa"=>$res['Adresa']));
  }

}

echo json_encode($grupuri);

?>

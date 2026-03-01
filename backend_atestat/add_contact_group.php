<?php include('db_connection.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type:application/json");

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['contact_id'],$data['group_id']))
{
  $contact_id = $data['contact_id'];
  $group_id = $data['group_id'];

  $sql="INSERT INTO contacte_grupuri (Contact_ID,Group_ID) Values ('$contact_id','$group_id')";
  mysqli_query($conn,$sql);

}
else{
  echo "Eroare";
}

?>

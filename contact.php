<html>
<body>
<?php
// define variables and set to empty values
$name = $email = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $message = test_input($_POST["message"]);  
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>

<?php
// the message
$msg = $name . "\n" . $email . "\n" . $message;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("fasfora@gmail.com","Contact from Webpage",$msg);
?>

Welcome <?php echo $name; ?><br>
Your email address is: <?php echo $email; ?><br>
Your message is: <?php echo $msg; ?>

</body>
</html>
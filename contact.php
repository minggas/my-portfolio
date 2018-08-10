<html>
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="canonical" href="https://minggas.website">
    <link rel="manifest" href="manifest.json">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="description" content="I'm a Front End Developer from Brazil. Here you can find informations about me and my projects.">
    <title>Minggas Webpage | Front End Developer</title>
    <meta property="og:title" content="Minggas Webpage | Front End Developer">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://minggas.website">
    <meta property="og:image" content="http://www.adhamdannaway.com/wp-content/themes/dannaway/images/portfolio/campaign-monitor-4/main.jpg">
    <meta property="og:image:width" content="590">
    <meta property="og:image:height" content="440">
    <meta property="og:site_name" content="Minggas Webpage">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description" content="I'm a Front End Developer from Brazil. Here you can find informations about me and my projects.">
    <meta name="twitter:title" content="Minggas Webpage | Front End Developer">
    <meta name="twitter:site" content="@minggasweb">
    <meta name="twitter:creator" content="@minggasweb">
    <link rel="stylesheet" href="css/main1.css">
  </head>
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
<nav class="nav-bar" id="navbar">
        <div class="nav-logo">
            <span>MINGGAS</span>
        </div>
        <div class="nav-toggler">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>
        
    </nav>
    <section class="tagline" style="height:100vh;">
      <h2>Thanks for your contact, <?php echo $name; ?>!</h2>
      <br/>
      <span>Back to the <a href="https://minggas.website" style="color:#64fcf2">site</a></span>
    </section>        
</body>
</html>
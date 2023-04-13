<?php
for ($i=5; $i<=15; $i++) {
  echo $i . "<br>";
}
?>

<?php
$message = "Hello World";
echo $message;
?>

<?php
$marks = 85;

if ($marks >= 90) {
  echo "A+";
} elseif ($marks >= 80) {
  echo "A";
} elseif ($marks >= 70) {
  echo "B";
} elseif ($marks >= 60) {
  echo "C";
} else {
  echo "Fail";
}
?>


<?php
$num = 5;
$factorial = 1;

for ($i=1; $i<=$num; $i++) {
  $factorial *= $i;
}

echo "Factorial of $num is: $factorial";
?>

<?php
for ($i=1; $i<=5; $i++) {
  for ($j=1; $j<=$i; $j++) {
    echo "* ";
  }
  echo "<br>";
}
?>

<?php
$list = array( 
  "Italy"=>"Rome", 
  "Luxembourg"=>"Luxembourg", 
  "Belgium"=> "Brussels", 
  "Denmark"=>"Copenhagen", 
  "Finland"=>"Helsinki", 
  "France" => "Paris", 
  "Slovakia"=>"Bratislava", 
  "Slovenia"=>"Ljubljana", 
  "Germany" => "Berlin", 
  "Greece" => "Athens", 
  "Ireland"=>"Dublin", 
  "Netherlands"=>"Amsterdam", 
  "Portugal"=>"Lisbon", 
  "Spain"=>"Madrid", 
  "Sweden"=>"Stockholm", 
  "United Kingdom"=>"London", 
  "Cyprus"=>"Nicosia", 
  "Lithuania"=>"Vilnius", 
  "Czech Republic"=>"Prague", 
  "Estonia"=>"Tallin", 
  "Hungary"=>"Budapest", 
  "Latvia"=>"Riga", 
  "Malta"=>"Valetta", 
  "Austria")




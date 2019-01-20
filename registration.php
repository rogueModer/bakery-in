<?php 

    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $uname = $_POST['username'];
    $pass = $_POST['password'];

    $dbc = mysqli_connect('localhost', 'root', 'Arush @123', 'trendyshop');

    $query = "INSERT INTO trendyusers(`firstname`, `lastname`, `username`, `password`) VALUES ('$fname', '$lname', '$uname', SHA('$pass'));";
    mysqli_query($dbc, $query);
    mysqli_close($dbc);

    echo "Your acccount created Successfully. <br>";
    echo "<a href='index.html'>" . "Go To Home" . "</a>";

 ?>
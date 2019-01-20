<?php 

    $username = $_REQUEST['emailId'];

    $dbc = mysqli_connect('localhost', 'root', 'Arush @123', 'trendyshop') or die('Something goes wrong.');

    $query = "SELECT username FROM trendyusers WhERE username = '$username';";

    $result = mysqli_query($dbc, $query);


    if (mysqli_num_rows($result) == 0) {
        sleep(1);
        echo 'unexist';
    }
    else{
        sleep(1);
        echo 'exist';
        mysqli_close($dbc);
    }











 ?>
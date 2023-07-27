<?php

$dbc = mysqli_connect('localhost', 'root', '', 'guardian_db'); //адрес сервера (хост), имя пользователя, пароль пользователя, имя БД

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$email = $data['email'];
$gaming_platform = $data['gaming_platform'];

$query = "INSERT INTO guardian_db (name, email, gaming_platform)
          VALUES ('$name', '$email', '$gaming_platform')"; 

$result = mysqli_query($dbc, $query);

http_response_code('201'); // 201-created(выполнен успешно)
header('Content-type: application/json'); //Чтобы читалось как json
print json_encode(array('message' => 'Feedback has been sent'));

mysqli_close($dbc);
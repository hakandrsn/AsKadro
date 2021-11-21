<?php

$name = $_POST['name'];

echo json_encode([
    'text' => 'Yazdığınız cevap = ' . $name
]);
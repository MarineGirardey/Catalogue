<?php
header('Content-Type: application/json');
$json = file_get_contents("products/products.json");
$data = json_decode($json, true);
echo json_encode($data);

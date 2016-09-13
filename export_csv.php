<?php
// include database and object files
include_once 'config/database.php';
include_once 'objects/product.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

header("Content-type: text/x-csv");
header("Content-Disposition: attachment; filename=all_products_" . date('Y-m-d_H-i-s') . ".csv");
echo $product->export_CSV();
?>

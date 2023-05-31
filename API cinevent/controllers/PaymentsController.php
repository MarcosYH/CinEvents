<?php

require_once('core/database.php');
require_once('models/PaymentsModel.php');

$database = new Database();
$dbh = $database->getDBConnection();

$paymentModel = new PaymentsModel($dbh);

// GET all payments
function getAllPayments() {
    global $paymentModel;
    $payments = $paymentModel->getAllPayments();
    echo json_encode($payments);
}

// GET payment by ID
function getPaymentById() {
    global $paymentModel;
    $id = $_GET['id'];
    $payment = $paymentModel->getPayment($id);
    echo json_encode($payment);
}


?>

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

// POST add payment
function addPayment() {
    global $paymentModel;
    $data = json_decode(file_get_contents('php://input'), true);
    $paymentModel->addPayment($data);
}

// PUT update payment
function updatePayment() {
    global $paymentModel;
    $id = $_GET['id'];
    $data = json_decode(file_get_contents('php://input'), true);
    $paymentModel->updatePayment($id, $data);
}

// DELETE delete payment
function deletePayment() {
    global $paymentModel;
    $id = $_GET['id'];
    $paymentModel->deletePayment($id);
}

?>

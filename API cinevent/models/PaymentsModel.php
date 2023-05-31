<?php

require_once('core/database.php');

class PaymentsModel {
    private $dbh;

    public function __construct($dbh) {
        $this->dbh = $dbh;
    }
    public function getAllPayments() {
        // Logic to fetch all payments from the database
        // Use $this->dbh to execute the appropriate SQL query and fetch the results
    }

    public function getPayment($id) {
        // Logic to fetch a specific payment based on ID from the database
        // Use $this->dbh to execute the appropriate SQL query and fetch the result
    }

    // Other methods for CRUD operations related to payments (add, update, delete, etc.)
}

?>

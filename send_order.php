<?php
header('Content-Type: text/plain; charset=utf-8');  

// Replace Umlauts and special characters with ASCII equivalents
function replaceUmlauts($text) {
    $umlauts = [
        'ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 
        'Ä' => 'Ae', 'Ö' => 'Oe', 'Ü' => 'Ue', 
        'ß' => 'ss'
    ];
    return str_replace(array_keys($umlauts), array_values($umlauts), $text);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = replaceUmlauts(htmlspecialchars($_POST["name"]));
    $email = replaceUmlauts(htmlspecialchars($_POST["contact"]));
    $orderType = replaceUmlauts(htmlspecialchars($_POST["orderType"]));
    $address = isset($_POST["address"]) ? replaceUmlauts(htmlspecialchars($_POST["address"])) : "Keine Adresse (Abholung)";
    $message = isset($_POST["message"]) && $_POST["message"] !== '' ? replaceUmlauts(htmlspecialchars($_POST["message"])) : "Keine Nachricht angegeben.";
    $order = json_decode($_POST["order"], true);

    $ownerEmail = "info@menzu.ch";
    //$ownerEmail = "matteo.jakob@gmail.com";
    $subject = "Neue Bestellung von " . replaceUmlauts($name);

    // Message for the owner
    $bodyOwner = "Vorname und Nachname: $name\n";
    $bodyOwner .= "Email: $email\n";
    $bodyOwner .= "Bestellart: $orderType\n";
    $bodyOwner .= "Adresse: $address\n";
    $bodyOwner .= "Nachricht: $message\n\n";
    $bodyOwner .= "Bestelluebersicht:\n";

    foreach ($order as $key => $item) {
        $itemName = isset($item['name']) ? replaceUmlauts($item['name']) : replaceUmlauts($key);
        $quantity = isset($item['quantity']) ? $item['quantity'] : 0;
        $price = isset($item['price']) ? $item['price'] : 0.0;

        $bodyOwner .= "$itemName x$quantity - CHF " . number_format($price * $quantity, 2) . "\n";
    }

    if (isset($_POST["totalCost"])) {
        $totalCost = number_format((float)$_POST["totalCost"], 2);
        $bodyOwner .= "\nTotale Kosten exkl. Lieferung: CHF $totalCost\n";
    }

    // Stellen Sie sicher, dass das orders-Verzeichnis existiert
    $ordersDir = 'orders';
    if (!is_dir($ordersDir)) {
        mkdir($ordersDir, 0755, true);
    }

    $token = uniqid();
    $statusFile = $ordersDir . '/' . $token . '.json';

    $orderDetails = [
        'status' => 'pending',
        'name' => $name,
        'email' => $email,
        'order' => $order,
        'totalCost' => $totalCost
    ];
    file_put_contents($statusFile, json_encode($orderDetails));

    $acceptLink = "http://menzu-pizza.ch/accept_order.php?token=$token";

    $bodyOwner .= "\n\nBitte akzeptieren Sie die Bestellung:\n";
    $bodyOwner .= "Akzeptieren: $acceptLink\n";

    $headers = "From: $ownerEmail\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email to owner
    $emailToOwner = mail($ownerEmail, $subject, $bodyOwner, $headers);

    // Message for the customer
    $bodyCustomer = "Hallo $name,\n\n";
    $bodyCustomer .= "Vielen Dank fuer Ihre Bestellung bei Menzu. Hier sind Ihre Bestelldetails:\n\n";
    $bodyCustomer .= "Bestellart: $orderType\n";
    $bodyCustomer .= "Adresse: $address\n";
    $bodyCustomer .= "Nachricht: $message\n\n";
    $bodyCustomer .= "Bestelluebersicht:\n";

    foreach ($order as $key => $item) {
        $itemName = isset($item['name']) ? replaceUmlauts($item['name']) : replaceUmlauts($key);
        $quantity = isset($item['quantity']) ? $item['quantity'] : 0;
        $price = isset($item['price']) ? $item['price'] : 0.0;

        $bodyCustomer .= "$itemName x$quantity - CHF " . number_format($price * $quantity, 2) . "\n";
    }

    if (isset($_POST["totalCost"])) {
        $bodyCustomer .= "\nTotale Kosten exkl. Lieferung: CHF $totalCost\n";
    }

    $bodyCustomer .= "\n\nWir werden Sie kontaktieren, sobald Ihre Bestellung bestaetigt wurde.\n";
    $bodyCustomer .= "Mit freundlichen Gruessen,\nMenzu";

    // Send email to customer
    $emailToCustomer = mail($email, "Bestellbestaetigung von Menzu", $bodyCustomer, $headers);

    // Success message
    if ($emailToOwner && $emailToCustomer) {
        echo "Bestellung erfolgreich gesendet und Bestaetigung an den Kaeufer verschickt.";
    } else {
        echo "Fehler beim Senden der Bestellung oder Bestaetigung.";
    }
}
?>
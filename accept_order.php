<?php
// HTML-Header hinzufügen
echo '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestellbestätigung</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .message {
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
            font-size: 1.2em;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .warning {
            background-color: #fff3cd;
            color: #856404;
            border: 1px solid #ffeeba;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Bestellstatus</h1>';

if (isset($_GET['token'])) {
    $token = htmlspecialchars($_GET['token']);
    $statusFile = 'orders/' . $token . '.json';
    
    if (file_exists($statusFile)) {
        // Lese die Bestelldetails aus der JSON-Datei
        $orderDetails = json_decode(file_get_contents($statusFile), true);
        
        if ($orderDetails['status'] !== 'accepted') {
            // Aktualisiere den Bestellstatus auf 'accepted'
            $orderDetails['status'] = 'accepted';
            file_put_contents($statusFile, json_encode($orderDetails));
            
            echo '<div class="message success">
                    <h2>Bestellung angenommen!</h2>
                    <p>Die Bestellung wurde erfolgreich angenommen.</p>
                  </div>';

            // Sende Bestätigungs-E-Mail an den Kunden
            $name = $orderDetails['name'];
            $email = $orderDetails['email'];
            $customerSubject = "Ihre Bestellung wurde angenommen";
            $customerBody = "Hallo $name,\n\nIhre Bestellung wurde von uns angenommen. Vielen Dank, dass Sie bei uns bestellt haben!";
            $customerHeaders = "From: matteo.jakob@gmail.com";
            mail($email, $customerSubject, $customerBody, $customerHeaders);
        } else {
            echo '<div class="message warning">
                    <h2>Hinweis</h2>
                    <p>Die Bestellung wurde bereits angenommen.</p>
                  </div>';
        }
    } else {
        echo '<div class="message error">
                <h2>Fehler!</h2>
                <p>Ungültiges Token oder Bestellung nicht gefunden.</p>
              </div>';
    }
} else {
    echo '<div class="message error">
            <h2>Fehler!</h2>
            <p>Kein Token angegeben.</p>
          </div>';
}

// HTML-Footer hinzufügen
echo '</body>
</html>';
?>
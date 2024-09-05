<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gracias por tu Compra</title>
</head>
<body>
    <?php
    // Obtener los datos enviados por la redirección
    $nombre = htmlspecialchars($_GET['nombre']);
    $producto = htmlspecialchars($_GET['producto']);
    $cantidad = htmlspecialchars($_GET['cantidad']);
    ?>

    <h1>Gracias por tu Compra, <?php echo $nombre; ?>!</h1>
    <p>Has comprado <?php echo $cantidad; ?> unidades de <?php echo $producto; ?>.</p>
    <p>¡Te agradecemos por tu compra y esperamos que disfrutes tu producto!</p>
</body>
</html>

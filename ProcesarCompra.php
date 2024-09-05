<?php
// Procesar los datos del formulario
$nombre = $_POST['nombre'];
$producto = $_POST['producto'];
$cantidad = $_POST['cantidad'];



// Redirigir a la página de agradecimiento 
header('Location: Agradecimiento.php?nombre= '. urlencode($nombre) . '&producto=' . urlencode($producto) . '&cantidad=' . urlencode($cantidad));
exit();
?>

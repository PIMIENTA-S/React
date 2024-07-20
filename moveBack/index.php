<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Efecto de Seguimiento del Cursor</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        .background {
            transition: transform 0.1s ease;
        }
    </style>
</head>
<body>
    <main class="overflow-hidden h-screen relative">
        <div class="background absolute top-0 left-0 w-full h-full bg-cover bg-center" style="background-image: url('imagen.jpg');"></div>
        <div class="relative z-10 bg-white bg-opacity-80 p-8 m-8">
            <h1 class="text-4xl font-bold mb-4">Contenido Principal</h1>
            <p>Este es un ejemplo de contenido con efecto de seguimiento del cursor.</p>
        </div>
    </main>
    <div class="bg-green-900 text-white h-48 flex justify-center">
        <span class="my-auto">Copyright PIMIENTA</span>
    </div>
    <script src="script.js"></script>
</body>
</html>

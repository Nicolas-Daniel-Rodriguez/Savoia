document.getElementById("addToCartBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe o la página se recargue

    var product = document.getElementById("productName").textContent;
    var price = document.getElementById("productPrice").textContent;
    var code = document.getElementById("productCode").textContent;
    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;
    var quantity = document.querySelector('input[type="number"]').value;

    var message = `Hola, me gustaría comprar el siguiente producto:
Código de Producto: ${code}
Producto: ${product}
Color: ${color}
Talle: ${size}
Cantidad: ${quantity}
Precio Unitario: ${price}`;

    var whatsappLink = `https://wa.me/5492215599179?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
});

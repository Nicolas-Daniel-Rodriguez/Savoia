document.addEventListener("DOMContentLoaded", function () {
  // Función para obtener parámetros de la URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Obtén el ID del producto desde la URL
  const productId = getQueryParam("id");
  console.log("Product ID:", productId); // Verifica que el ID esté siendo recuperado correctamente

  // Cargar el archivo JSON
  fetch("products.json") // Asegúrate de que la ruta al archivo JSON sea correcta
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data:", data); // Verifica los datos que se están recibiendo
      const index = parseInt(productId, 10) - 1;
      console.log("Product Index:", index); // Verifica el índice calculado

      if (index >= 0 && index < data.length) {
        const product = data[index];
        document.getElementById("productName").textContent = product.name;
        document.getElementById(
          "productPrice"
        ).innerHTML = `<sup>$</sup>${product.price.toFixed(2)}`;
        document.getElementById("productCode").textContent = product.code;
        document.getElementById("productDescription").textContent =
          product.description;
        document.getElementById("productAvailability").textContent =
          product.availability;

        // Imágenes
        const imageContainer = document.getElementById("slider-images");
        imageContainer.innerHTML = ""; // Limpia cualquier imagen existente
        product.images.forEach((imageUrl, index) => {
          const imgContainer = document.createElement("div");
          imgContainer.className = "slider-img-container";

          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = `Imagen del producto ${index + 1}`;
          img.className = "slider-item";

          if (index === 0) {
            img.classList.add("active"); // Añade la clase 'active' a la primera imagen
          }

          imgContainer.appendChild(img);
          imageContainer.appendChild(imgContainer);
        });

        // Colores
        const colorSelect = document.getElementById("color");
        colorSelect.innerHTML = "";
        product.colors.forEach((color) => {
          const option = document.createElement("option");
          option.value = color;
          option.textContent = color;
          colorSelect.appendChild(option);
        });

        // Tallas
        const sizeSelect = document.getElementById("size");
        sizeSelect.innerHTML = "";
        product.sizes.forEach((size) => {
          const option = document.createElement("option");
          option.value = size;
          option.textContent = size;
          sizeSelect.appendChild(option);
        });
      } else {
        console.error("Producto no encontrado. Índice fuera de rango.");
      }

      // Adición para generar la lista de productos en el índice
      const productList = document.getElementById("product-list");
      if (productList) {
        data.forEach((product) => {
          const productCard = document.createElement("div");
          productCard.classList.add("column", "column-full", "is-half");

          productCard.innerHTML = `
                <div class="column is-full-mobile">
                    <div class="columns is-centered is-mobile is-multiline"> 
                        <div class="column is-half column-full">
                            <div class="card">
                                <span class="price">$${product.price}</span>
                                <img src="${product.images[0]}" alt="${product.name}">
                                <div class="card-info">
                                    <h4 class="has-text-black has-text-centered has-text-weight-bold">${product.name}</h4>
                                    <p class="has-text-centered">${product.description}</p>
                                    <div class="card-buttons">
                                        <a href="#" class="shareWhatsappBtn btn btn--mini-rounded"><i class="zmdi zmdi-whatsapp"></i></a>
                                        <a href="#" class="copyLinkBtn btn btn--mini-rounded"><i class="zmdi zmdi-copy"></i></a>
                                        <a href="producto.html?id=${product.code}" class="btn btn--mini-rounded"><i class="zmdi zmdi-eye"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>   
                </div>   
            `;

          productList.appendChild(productCard);
        });
      }
    })
    .catch((error) =>
      console.error("Error cargando los datos del producto:", error)
    );
});

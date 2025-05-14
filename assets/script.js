// Fichier pour le code JavaScript frontend

let allProducts = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch('index.php')
    .then(response => response.json())
    .then(data => {
        allProducts = data.products;
      displayData(allProducts);
      setupFilter();
    })
});

// Display article dynamically
function displayData(json) {
    const element = document.getElementById('products')
    element.innerHTML = json.map(product => `
        <article id=${product.id} class="product-card flex flex-col gap-4 items-start w-full max-w-[280px]" data-type="eyeglasses">
            <img src="${product.imageUrl}" alt="${product.alt}" class="flex w-full pointer-events-auto">
            <div class="flex flex-col gap-2">
              <div class="flex flex-col items-start">
                <h3 class="text-lg font-semibold text-black">${product.name}</h3>
                <p class="text-sm text-black">${product.type}</p>
              </div>
              <p class="text-xl font-semibold text-black">${product.price}</p>
            </div>
        </article>
    `).join('');
}

// Checkbox filter
function setupFilter() {

    const checkboxes = document.querySelectorAll('.real-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {

            // Get all checked
            const selected = Array.from(checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);

            // Filter allProduct with types of checked boxes
            const filtered = selected.length
                ? allProducts.filter(product => selected.includes(product.type))
                : allProducts;
                displayData(filtered);
        });
    });
}
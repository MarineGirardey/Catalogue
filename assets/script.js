// Fichier pour le code JavaScript frontend
let allProducts = [];
let isModalOpen = false;

document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/api.php')
    .then(response => response.json())
    .then(data => {
        allProducts = data.products;
        displayData(allProducts);
        checkboxTrigger();
        injectMobileFilter();
        toggleTrigger();
        popupTrigger();
        setupFilterMobile();
        closeButtonTrigger();
    })
});

// Display article dynamically
function displayData(json) {
    const element = document.getElementById('products')
    element.innerHTML = json.map(product => `
        <article id=${product.id} class="product-card flex flex-col gap-4 items-start w-full" data-type="eyeglasses">
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
function checkboxTrigger() {

    const filterSidebar = document.getElementById('filter-sidebar');
    const checkboxes = filterSidebar.querySelectorAll('.real-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            filterProduct(checkboxes);
        });
    });
}

// Inject the mobile version of the filter component
function injectMobileFilter() {
    // DOM elements
    const filterSidebarClone = document.getElementById('filter-sidebar').cloneNode(true);

    // Replace IDs to make it unique and easier to manipulare
    const elementsWithIds = filterSidebarClone.querySelectorAll('[id]');
    elementsWithIds.forEach((el) => {
        el.id = el.id + '-mobile';
    });

    // Small screen elements to add to the filter component
    const filterFooter = `
        <div id="separators-mobile" class="flex flex-end border-t border-t-black border-t-solid">
        <button id="filter-button-mobile" class="mt-3 bg-black text-white px-6 py-2 ml-auto">Filtrer</button>
        </div>
    `;

    const CrossButton = `
        <button id="close-filter-mobile" class="text-black hover:text-red-600 text-2xl leading-none">
        &times;
        </button>
    `;

    // Inject mobile-version filter modale to a dedicated div
    const filterModal = document.getElementById('filter-modal');
    filterModal.classList.add('hidden'); // Add hidden class
    filterModal.innerHTML = filterSidebarClone.innerHTML;
    filterModal.insertAdjacentHTML('beforeend', filterFooter);
    // Inject cross button into the header
    const filterHeader = document.getElementById('close-filter-mobile');
    filterHeader.innerHTML = CrossButton;
}

// Checkbox filter - Mobile version
function setupFilterMobile() {

    // DOM elements
    const filterSidebar = document.getElementById('filter-modal');
    const checkboxes = filterSidebar.querySelectorAll('.real-checkbox');
    const filterButton = document.getElementById('filter-button-mobile');

    filterButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            filterProduct(checkboxes);
        });
    });
}

// Filter product based on selected checkboxes
function filterProduct(checkboxes) {

    // Get all checked
    const selected = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    // Filter allProduct with types of checked boxes
    const filtered = selected.length
        ? allProducts.filter(product => selected.includes(product.type))
        : allProducts;
        displayData(filtered);
}

// Type of product toggle
function toggleTrigger() {
    // DOM elements
    const toggle = document.getElementById('accordion-toggle');
    const content = document.getElementById('accordion-content');
    const icon = document.getElementById('accordion-icon');
    // Icon rotation
    const openedToggle = "rotate(-180deg)";
    const closedToggle = "rotate(0deg)";
    // Content visibility
    const visibleContent = '1';
    const invisibleContent = '0';

    let isToggleOpen = true;
    toggle.addEventListener('click', () => {
        isToggleOpen = !isToggleOpen;

        if(isToggleOpen) {
            icon.style.transform = closedToggle;
            content.style.opacity = visibleContent;
        } else {
            icon.style.transform = openedToggle;
            content.style.opacity = invisibleContent;
        }
    });
}

// Filter popup - mobile version - open/close
function popupTrigger() {
    // DOM elements
    const filterButton = document.getElementById('filter-button');
    const filterModal = document.getElementById('filter-modal');

    filterButton.addEventListener('click', () => {
        isModalOpen = !isModalOpen;
        if (isModalOpen) {
            filterModal.classList.remove('hidden');
        } else {
            filterModal.classList.add('hidden');
        }
    });
}

// Cross button managment - mobile version
function closeButtonTrigger() {
    // DOM elements
    const closeModalButton = document.getElementById('close-filter-mobile');
    const filterModal = document.getElementById('filter-modal');

    closeModalButton.addEventListener('click', () => {
        isModalOpen = !isModalOpen;
        if (isModalOpen) {
            filterModal.classList.remove('hidden');
        } else {
            filterModal.classList.add('hidden');
        }
    });
}

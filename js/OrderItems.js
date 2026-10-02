const orderItems = [
  {
    name: "Creamy Hamburger",
    price: 12.0,
    category: "burger",
    ingredients:
      "Rindfleisch 80g (Schweiz), Rucola, Gorgonzola, Röstzwiebeln oder Zwiebel, Preiselbeersauce oder Cocktail",
    allergens: "Gluten, Milch, Ei",
    hasOptions: true,
    options: {
      onions: ["Röstzwiebeln", "Zwiebel"],
      sauce: ["Preiselbeersauce", "Cocktail"]
    }
  },
  {
    name: "Patrone Hamburger",
    price: 12.0,
    category: "burger",
    ingredients:
      "Rindfleisch 80g (Schweiz), Zwiebeln, Gurken, Cheddar-Käse, Mayo",
    allergens: "Gluten, Milch, Ei",
  },
  {
    name: "Zwiebel King",
    price: 12.0,
    category: "burger",
    ingredients:
      "Rindfleisch 80g (Schweiz), Zwiebelringe, BBQ-Sauce, Cheddar-Käse",
    allergens: "Gluten, Milch, Ei",
  },
  {
    name: "Camembert Burger (vegetarisch)",
    price: 12.0,
    category: "burger",
    ingredients: "Camembert, Rucola, Preiselbeeren oder Cocktail",
    allergens: "Gluten, Milch, Ei",
    hasOptions: true,
    options: {
      sauce: ["Preiselbeeren", "Cocktail"]
    }
  },
  {
    name: "Chicken Burger",
    price: 12.0,
    category: "burger",
    ingredients:
      "Chickennuggets (Schweiz), Rucola oder Eisberg, Mayo, Curry-Ketchup",
    allergens: "Gluten, Milch, Ei",
    hasOptions: true,
    options: {
      salad: ["Rucola", "Eisberg"]
    }
  },

  // Sides remain the same
  {
    name: "Pommes Bowl Jalapenos",
    price: 12.0,
    category: "sides",
    ingredients: "Pommes, Jalapenos, Cheddar-Sauce",
    allergens: "Gluten",
  },
  {
    name: "Pommes Bowl BBQ Bacon",
    price: 12.0,
    category: "sides",
    ingredients: "Pommes, Speck, Röstzwiebeln, BBQ Sauce",
    allergens: "Gluten",
  },
  {
    name: "Pommes Bowl Guacamole",
    price: 12.0,
    category: "sides",
    ingredients:
      "Pommes, Cocktail, Guacamole, Tomaten, Rucola oder Eisbergsalat oder Nüsslisalat",
    allergens: "Gluten",
    hasOptions: true,
    options: {
      salad: ["Rucola", "Eisbergsalat", "Nüsslisalat"]
    }
  },
  {
    name: "Mozzarella Sticks (7)",
    price: 10.0,
    category: "sides",
    ingredients: "",
    allergens: "Gluten, Milch",
  },
  {
    name: "Onion Rings (7)",
    price: 9.0,
    category: "sides",
    ingredients: "",
    allergens: "Gluten",
  },
  {
    name: "Camembert Beeren (7)",
    price: 10.0,
    category: "sides",
    ingredients: "",
    allergens: "Gluten, Milch",
  },
  {
    name: "Chicken Wings (7)",
    price: 12.0,
    category: "sides",
    ingredients: "",
    allergens: "Gluten",
  },
  {
    name: "Beilage Pommes",
    price: 8.0,
    category: "sides",
    ingredients: "",
    allergens: "Gluten",
  },

  // Sauces remain the same
  {
    name: "Korean BBQ Sauce",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "Soja, Sesam",
  },
  {
    name: "Guacamole Sauce",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Ketchup",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Cocktail Sauce",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "Ei",
  },
  {
    name: "Mayo",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "Ei",
  },
  {
    name: "Knoblauch Sauce",
    price: 3.0,
    category: "sauce",
    ingredients: "",
    allergens: "Ei, Milch",
  },

  // Drinks remain the same
  {
    name: "Cola 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Cola 0.33L",
    price: 3.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Ice Tea 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Ice Tea 0.33L",
    price: 3.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Red Bull 0.25L",
    price: 5.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Mineralwasser mit Kohlensäure 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Mineralwasser ohne Kohlensäure 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Bier Feldschlösschen 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "Gluten",
  },
  {
    name: "Fanta 0.5L",
    price: 4.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Fanta 0.33L",
    price: 3.0,
    category: "drinks",
    ingredients: "",
    allergens: "",
  },

  // Salads remain the same
  {
    name: "Chabis-Rübli Salat mit eigener Sauce",
    price: 10.0,
    category: "salad",
    ingredients: "",
    allergens: "Senf",
  },
  {
    name: "Grüner Salat",
    price: 10.0,
    category: "salad",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Thonsalat",
    price: 10.0,
    category: "salad",
    ingredients: "",
    allergens: "Fisch",
  },
  {
    name: "Gemischter Salat",
    price: 10.0,
    category: "salad",
    ingredients: "",
    allergens: "",
  },
  {
    name: "Mozzarella-Tomaten Salat",
    price: 10.0,
    category: "salad",
    ingredients: "",
    allergens: "Milch",
  },

  // Desserts remain the same
  {
    name: "Extreme",
    price: 3.5,
    category: "desserts",
    ingredients: "",
    allergens: "Milch, Ei, Gluten",
  },
  {
    name: "Mega Almond",
    price: 3.5,
    category: "desserts",
    ingredients: "",
    allergens: "Milch, Ei, Gluten, Nüsse",
  },
  {
    name: "Ben & Jerry's diverse Sorten",
    price: 5.0,
    category: "desserts",
    ingredients: "",
    allergens: "Milch, Ei, Gluten, Nüsse",
  },
  {
    name: "Tiramisu",
    price: 6.0,
    category: "desserts",
    ingredients: "",
    allergens: "Milch, Ei, Gluten",
  },
  {
    name: "Schoggimousse",
    price: 6.0,
    category: "desserts",
    ingredients: "",
    allergens: "Milch, Ei",
  },

  // Enhanced Pizzas with customization options
  {
    name: "Pizza Margherita",
    basePrice: 10.0,
    largePriceAdd: 5.0,
    category: "pizza",
    ingredients: "Tomatensauce, Mozzarella, Basilikum",
    allergens: "Gluten, Milch",
    isPizza: true,
    availableToppings: [
      { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
      { name: "Salami", price: 3.0, allergens: "" },
      { name: "Kochschinken", price: 3.0, allergens: "" },
      { name: "Champignons", price: 2.0, allergens: "" },
      { name: "Paprika", price: 2.0, allergens: "" },
      { name: "Zwiebeln", price: 1.5, allergens: "" },
      { name: "Oliven", price: 2.0, allergens: "" },
      { name: "Thunfisch", price: 3.5, allergens: "Fisch" },
      { name: "Ananas", price: 2.0, allergens: "" },
      { name: "Rucola", price: 2.0, allergens: "" },
      { name: "Sardellen", price: 3.0, allergens: "Fisch" },
      { name: "Kapern", price: 2.0, allergens: "" },
      { name: "Artischocken", price: 2.5, allergens: "" },
      { name: "Peperoni", price: 2.0, allergens: "" },
      { name: "Knoblauch", price: 1.0, allergens: "" },
      { name: "Cherry-Tomaten", price: 2.0, allergens: "" },
      { name: "Parmesanspäne", price: 3.0, allergens: "Milch" },
      { name: "Zucchini", price: 2.0, allergens: "" },
      { name: "Aubergine", price: 2.0, allergens: "" },
      { name: "Speck", price: 3.0, allergens: "" }
    ]
  },
  {
    name: "Pizza Salami",
    basePrice: 14.0,
    largePriceAdd: 3.0,
    category: "pizza",
    ingredients: "Tomatensauce, Mozzarella, Salami",
    allergens: "Gluten, Milch",
    isPizza: true,
    availableToppings: [
      { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
      { name: "Extra Salami", price: 3.0, allergens: "" },
      { name: "Kochschinken", price: 3.0, allergens: "" },
      { name: "Champignons", price: 2.0, allergens: "" },
      { name: "Paprika", price: 2.0, allergens: "" },
      { name: "Zwiebeln", price: 1.5, allergens: "" },
      { name: "Oliven", price: 2.0, allergens: "" },
      { name: "Peperoni", price: 2.0, allergens: "" },
      { name: "Knoblauch", price: 1.0, allergens: "" }
    ]
  },
  {
    name: "Pizza Napoli",
    basePrice: 14.0,
    largePriceAdd: 3.0,
    category: "pizza",
    ingredients: "Tomatensauce, Mozzarella, Sardellen, Kapern, Oliven",
    allergens: "Gluten, Milch, Fisch",
    isPizza: true,
    availableToppings: [
      { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
      { name: "Extra Sardellen", price: 3.0, allergens: "Fisch" },
      { name: "Extra Kapern", price: 2.0, allergens: "" },
      { name: "Extra Oliven", price: 2.0, allergens: "" },
      { name: "Zwiebeln", price: 1.5, allergens: "" },
      { name: "Thunfisch", price: 3.5, allergens: "Fisch" }
    ]
  },
  {
  name: "Pizza Prosciutto",
  basePrice: 15.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Kochschinken",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Kochschinken", price: 3.0, allergens: "" },
    { name: "Champignons", price: 2.0, allergens: "" },
    { name: "Ananas", price: 2.0, allergens: "" },
    { name: "Zwiebeln", price: 1.5, allergens: "" },
    { name: "Peperoni", price: 2.0, allergens: "" }
  ]
},
{
  name: "Pizza Tonno",
  basePrice: 15.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Thunfisch, Zwiebeln",
  allergens: "Gluten, Milch, Fisch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Thunfisch", price: 3.5, allergens: "Fisch" },
    { name: "Extra Zwiebeln", price: 1.5, allergens: "" },
    { name: "Oliven", price: 2.0, allergens: "" },
    { name: "Kapern", price: 2.0, allergens: "" }
  ]
},
{
  name: "Pizza Hawaii",
  basePrice: 15.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Kochschinken, Ananas",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Kochschinken", price: 3.0, allergens: "" },
    { name: "Extra Ananas", price: 2.0, allergens: "" },
    { name: "Champignons", price: 2.0, allergens: "" },
    { name: "Zwiebeln", price: 1.5, allergens: "" }
  ]
},
{
  name: "Pizza Verdura",
  basePrice: 14.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Paprika, Zucchini, Aubergine, Champignons",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Gemüse", price: 3.0, allergens: "" },
    { name: "Oliven", price: 2.0, allergens: "" },
    { name: "Artischocken", price: 2.5, allergens: "" },
    { name: "Rucola", price: 2.0, allergens: "" }
  ]
},
{
  name: "Pizza Quattro Stagione",
  basePrice: 15.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Kochschinken, Salami, Champignons, Artischocken",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Salami", price: 3.0, allergens: "" },
    { name: "Extra Kochschinken", price: 3.0, allergens: "" },
    { name: "Extra Champignons", price: 2.0, allergens: "" },
    { name: "Extra Artischocken", price: 2.5, allergens: "" }
  ]
},
{
  name: "Pizza Cardinale",
  basePrice: 15.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Kochschinken, Champignons",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Kochschinken", price: 3.0, allergens: "" },
    { name: "Extra Champignons", price: 2.0, allergens: "" },
    { name: "Zwiebeln", price: 1.5, allergens: "" },
    { name: "Peperoni", price: 2.0, allergens: "" }
  ]
},
{
  name: "Pizza Romantica",
  basePrice: 17.0,
  largePriceAdd: 2.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Rucola, Parmesanspäne, Cherry-Tomaten",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Rucola", price: 2.0, allergens: "" },
    { name: "Extra Cherry-Tomaten", price: 2.0, allergens: "" },
    { name: "Parmesanspäne", price: 3.0, allergens: "Milch" },
    { name: "Oliven", price: 2.0, allergens: "" }
  ]
},
{
  name: "Pizza Patrone",
  basePrice: 17.0,
  largePriceAdd: 3.0,
  category: "pizza",
  ingredients: "Tomatensauce, Mozzarella, Salami, Peperoni, Zwiebeln, Knoblauch",
  allergens: "Gluten, Milch",
  isPizza: true,
  availableToppings: [
    { name: "Extra Mozzarella", price: 2.0, allergens: "Milch" },
    { name: "Extra Salami", price: 3.0, allergens: "" },
    { name: "Extra Peperoni", price: 2.0, allergens: "" },
    { name: "Extra Zwiebeln", price: 1.5, allergens: "" },
    { name: "Extra Knoblauch", price: 1.0, allergens: "" }
  ]
}

  // Additional salads
  {
    name: "Pastasalat",
    price: 10.0,
    category: "salad",
    ingredients: "Nudeln, Gemüse, hausgemachtes Dressing",
    allergens: "Gluten, Ei",
  },
  {
    name: "Südfleischsalat",
    price: 12.0,
    category: "salad",
    ingredients: "Schweizer Fleisch",
    allergens: "",
  },
];

// Pizza customization modal functions
let currentPizzaItem = null;
let currentPizzaOptions = {
  size: 'medium',
  toppings: []
};

function showPizzaModal(pizzaItem) {
  currentPizzaItem = pizzaItem;
  currentPizzaOptions = {
    size: 'medium',
    toppings: []
  };
  
  const modal = document.createElement('div');
  modal.id = 'pizza-modal';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${pizzaItem.name}</h3>
        <button class="modal-close" onclick="closePizzaModal()">&times;</button>
      </div>
      <div class="modal-body">
        <div class="size-selection">
          <h4>Grösse wählen:</h4>
          <label>
            <input type="radio" name="pizza-size" value="medium" checked onchange="updatePizzaSize('medium')">
            Medium (${pizzaItem.basePrice.toFixed(2)} CHF)
          </label>
          <label>
            <input type="radio" name="pizza-size" value="large" onchange="updatePizzaSize('large')">
            Large (${(pizzaItem.basePrice + pizzaItem.largePriceAdd).toFixed(2)} CHF)
          </label>
        </div>
        
        <div class="toppings-selection">
          <h4>Zusätzliche Beläge:</h4>
          <div class="toppings-grid">
            ${pizzaItem.availableToppings.map(topping => `
              <label class="topping-option">
                <input type="checkbox" value="${topping.name}" onchange="toggleTopping('${topping.name}', ${topping.price})">
                ${topping.name} (+${topping.price.toFixed(2)} CHF)
              </label>
            `).join('')}
          </div>
        </div>
        
        <div class="pizza-total">
          <h4>Gesamtpreis: <span id="pizza-total-price">${pizzaItem.basePrice.toFixed(2)} CHF</span></h4>
        </div>
      </div>
      <div class="modal-footer">
        <button class="modal-btn-cancel" onclick="closePizzaModal()">Abbrechen</button>
        <button class="modal-btn-add" onclick="addCustomPizza()">In den Warenkorb</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function showOptionsModal(item) {
  const modal = document.createElement('div');
  modal.id = 'options-modal';
  modal.className = 'modal-overlay';
  
  let optionsHtml = '';
  for (const [category, options] of Object.entries(item.options)) {
    optionsHtml += `
      <div class="option-category">
        <h4>${category === 'sauce' ? 'Sauce wählen:' : 
             category === 'salad' ? 'Salat wählen:' : 
             category === 'onions' ? 'Zwiebeln wählen:' : 
             category.charAt(0).toUpperCase() + category.slice(1) + ' wählen:'}</h4>
        ${options.map(option => `
          <label>
            <input type="radio" name="${category}" value="${option}">
            ${option}
          </label>
        `).join('')}
      </div>
    `;
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>${item.name} - Optionen wählen</h3>
        <button class="modal-close" onclick="closeOptionsModal()">&times;</button>
      </div>
      <div class="modal-body">
        ${optionsHtml}
      </div>
      <div class="modal-footer">
        <button class="modal-btn-cancel" onclick="closeOptionsModal()">Abbrechen</button>
        <button class="modal-btn-add" onclick="addItemWithOptions('${item.name}', ${item.price})">In den Warenkorb</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function updatePizzaSize(size) {
  currentPizzaOptions.size = size;
  updatePizzaTotal();
}

function toggleTopping(toppingName, price) {
  const index = currentPizzaOptions.toppings.findIndex(t => t.name === toppingName);
  if (index > -1) {
    currentPizzaOptions.toppings.splice(index, 1);
  } else {
    currentPizzaOptions.toppings.push({ name: toppingName, price: price });
  }
  updatePizzaTotal();
}

function updatePizzaTotal() {
  if (!currentPizzaItem) return;
  
  let total = currentPizzaItem.basePrice;
  if (currentPizzaOptions.size === 'large') {
    total += currentPizzaItem.largePriceAdd;
  }
  
  currentPizzaOptions.toppings.forEach(topping => {
    total += topping.price;
  });
  
  const totalElement = document.getElementById('pizza-total-price');
  if (totalElement) {
    totalElement.textContent = `${total.toFixed(2)} CHF`;
  }
}

function addCustomPizza() {
  if (!currentPizzaItem) return;
  
  let itemName = `${currentPizzaItem.name} (${currentPizzaOptions.size === 'large' ? 'Large' : 'Medium'})`;
  let itemPrice = currentPizzaItem.basePrice;
  
  if (currentPizzaOptions.size === 'large') {
    itemPrice += currentPizzaItem.largePriceAdd;
  }
  
  // Add toppings to name and price
  if (currentPizzaOptions.toppings.length > 0) {
    const toppingNames = currentPizzaOptions.toppings.map(t => t.name).join(', ');
    itemName += ` + ${toppingNames}`;
    currentPizzaOptions.toppings.forEach(topping => {
      itemPrice += topping.price;
    });
  }
  
  // Call the existing addItem function
  if (typeof addItem === 'function') {
    addItem(itemName, itemPrice);
  }
  
  closePizzaModal();
}

function addItemWithOptions(itemName, basePrice) {
  const modal = document.getElementById('options-modal');
  const selectedOptions = [];
  
  // Collect selected options
  const radioInputs = modal.querySelectorAll('input[type="radio"]:checked');
  radioInputs.forEach(input => {
    selectedOptions.push(input.value);
  });
  
  // Create item name with selected options
  let finalItemName = itemName;
  if (selectedOptions.length > 0) {
    finalItemName += ` (${selectedOptions.join(', ')})`;
  }
  
  // Call the existing addItem function
  if (typeof addItem === 'function') {
    addItem(finalItemName, basePrice);
  }
  
  closeOptionsModal();
}

function closePizzaModal() {
  const modal = document.getElementById('pizza-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
  currentPizzaItem = null;
  currentPizzaOptions = { size: 'medium', toppings: [] };
}

function closeOptionsModal() {
  const modal = document.getElementById('options-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = 'auto';
  }
}

// Enhanced render function
function renderOrderItems(items) {
  const orderContainer = document.getElementById("order-container");
  orderContainer.innerHTML = ""; // Clear previous items
  if (!items || items.length === 0) {
    console.log("No items to render");
    return;
  }

  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("food-item");

    // Additional info for ingredients and allergens
    let additionalInfo = "";
    if (item.ingredients) {
      additionalInfo += `<div class="ingredients"><small>Zutaten: ${item.ingredients}</small></div>`;
    }
    if (item.allergens) {
      additionalInfo += `<div class="allergens"><small>Allergene: ${item.allergens}</small></div>`;
    }

    // Different rendering for pizzas
    if (item.isPizza) {
      itemDiv.innerHTML = `
        <div class="food-item-left">
          <span>${item.name}<br>
          ${additionalInfo}
          ab CHF ${item.basePrice.toFixed(2)} (Medium) / CHF ${(item.basePrice + item.largePriceAdd).toFixed(2)} (Large)
          </span>
        </div>
        <button type="button" onclick="showPizzaModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">Anpassen</button>
      `;
    } else if (item.hasOptions) {
      itemDiv.innerHTML = `
        <div class="food-item-left">
          <span>${item.name}<br>
          ${additionalInfo}
          CHF ${item.price.toFixed(2)}
          </span>
        </div>
        <button type="button" onclick="showOptionsModal(${JSON.stringify(item).replace(/"/g, '&quot;')})">Optionen</button>
      `;
    } else {
      itemDiv.innerHTML = `
        <div class="food-item-left">
          <span>${item.name}<br>
          ${additionalInfo}
          CHF ${item.price.toFixed(2)}
          </span>
        </div>
        <button type="button" onclick="addItem('${item.name}', ${item.price})">+</button>
      `;
    }
    
    orderContainer.appendChild(itemDiv);
  });
  console.log("Rendered items:", items);
}

// Add modal styles
const modalStyles = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  color: #333;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  padding: 20px;
}

.modal-body h4 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #333;
}

.modal-body label {
  display: block;
  margin: 8px 0;
  cursor: pointer;
}

.modal-body input[type="radio"],
.modal-body input[type="checkbox"] {
  margin-right: 8px;
}

.toppings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 8px;
}

.topping-option {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.topping-option:hover {
  background-color: #f5f5f5;
}

.pizza-total {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  text-align: center;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px;
  border-top: 1px solid #eee;
}

.modal-btn-cancel,
.modal-btn-add {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.modal-btn-cancel {
  background-color: #6c757d;
  color: white;
}

.modal-btn-cancel:hover {
  background-color: #5a6268;
}

.modal-btn-add {
  background-color: #e73d0c;
  color: white;
}

.modal-btn-add:hover {
  background-color: #c73408;
}

.option-category {
  margin-bottom: 20px;
}

.size-selection label {
  display: block;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.size-selection label:hover {
  background-color: #f5f5f5;
}
`;

// Inject styles
if (!document.getElementById('modal-styles')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'modal-styles';
  styleSheet.textContent = modalStyles;
  document.head.appendChild(styleSheet);
}

// Rest of the existing functions remain the same
function filterItems() {
  const searchValue = document
    .getElementById("item-search")
    .value.toLowerCase();
  const selectedCategory = document.getElementById("category-filter").value;
  const sortOrder = document.getElementById("sort-order").value;

  let filteredItems = orderItems.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchValue) ||
      (item.ingredients &&
        item.ingredients.toLowerCase().includes(searchValue)) ||
      (item.allergens && item.allergens.toLowerCase().includes(searchValue));
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  console.log("Filtered items before sorting:", filteredItems);

  filteredItems.sort((a, b) => {
    const priceA = a.isPizza ? a.basePrice : a.price;
    const priceB = b.isPizza ? b.basePrice : b.price;
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  console.log("Filtered and sorted items:", filteredItems);
  renderOrderItems(filteredItems);
}

// Function to set up event listeners after DOM content loads
function initializeEventListeners() {
  const searchInput = document.getElementById("item-search");
  const categoryFilter = document.getElementById("category-filter");
  const sortOrder = document.getElementById("sort-order");
  const allergensFilter = document.getElementById("allergens-filter");

  if (searchInput) {
    searchInput.addEventListener("input", filterItems);
  }
  if (categoryFilter) {
    categoryFilter.addEventListener("change", filterItems);
  }
  if (sortOrder) {
    sortOrder.addEventListener("change", filterItems);
  }
  if (allergensFilter) {
    allergensFilter.addEventListener("change", filterItems);
  }
  console.log("Event listeners attached successfully");
}

// Initial render and setup event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  renderOrderItems(orderItems); // Initial render of all items
  initializeEventListeners();
});

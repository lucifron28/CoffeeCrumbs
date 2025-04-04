const coffeeCrumbData = {
    businessDescription: {
        name: "Coffee Crumb",
        description: "Coffee Crumb is a cozy café that specializes in artisanal coffee and freshly baked pastries. Our mission is to provide a warm and inviting atmosphere for coffee lovers and foodies alike.",
        location: "123 Coffee Lane, Brewtown, CA",
        established: 2023
    },
    menuItems: {
        coffeeDrinks: [
            { name: "Espresso", description: "Rich and bold, made from 100% Arabica beans", price: 100, image: "assets/images/espresso.png" },
            { name: "Macchiato", description: "Espresso 'marked' with a dollop of frothed milk", price: 120, image: "assets/images/macchiato.png" },
            { name: "Cappuccino", description: "Espresso, steamed milk, and a layer of frothed milk", price: 120, image: "assets/images/cappuccino.png" },
            { name: "Latte", description: "Espresso and steamed milk, topped with a sprinkle of foam", price: 130, image: "assets/images/latte.png" },
            { name: "Mocha", description: "Espresso, steamed milk, and chocolate syrup", price: 120, image: "assets/images/mocha.png" },
            { name: "Drip Coffee", description: "Our signature blend, roasted locally", price: 100, image: "assets/images/drip-coffee.png" },
            { name: "Cold Brew", description: "Smooth and refreshing, steeped for 24 hours", price: 100, image: "assets/images/cold-brew.png" }
        ],
        specialtyDrinks: [
            { name: "Caramel Macchiato", description: "Espresso, vanilla syrup, and caramel drizzle", price: 150, image: "assets/images/caramel-macchiato.png" },
            { name: "Cinnamon Latte", description: "Espresso, steamed milk, and a sprinkle of cinnamon", price: 170, image: "assets/images/cinnamon-latte.png" },
            { name: "Mocha Cookie Crumble", description: "Espresso, steamed milk, and cookie crumble topping", price: 190, image: "assets/images/mocha-cookie-crumble.png" }
        ],
        pastries: [
            { name: "Croissants", description: "Flaky and buttery, plain or chocolate-filled", price: 90, image: "assets/images/croissants.png" },
            { name: "Muffins", description: "Blueberry, banana, or cinnamon apple", price: 90, image: "assets/images/muffins.png" },
            { name: "Scones", description: "Freshly baked, plain or with clotted cream and jam", price: 80, image: "assets/images/scones.png" },
            { name: "Danish", description: "Fruit-filled or cream-filled, topped with a sweet glaze", price: 100, image: "assets/images/danish.png" },
            { name: "Quiche", description: "Savory or sweet, perfect for breakfast or lunch", price: 80, image: "assets/images/quiche.png" }
        ],
        sandwichesAndWraps: [
            { name: "Breakfast Sandwich", description: "Scrambled eggs, bacon, and cheddar on a toasted English muffin", price: 200, image: "assets/images/breakfast-sandwich.png" },
            { name: "Grilled Cheese", description: "Melted cheddar on sourdough bread, grilled to perfection", price: 250, image: "assets/images/grilled-cheese.png" },
            { name: "Panini", description: "Turkey, ham, or veggie, pressed to crispy perfection", price: 300, image: "assets/images/panini.png" },
            { name: "Wraps", description: "Chicken Caesar, turkey, or veggie, wrapped in a whole wheat tortilla", price: 350, image: "assets/images/wraps.png" }
        ],
        salads: [
            { name: "Garden Salad", description: "Mixed greens, cherry tomatoes, and cucumber, topped with your choice of dressing", price: 400, image: "assets/images/garden-salad.png" },
            { name: "Caesar Salad", description: "Romaine lettuce, croutons, and parmesan cheese, tossed in our signature Caesar dressing", price: 400, image: "assets/images/caesar-salad.png" },
            { name: "Greek Salad", description: "Mixed greens, feta cheese, olives, and sun-dried tomatoes, topped with a zesty Greek vinaigrette", price: 470, image: "assets/images/greek-salad.png" }
        ],
        specialsAndCombos: [
            { name: "Coffee and Pastry Pairing", description: "Pair any coffee drink with a pastry", price: 350, image: "assets/images/coffee-pastry-pairing.png" },
            { name: "Breakfast Combo", description: "Breakfast sandwich, coffee, and pastry", price: 350, image: "assets/images/breakfast-combo.png" },
            { name: "Lunch Combo", description: "Sandwich, salad, and drink", price: 350, image: "assets/images/lunch-combo.png" }
        ]
    },
    marketAnalysis: {
        targetMarket: "Young professionals and students looking for a comfortable place to work and socialize.",
        competition: "Local coffee shops and chains like Starbucks.",
        uniqueSellingProposition: "Artisanal quality and a cozy atmosphere."
    },
    marketingStrategy: {
        onlinePresence: "Active on social media platforms and a user-friendly website.",
        promotions: "Weekly specials and loyalty programs to encourage repeat customers."
    },
    operations: {
        hours: "Monday to Friday: 7 AM - 7 PM, Saturday and Sunday: 8 AM - 8 PM",
        staff: "Trained baristas and friendly staff dedicated to customer service."
    },
    financialProjections: {
        firstYearRevenue: 150000,
        breakEvenPoint: "Expected within the first 18 months."
    },
    managementTeam: [
        {
            name: "Alice Smith",
            position: "Founder & CEO",
            experience: "10 years in the coffee industry."
        },
        {
            name: "Bob Johnson",
            position: "Head Barista",
            experience: "5 years of experience in specialty coffee."
        }
    ],
    contactInformation: {
        email: "contact@coffeecrumb.com",
        phone: "555-123-4567",
        socialMedia: {
            facebook: "facebook.com/coffeecrumb",
            instagram: "instagram.com/coffeecrumb"
        }
    }
};

console.log(coffeeCrumbData); // Check if data is loaded
console.log(coffeeCrumbData.menuItems); // Check menu items

// Function to display business description
function displayBusinessDescription() {
    const descriptionElement = document.getElementById('business-description');
    if (descriptionElement) {
        descriptionElement.innerText = coffeeCrumbData.businessDescription.description;
    }
}

let cart = [];

// Function to display menu items with "Add to Cart" buttons
function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    if (menuContainer) {
        Object.values(coffeeCrumbData.menuItems).flat().forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description || ''}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItem);
        });

        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const name = e.target.getAttribute('data-name');
                const price = parseFloat(e.target.getAttribute('data-price'));
                addToCart(name, price);
            });
        });
    }
}

// Function to add items to the cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    console.log(cart); // For debugging, replace with cart display logic
}

// Function to display market analysis
function displayMarketAnalysis() {
    const marketAnalysisElement = document.getElementById('market-analysis-content');
    if (marketAnalysisElement) {
        const { targetMarket, competition, uniqueSellingProposition } = coffeeCrumbData.marketAnalysis;
        marketAnalysisElement.innerText = `Target Market: ${targetMarket}\nCompetition: ${competition}\nUnique Selling Proposition: ${uniqueSellingProposition}`;
    }
}

// Function to display marketing strategy
function displayMarketingStrategy() {
    const marketingStrategyElement = document.getElementById('marketing-strategy-content');
    if (marketingStrategyElement) {
        marketingStrategyElement.innerText = coffeeCrumbData.marketingStrategy.onlinePresence + '\n' + coffeeCrumbData.marketingStrategy.promotions;
    }
}

// Function to display operations
function displayOperations() {
    const operationsElement = document.getElementById('operations-content');
    if (operationsElement) {
        const { hours, staff } = coffeeCrumbData.operations;
        operationsElement.innerText = `Hours: ${hours}\nStaff: ${staff}`;
    }
}

// Function to display financial projections
function displayFinancialProjections() {
    const financialProjectionsElement = document.getElementById('financial-projections-content');
    if (financialProjectionsElement) {
        const { firstYearRevenue, breakEvenPoint } = coffeeCrumbData.financialProjections;
        financialProjectionsElement.innerText = `First Year Revenue: $${firstYearRevenue}\nBreak Even Point: ${breakEvenPoint}`;
    }
}

// Function to display management team
function displayManagementTeam() {
    const managementTeamElement = document.getElementById('management-team-content');
    if (managementTeamElement) {
        coffeeCrumbData.managementTeam.forEach(member => {
            const memberInfo = document.createElement('p');
            memberInfo.innerText = `${member.name} - ${member.position}\nExperience: ${member.experience}`;
            managementTeamElement.appendChild(memberInfo);
        });
    }
}

// Function to display contact information
function displayContactInformation() {
    const contactInfoElement = document.getElementById('contact-info');
    if (contactInfoElement) {
        const { email, phone, socialMedia } = coffeeCrumbData.contactInformation;
        contactInfoElement.innerText = `Email: ${email}\nPhone: ${phone}\nFacebook: ${socialMedia.facebook}\nInstagram: ${socialMedia.instagram}`;
    }
}

// Helper function to format category titles
function formatCategoryTitle(category) {
    const conjunctions = ["and", "or", "of", "the", "in", "on", "with"];
    return category
        .replace(/([A-Z])/g, ' $1') // Add space before capital letters
        .split(' ') // Split into words
        .map((word, index) => {
            if (index === 0 || !conjunctions.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter
            }
            return word.toLowerCase(); // Keep conjunctions lowercase
        })
        .join(' '); // Join words back into a string
}

// Function to render menu
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        const categories = coffeeCrumbData.menuItems;
        Object.keys(categories).forEach(category => {
            const section = document.createElement('section');
            section.innerHTML = `<h3>${formatCategoryTitle(category)}</h3>`;
            const grid = document.createElement('div');
            grid.classList.add('menu-grid');
            categories[category].forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: P${item.price}</p>
                    <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>
                `;
                grid.appendChild(menuItem);
            });
            section.appendChild(grid);
            menuContainer.appendChild(section);
        });
    }
}

// Call functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    displayBusinessDescription(); // Example for other pages
    displayMenu();
    displayMarketAnalysis();
    displayMarketingStrategy();
    displayOperations();
    displayFinancialProjections();
    displayManagementTeam();
    displayContactInformation();
    renderMenu();
});
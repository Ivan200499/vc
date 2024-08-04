document.addEventListener("DOMContentLoaded", () => {
    fetch('/menu')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu');
            data.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.className = 'menu-item';
                menuItem.innerHTML = `
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                    <p>€${item.price.toFixed(2)}</p>
                    <button>Ordina</button>
                `;
                menuContainer.appendChild(menuItem);
            });
        });
});

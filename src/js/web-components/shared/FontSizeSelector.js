class FontSizeSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '24', '28', '32', '36', '40', '44', '48', '56', '64', '72'];
    }

    connectedCallback() {
        const target = this.getAttribute('data-target') || '--nav-font-size';
        const defaultSize = 18;

        this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }
                .quick-access {
                    display: flex;
                    gap: 0.5rem;
                }
                .quick-access button {
                    flex: 1;
                    padding: 0.25rem 0.5rem;
                    cursor: pointer;
                    border: 1px solid #ccc;
                    background: #f5f5f5;
                }
                .slider {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                input[type="range"] {
                    flex: 1;
                }
                .value {
                    font-weight: bold;
                    cursor: pointer;
                }
                .dropdown {
                    display: none;
                    position: absolute;
                    background: white;
                    border: 1px solid #ccc;
                    max-height: 200px;
                    overflow-y: auto;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                    z-index: 10;
                }
                .dropdown.visible {
                    display: block;
                }
                .dropdown div {
                    padding: 0.5rem;
                    cursor: pointer;
                }
                .dropdown div:hover {
                    background: #eee;
                }
            </style>
            <div class="wrapper">
                <div class="quick-access">
                    <button data-size="14">Pequeña</button>
                    <button data-size="18">Mediana</button>
                    <button data-size="22">Grande</button>
                </div>
                <div class="slider">
                    <input type="range" min="8" max="72" value="${defaultSize}" />
                    <span class="value">${defaultSize}</span>
                </div>
                <div class="dropdown"></div>
            </div>
        `;

        const root = this.shadowRoot;
        const valueDisplay = root.querySelector('.value');
        const slider = root.querySelector('input[type="range"]');
        const dropdown = root.querySelector('.dropdown');
        
        const updateSize = (size) => {
            valueDisplay.textContent = `${size}px`;
            document.documentElement.style.setProperty(target, `${size}px`);
            slider.value = size;
        };

        root.querySelectorAll('.quick-access button').forEach(button => {
            button.addEventListener('click', () => updateSize(button.dataset.size));
        });

        slider.addEventListener('input', () => updateSize(slider.value));

        valueDisplay.addEventListener('click', () => {
            dropdown.innerHTML = this.sizes.map(size => `<div data-size="${size}">${size}px</div>`).join('');
            dropdown.classList.toggle('visible');
        });

        dropdown.addEventListener('click', (e) => {
            if (e.target.matches('[data-size]')) {
                updateSize(e.target.dataset.size);
                dropdown.classList.remove('visible');
            }
        });

        document.addEventListener('click', (e) => {
            if (!root.contains(e.target)) dropdown.classList.remove('visible');
        });
    }
}
customElements.define('font-size-selector', FontSizeSelector);
export { FontSizeSelector };
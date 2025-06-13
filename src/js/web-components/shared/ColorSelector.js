class ColorSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.predefinedColors = ['#000000', '#FFFFFF', '#00FF00', '#FF0000', '#0000FF'];
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .wrapper {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .preset {
                    display: flex;
                    gap: 0.5rem;
                }
                .preset button {
                    width: 32px;
                    height: 32px;
                    border: 1px solid #aaa;
                    cursor: pointer;
                    outline: none;
                    background: none;
                }
                input[type="color"] {
                    width: 100%;
                    height: 32px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <div class="wrapper">
                <div class="preset">
                    ${this.predefinedColors.map(color => `
                        <button style="background: ${color};" data-color="${color}" title="${color}"></button>
                    `).join('')}
                </div>
                <input type="color" value="#000000" />
            </div>
        `;
        
        this.shadowRoot.querySelectorAll('.button[data-color]').forEach(button => {
            button.addEventListener('click', () => {
                const color = button.getAttribute('data-color');
                document.documentElement.style.setProperty(target, color);
            });
        });

        this.shadowRoot.querySelector('input[type="color"]').addEventListener('input', (e) => {
            document.documentElement.style.setProperty(target, e.target.value);
        });
    }
}

customElements.define('color-fuente', ColorSelector);
class FontTypeSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const target = this.getAttribute('data-target') || '--nav-font-family';

        const fontMap = {
            'roboto': "'Roboto', sans-serif",
            'coolvetica': "'Coolvetica', calibri",
            'times-sans-serif': "'Times Sans Serif', 'Times New Roman'"
        };

        this.shadowRoot.innerHTML = `
            <style>
                select {
                    width: 100%;
                    padding: 0.5rem;
                    font-size: 1rem;
                    border: 1px solid #ccc;
                    font-family: inherit;
                    cursor: pointer;
                }
                option[value="times-sans-serif"] {
                    font-family: 'Times Sans Serif', 'Times New Roman';
                }
                option[value="roboto"] {
                    font-family: 'Roboto', sans-serif;
                }
                option[value="coolvetica"] {
                    font-family: 'Coolvetica', calibri;
                }
            </style>
            <select>
                <option value="roboto">Roboto</option>
                <option value="coolvetica">Coolvetica</option>
                <option value="times-sans-serif">Times Sans Serif</option>
            </select>
        `;

        const select = this.shadowRoot.querySelector('select');

        select.addEventListener('change', (e) => {
            const fontValue = fontMap[e.target.value] || fontMap['roboto'];
            document.documentElement.style.setProperty(target, fontValue);
        });
    }
}
customElements.define('font-type-selector', FontTypeSelector);
export { FontTypeSelector };
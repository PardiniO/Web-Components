class FontTypeSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallBack() {
        const target = this.getAttribute('data-target') || '--nav-font-type';

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
                option {
                    font-family: 'Times Sans Serif';
                }
                option[value="roboto"] {
                    font-family: roboto;
                }
                option[value="coolvetica"] {
                    font-family: coolvetica;
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
            document.documentElement.style.setProperty(target, e.target.value);
        });
    }
}
customElements.define('font-type-selector', FontTypeSelector);
export { FontTypeSelector };
class ColorFuente extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: none;
                }
                :host(.active) {
                    display: block;
                    margin-top: 0.5em;
                }
                input[type="color"] {
                    width: 50px;
                    height: 20px;
                    border: none;
                    cursor: pointer;
                }
            </style>

            <div>
                <label for="color-fuente">Seleccionar color: </label>
                <input type="color" id="color-fuente" name="color-fuente" value="#000000" />
            </div>
        `;
    }

    connectedCallback() {
        const input = this.shadowRoot.getElementById('color-fuente');
        input.addEventListener('input', (e) => {
            document.querySelectorAll('body, body *').forEach(el => {
                if (
                    el.nodeType === 1 &&
                    el.tagName !== 'SCRIPT' &&
                    el.tagName !== 'STYLE'
                ) {
                    el.style.color = e.target.value;
                }
            });
        });
    }
}

customElements.define('color-fuente', ColorFuente);
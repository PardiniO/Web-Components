class ColorSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const tipo = this.getAttribute('tipo') || 'texto';
        this.shadowRoot.innerHTML = `
            <style>
                :host { display: block; margin: 0.5em 0; }
                input[type="color"] {
                    width: 50px;
                    height: 24px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <div>
                <label>
                    ${tipo === 'fondo' ? 'Seleccionar color de fondo:' : 'Seleccionar color de texto:'}
                    <input type="color" id="color-fuente" value="#000000" />
                </label>
            </div>
        `;
    }

    connectedCallback() {
        const tipo = this.getAttribute('tipo') || 'texto';
        const input = this.shadowRoot.getElementById('color-fuente');
        input.addEventListener('input', (e) => {
            if (tipo === 'texto') {
                document.body.style.setProperty('--color-fuente-global', e.target.value);
            } else if (tipo === 'fondo'){
                document.body.style.background = e.target.value;
                const header = document.querySelector('header');
                if (header) header.style.background = e.target.value;
            }
        });
    }
}

customElements.define('color-fuente', ColorSelector);
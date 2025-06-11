class AjustesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                @font-face {
                    font-family: 'Coolvetica';
                    src: url('/fonts/coolvetica.woff2') format('woff2'),
                        url('/fonts/coolvetica.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Times Sans Serif';
                    src: url('/fonts/times-sans-serif.woff2') format('woff2'),
                        url('/fonts/times-sans-serif.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                ul {
                    background: #5AB1BB;
                    list-style-type: none;
                    padding: 1em;
                    border-radius: 8px;
                }
                li {
                    color: #000;
                    font-family: 'Coolvetica', 'Roboto', 'Times Sans Serif' Arial, sans-serif;
                    margin-bottom: 0.5em;
                }
                a {
                    color: inherit;
                    text-decoration: none;
                    font-size: 1.2em;
                    cursor: pointer;
                    padding: 0.5em 1em;
                    display: block;
                }
                color-fuente {
                    display: none;
                }
                color-fuente.active {
                    display: block;
                }
            </style>
            <ul>
                <li>
                    <a id="opc-color-fuente">Color de fuente</a>
                    <color-fuente></color-fuente>
                </li>
                <li><a href="color-fondo">Color de fondo</a></li>
                <li><a href="tamano-fuente">Tamaño de fuente</a></li>
                <li><a href="tipo-fuente">Tipo de fuente</a></li>
            </ul>
        `
    }

    connectedCallback(){
        const opcionColorFuente = this.shadowRoot.getElementById('opc-color-fuente');
        const popupColorFuente = this.shadowRoot.querySelector('color-fuente');

        opcionColorFuente.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            popupColorFuente.classList.toggle('active');
        });

        document.addEventListener('mousedown', (e) => {
            if (
                popupColorFuente.classList.contains('active') &&
                !this.shadowRoot.contains.apply(e.target)
            ) {
                popupColorFuente.classList.remove('active');
            }
        });

    }
}

customElements.define( 'ajustes-component', AjustesComponent)
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
                    min-width: 220px;
                    background: #4E6766;
                    list-style-type: none;
                    padding: 1em;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: flex-start;
                }
                li {
                    margin-bottom: 0.5em;
                    }
                a {
                    font-size: 1.3em;
                    font-family: 'Coolvetica', 'Roboto', 'Times Sans Serif' Arial, sans-serif;
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0.5em 1em;
                    display: block;
                    transition: background 0.2s;
                }
                color-fuente {
                    display: none;
                }
                color-fuente.active {
                    display: block;
                    cursor: pointer;
                    padding: 0.7em 2em;
                    transition: background 0.2s;
                }
                a:hover {
                    background:rgb(58, 67, 65);
                    color: #fff;
                }
            </style>
            <ul>
                <li>
                    <a id="opc-color-fuente">Color de fuente</a>
                    <color-selector tipo="texto" class="submenu"></color-selector>
                </li>
                <li>
                    <a id="opc-color-fondo">Color de fondo</a>
                    <color-selector tipo="fondo" class="submenu"></color-selector>
                </li>
                <li><a href="tamano-fuente">Tamaño de fuente</a></li>
                <li><a href="tipo-fuente">Tipo de fuente</a></li>
            </ul>
        `
    }

    connectedCallback(){
        const ajustesMenu = this.shadowRoot.querySelector('ul');
        const opcionColorFuente = this.shadowRoot.getElementById('opc-color-fuente');
        const opcionColorFondo = this.shadowRoot.getElementById('opc-color-fondo');
        const selectorColorFuente = opcionColorFuente.nextElementSibling;
        const selectorColorFondo = opcionColorFondo.nextElementSibling;

        opcionColorFuente.addEventListener('click', (e) => {
            e.preventDefault();
            selectorColorFuente.classList.toggle('active');
            selectorColorFondo.classList.toggle('active');
        });

        opcionColorFondo.addEventListener('click', (e) => {
            e.preventDefault();
            selectorColorFondo.classList.toggle('active');
            selectorColorFuente.classList.toggle('active');
        })

        ajustesMenu.addEventListener('mousedown', (e) => {
            e.stopPropagation();
        });

        document.addEventListener('mousedown', (e) => {
            if (
                (selectorColorFuente.classList.contains('active') || selectorColorFondo.classList.contains('active')) &&
                !this.shadowRoot.contains(e.target)
            ) {
                selectorColorFuente.classList.remove('active');
                selectorColorFondo.classList.remove('active');
            }
        });

    }
}

customElements.define( 'ajustes-component', AjustesComponent)
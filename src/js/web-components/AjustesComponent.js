class AjustesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow( { mode: 'open' });
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
                    background: #5AB1BB;
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
                    color: #000;
                    font-size: 1.3em;
                    font-family: 'Coolvetica', 'Roboto', 'Times Sans Serif' Arial, sans-serif;
                    text-decoration: none;
                    cursor: pointer;
                    padding: 0.7em 2em;
                    display: block;
                    transition: background 0.2s;
                }
                a:hover {
                    background: #4e6766;
                    color: #fff;
                }
            </style>
            <ul>
                <li><a href="color-fuente">Color de fuente</a></li>
                <li><a href="color-fondo">Color de fondo</a></li>
                <li><a href="tamano-fuente">Tamaño de fuente</a></li>
                <li><a href="tipo-fuente">Tipo de fuente</a></li>
            </ul>
        `
    }

    connectedCallback(){
    

    }
}

customElements.define( 'ajustes-component', AjustesComponent)
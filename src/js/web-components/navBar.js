class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
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
                nav {
                    width: 100%;
                    max-width: 100vw;
                    height: 80px;
                    background: #1E152A;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }
                ul {
                    width: 100%;
                    margin: 0;
                    list-style-type: none;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    gap: 6em;
                }
                li {
                    display: inline;
                    }
                a {
                    color: withe;
                    text-decoration: none;
                    font-size: 1.5em;
                    font-family: 'Coolvetica', 'Times Sans Serif', 'Roboto', Arial, sans-serif;
                    cursor: pointer;
                }
                #ajustes-popup {
                    display:none;
                    position: fixed;
                    top: 80px;
                    right: 2em;
                    z-index: 100;
                    max-height: 520px;
                    
                }
                #ajustes-popup.active {
                    display: block;
                }
            </style>
            <nav>
                <ul>
                    <li><a href="inicio">Inicio</a></li>
                    <li><a href="nosotros">Nosotros</a></li>
                    <li><a href="servicios">Servicios</a></li>
                    <li><a href="contactanos">Contáctanos</a></li>
                    <li>
                        <a id="ajustes-opc"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></a>
                    </li>
                </ul>
                <div id="ajustes-popup">
                    <ajustes-component></ajustes-component>
                </div>
            </nav>
        `;}

    connectedCallback(){
        const ajustesOpc = this.shadowRoot.getElementById('ajustes-opc');
        const ajustesPopup = this.shadowRoot.getElementById('ajustes-popup');

        ajustesOpc.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            ajustesPopup.classList.toggle('active');
        });

        document.addEventListener('mousedown', (e) => {
            if (
                ajustesPopup.classList.contains('active') &&
                !this.shadowRoot.contains(e.target)
            ) {
                ajustesPopup.classList.remove('active');
            }
        });
        
    }
}
customElements.define('nav-bar', NavBar);
class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    height: 50px;
                    background: #4E6766;
                    text-align: center;
                    justify-content: center;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                    display: flex;
                    align-items: center;
                    text-align: center;
                    justify-content: space-around;
                }
                li {
                    display: inline;
                }
                a {
                    text-decoration: none;
                    color: black;
                    font-size: 1rem;
                    font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                }
            </style>
            <nav>
                <ul>
                    <li><a href="inicio">Inicio</a></li>
                    <li><a href="nosotros">Nosotros</a></li>
                    <li><a href="servicios">Servicios</a></li>
                    <li><a href="contactanos">Contáctanos</a></li>
                    <li><a href="configuración"></a></li>
                </ul>
            </nav>
        `;}

    connectedCallBack(){
        this.render()
    }
}
customElements.define('nav-bar', NavBar);
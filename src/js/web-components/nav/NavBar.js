class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.configVisible = false;
        ;}
        
        connectedCallback(){
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        background-color: var(--nav-background-color, #333);
                        color: var(--nav-text-color, #fff);
                        font-family: var(--nav-font-family, 'Roboto', sans-serif);
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }
                    .navBar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1rem;
                        flex-wrap: wrap;
                    }
                    .links {
                        display: flex;
                        gap: 1rem;
                        flex-wrap: wrap;
                    }
                    button.ajustes-btn {
                        background: none;
                        border: none;
                        font-size: 1.5rem;
                        cursor: pointer;
                    }
                    .ajustes-panel {
                        width: 100%;
                        margin-top: 0.5rem;
                    }
                    @media (max-width: 600px) {
                        .navBar {
                            flex-direction: column;
                            align-items: flex-start;
                        }
                        .links {
                            width: 100%;
                            flex-direction: column;
                            gap: 0.5rem;
                        }
                    }
                </style>
                <div class="navBar">
                    <div class="links">
                        <nav-link label="Inicio" href="#Inicio"></nav-link>
                        <nav-link label="Nosotros" href="#Nosotros"></nav-link>
                        <nav-link label="Servicios" href="#Servicios"></nav-link>
                        <nav-link label="Contáctanos" href="#Contactanos"></nav-link>
                    </div>
                    <button class="ajustes-btn" title="Ajustes"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings-icon lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                </div>
                <div class="ajustes-panel" style="display: none;">
                    <ajustes-panel></ajustes-panel>
                </div>
            `
            
            this.shadowRoot.querySelector('.ajustes-btn').addEventListener('click', () => {
                this.configVisible = !this.configVisible;
                this.shadowRoot.querySelector('.ajustes-panel').style.display = this.configVisible ? 'block' : 'none';
            });
        }
}
customElements.define('nav-bar', NavBar);
export { NavBar };
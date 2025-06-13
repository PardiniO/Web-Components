class AjustesComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                .panel {
                    padding: 1rem;
                    border: 1px solid #ccc;
                    background: #f9f9f9;
                    width: 100%;
                    max-width: 400px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                    font-family: 'Roboto', sans-serif;
                }
                .section {
                    margin-bottom: 1rem;
                }
                .toggle {
                    background: none;
                    border: none;
                    font-weight: bold;
                    font-size: 1rem;
                    width: 100%;
                    text-align: left;
                    cursor: pointer;
                    padding: 0.5rem;
                    cursor: pointer;
                    border-bottom: 1px solid #ddd;
                }
                .content {
                    display: none;
                    padding: 0.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .content.active {
                    display: block;
                }
            </style>
            <div class="panel">
                <button id="ajustes-btn">

                </button>
                <div class="section">
                    <button class="toggle" data-target="text">Color de texto</button>
                    <div class="content" data-type="text">
                        <color-selector data-target="--nav-text-color"></color-selector>
                    </div>
                </div>
                <div class="section">
                    <button class="toggle" data-target="background">Color de fondo</button>
                    <div class="content" data-type="background">
                        <color-selector data-target="--nav-background-color"></color-selector>
                    </div>
                </div>
                <div class="section">
                    <button class="toggle" data-target="size">Tamaño de fuente</button>
                    <div class="content" data-type="size">
                        <font-size-selector data-target="--nav-font-size"></font-size-selector>
                    </div>
                </div>
                <div class="section">
                    <button class="toggle" data-target="font">Tipo de fuente</button>
                    <div class="content" data-type="font">
                        <font-type-selector data-target="--nav-font-type"></font-type-selector>
                    </div>
                </div>
            </div>
            `
        
        this.shadowRoot.querySelectorAll('.toggle').forEach(button => {
            button.addEventListener('click', () => {
                const target = button.dataset.target;
                this.shadowRoot.querySelectorAll('.content').forEach(content => {
                    content.classList.toggle('active', content.dataset.type === target);
                });
            });
        });

        const fontSelector = this.shadowRoot.querySelector('font-size-selector');
        fontSelector.addEventListener('change', (e) => {
            document.documentElement.style.setProperty('--nav-font-size', e.detail.value);
        });
    }
}
customElements.define('ajustes-component', AjustesComponent);
export { AjustesComponent };
class NavLink extends HTMLElement {
    constructor(parameter) {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const href = this.getAttribute('href') || '#';
        const label = this.getAttribute('label') || 'Link';

        this.shadowRoot.innerHTML = `
            <style>
                a {
                    color: var(--nav-text-color, #000);
                    text-decoration: none;
                    padding: 0.5em 1em;
                    display: block;
                    font-size: var(--nav-font-size, 16px);
                    font-family: var(--nav-font-family, 'Roboto', sans-serif);
                    cursor: pointer;
                    transition: background 0.2s;
                }
                a:hover {
                    background: rgba(0, 0, 0, 0.5);
                }
            </style>
            <a href="${href}">${label}</a>
        `;
    }
}
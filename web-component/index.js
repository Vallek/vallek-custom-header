import './header.js';

fetch("header.html")
	.then(stream => stream.text())
	.then(text => define(text));

function define(html) {
	class vallekHeader extends HTMLElement {
		
		constructor() {
			super();
			this._value = 0;
			let shadow = this.attachShadow({mode: 'open'});
			shadow.innerHTML = html;	
		}
	}
	
	customElements.define('vallek-header', vallekHeader);
}



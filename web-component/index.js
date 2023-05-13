import './header.js';

fetch("header.html")
	.then(stream => stream.text())
	.then(text => define(text));

function define(html) {
	class vallekHeader extends HTMLElement {
		set value(value) {
			this._value = value;
			this.valueElement.innerText = this._value;
		}
		
		get value() {
			return this._value;
		}
		
		constructor() {
			super();
			this._value = 0;
			
			let shadow = this.attachShadow({mode: 'open'});
			shadow.innerHTML = html;
			
		}
	}
	
	customElements.define('vallek-header', vallekHeader);
}



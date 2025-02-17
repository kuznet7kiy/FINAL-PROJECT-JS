import { Component } from '../../core/Component'

export class Button extends Component {
	setup(props) {
		this.$rootElement = document.createElement('button')

		this.$rootElement.textContent = props.text
		this.$rootElement.className = 'donate-form__submit-button'
		this.$rootElement.setAttribute('type', 'submit')

		this.$rootElement.disabled = true
		this.$rootElement.addEventListener('click', props.onClick)
	}

	enable() {
		this.$rootElement.disabled = false
	}

	disable() {
		this.$rootElement.disabled = true
	}
}

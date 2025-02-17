import { Component } from '../core/Component'
import { Button } from './ui/button'

export class Form extends Component {
	setup(props) {
		this.$rootElement = document.createElement('form')
		this.$rootElement.className = 'donate-form'

		const $label = document.createElement('label')
		$label.className = 'donate-form__input-label'
		$label.textContent = 'Введите сумму в $'

		const $donateInput = document.createElement('input')
		$donateInput.className = 'donate-form__donate-input'
		$donateInput.setAttribute('name', 'amount')
		$donateInput.setAttribute('type', 'number')
		$donateInput.setAttribute('max', '100')
		$donateInput.setAttribute('min', '1')
		$donateInput.required = true
		$donateInput.addEventListener('input', this.handleInput.bind(this))
		this.$donateInput = $donateInput

		$label.appendChild(this.$donateInput)

		const $button = new Button({
			text: 'Задонатить',
			onClick: this.handleSubmit.bind(this),
		})
		this.$button = $button

		this.$rootElement.append($label, this.$button.$rootElement)
	}

	handleInput(event) {
		const { target } = event
		console.log('я в хэндл инпут')
		if (target.value && !isNaN(Number(target.value))) {
			if (Number(target.value) <= 100 && Number(target.value) >= 1) {
				this.$button.enable()
			} else {
				this.$button.disable()
			}
		} else {
			this.$button.disable()
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		const currentDonationAmount = Number(this.$donateInput.value)
		if (this.props.onSubmit && currentDonationAmount) {
			this.props.onSubmit(currentDonationAmount)
		}

		this.$donateInput.value = ''
		this.$button.disable()
	}
}

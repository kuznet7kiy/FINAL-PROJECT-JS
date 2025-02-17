import { Component } from '../core/Component'

export class TotalAmount extends Component {
	setup(props) {
		this.$rootElement = document.createElement('h1')
		this.$rootElement.className = 'total-amount'
		this.$rootElement.textContent = `Итого: $`

		const $totalAmountSpan = document.createElement('span')
		this.totalAmount = 0
		this.$totalAmountSpan = $totalAmountSpan
		this.$totalAmountSpan.textContent = `${this.totalAmount}`

		console.log(toString(this.totalAmount))

		this.$rootElement.appendChild($totalAmountSpan)
	}

	setNewAmount(sumToAddUp) {
		this.totalAmount += sumToAddUp
		this.$totalAmountSpan.textContent = `${this.totalAmount}`
	}
}

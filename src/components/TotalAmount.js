import { Component } from '../core/Component'

export class TotalAmount extends Component {
	setup(props) {
		this.$rootElement = document.createElement('h1')
		this.$rootElement.className = 'total-amount'
		this.$rootElement.textContent = `Итого: $`

		const $totalAmountSpan = document.createElement('span')
		$totalAmountSpan.textContent = this.props.totalAmount //TODO

		this.$rootElement.appendChild($totalAmountSpan)
	}
}

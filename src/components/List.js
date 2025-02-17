import { Component } from '../core/Component'

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'donates-container'

		const $listHeading = document.createElement('h2')
		$listHeading.className = 'donates-container__title'
		$listHeading.textContent = 'Список донатов'

		this.$rootElement.appendChild($listHeading)

		const $donates = document.createElement('div')
		$donates.className = 'donates-container__donates'
		this.$donates = $donates

		this.$rootElement.appendChild($donates)
	}

	addItem(item) {
		this.$donates.appendChild(item.$rootElement)
	}
}

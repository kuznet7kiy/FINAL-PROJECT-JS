import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { TotalAmount } from './TotalAmount'

export class App extends Component {
	setup(props) {
		console.log('я в сетапе App')

		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'app'

		const totalAmount = new TotalAmount()
		this.$rootElement.appendChild(totalAmount.$rootElement)

		const donateForm = new Form()
		this.$rootElement.appendChild(donateForm.$rootElement)
		const donateList = new List()
		this.$rootElement.appendChild(donateList.$rootElement)
	}

	onItemCreate(amount) {
		// ...
	}
}

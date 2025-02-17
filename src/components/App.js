import { Component } from '../core/Component'
import { Form } from './Form'
import { List } from './List'
import { ListItem } from './ListItem'
import { TotalAmount } from './TotalAmount'

export class App extends Component {
	setup(props) {
		console.log('я в сетапе App')

		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'app'

		this.totalAmount = new TotalAmount()
		this.$rootElement.appendChild(this.totalAmount.$rootElement)

		const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) })
		this.$rootElement.appendChild(donateForm.$rootElement)

		this.donateList = new List()
		this.$rootElement.appendChild(this.donateList.$rootElement)
	}

	onItemCreate(amount) {
		console.log('onItemCreate amount:', amount)
		const newListItem = new ListItem({ amount })
		this.donateList.addItem(newListItem)
		this.totalAmount.setNewAmount(amount)
	}
}

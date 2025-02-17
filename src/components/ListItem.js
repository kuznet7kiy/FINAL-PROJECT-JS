import moment from 'moment'
import { Component } from '../core/Component'

export class ListItem extends Component {
	setup(props) {
		this.props.amount = props.amount
		this.$rootElement = document.createElement('div')
		this.$rootElement.className = 'donate-item'
		const formatedDate = moment().format('DD/MM/YYYY')
		const formatedTime = moment().format('HH:mm:ss')
		this.$rootElement.textContent = `${formatedDate}, ${formatedTime} - `
		//тут не понимаю, почему никаким способом не получилось добавить пробел между тире и суммой
		const $amountInBTag = document.createElement('b')
		$amountInBTag.innerText = ` $${this.props.amount}`
		this.$amountInBTag = $amountInBTag
		this.$rootElement.insertAdjacentElement('beforeend', $amountInBTag)
	}
}

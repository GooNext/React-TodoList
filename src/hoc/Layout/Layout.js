import React from 'react'
import classes from './Layout.module.scss'
import List from '../../components/List/List'

class Layout extends React.Component {

    state = {
        list : [],
        text: ''
    }
    
    handlelist = (event) => {
        this.setState({
            text: event.target.value
        })
        console.log(this.state.list)
    }

    addList = (event, index) => {
        event.preventDefault()
        if (this.state.text){
            const newList = this.state.list
            newList.push(this.state.text)
    
            this.setState({
                list : newList,
                text: ''
            })

        } else {
            alert('Enter your task in input')
        }
    }
    removeList = (index) => {
        this.setState({
            list: this.state.list.filter((i) => {
                return i !== index
            })
        })
    }

    render(){
        return (
            <div className = {classes.Layout}>
                <h1>TodoList</h1>
                <List
                    li = {this.state.list}
                    removeList = {this.removeList}
                    completeTask = {this.completeTask}
                />
                <form onSubmit = {this.addList}>
                    <input value = {this.state.text} onChange = {this.handlelist.bind(this)} placeholder = 'Enter your task'/>
                    <button type = 'submit'>Add task</button>
                </form>
            </div>
        )
    }
}

export default Layout
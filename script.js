

class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            inputToDo: ''
        }

    }

    // pour la suppression
    deleteTask(index) {
        //creer une copie du tableau
        const copieTodos = [...this.state.todos]
        //supprimer l'élément à l'index
        copieTodos.splice(index, 1)
        //maintenant modifier le state et rempalcer le todo par le nouveau tab
        { this.setState({ todos: copieTodos }) }
    }

    //pour la modification
    editTask(todoId) {
        // identification de l'item
        let taskToEdit = this.state.todos.find(todo => todo.id == todoId)

        // recup la position ou l'index de l'item
        let taskIndex = this.state.todos.indexOf(taskToEdit)

        //creer une copie du tableau
        const copieTodos = [...this.state.todos]

        //modiff
        let editedTask = { ...taskToEdit, title: prompt('entrez le nouveau nom') }

        //remplacer 
        copieTodos[taskIndex] = editedTask
        { this.setState({ todos: copieTodos }) }
        console.log({ taskToEdit, editedTask, taskIndex });
    }


    render() {
        return (
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h1>To-Do List</h1>
                    <div className="input-group mb-3">
                        <input
                            value={this.state.inputToDo}
                            onChange={(e) => {
                                this.setState({
                                    inputToDo: e.target.value
                                })
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Ajoutez une tâche"
                        />
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => {
                                const newTodo = { id: Math.random(), title: this.state.inputToDo }
                                if (this.state.inputToDo) {
                                    this.setState({ todos: [...this.state.todos, newTodo] })
                                    { this.state.inputToDo = "" }
                                } else {
                                    alert('entrez une tâche valide')
                                }
                            }}>
                            <i className="fa fa-plus-circle" aria-hidden="true"></i>
                        </button>
                    </div>
                    <ul className="list-group shadow">
                        {this.state.todos.map((todo, index) => {
                            console.log(todo);
                            return <li className="p-2 " key={index}>
                                {todo.title}
                                <button
                                    className="btn btn-outline-primary ms-2"
                                    onClick={() => this.deleteTask(index)}>

                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                                <button
                                    className="btn btn-outline-primary ms-2"
                                    onClick={() => this.editTask(todo.id)}>
                                    <i className="fa fa-pen" aria-hidden="true"></i>
                                </button>

                            </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}
ReactDOM.createRoot(document.getElementById('root')).render(<Todos />)
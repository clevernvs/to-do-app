import React from 'react'
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm/>
        <TodoList/>
    </div>            
)

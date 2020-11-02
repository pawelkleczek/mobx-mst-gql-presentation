import React from 'react'
import { Flex } from 'rebass'
import { observer } from 'mobx-react-lite'

import { Todo as TodoModel } from 'models/Todo'

import { Todo } from './Todo'

export const TodoList = observer(({
  todos,
  onDelete
}: {
  todos: TodoModel[],
  onDelete: (id: string) => void
}) => {
  return (
    <Flex flexDirection="column">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </Flex>
  )
})

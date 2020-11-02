import React from 'react'
import { Box, Flex } from 'rebass'
import { Check2Circle, Circle, Trash } from 'react-bootstrap-icons'
import { Button } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { Todo as TodoModel } from 'models/Todo'

export const Todo = observer(({
  todo,
  onDelete
} : {
  todo: TodoModel,
  onDelete: (id: string) => void
}) => {
  return (
    <Flex alignItems="center">
      <Button
        onClick={() =>
          todo.toggle()
        }
      >
        <Box>
          {todo.completed ? <Check2Circle /> : <Circle />}
        </Box>
      </Button>
      <Box>
        {todo.title}
      </Box>
      <Box ml="auto">
        <Button onClick={() => onDelete(todo.id)}>
          <Trash />
        </Button>
      </Box>
    </Flex>
  )
})


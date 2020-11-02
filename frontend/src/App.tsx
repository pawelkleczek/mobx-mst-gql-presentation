import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'rebass'
import { TextField, Typography, CircularProgress } from '@material-ui/core'
import { observer } from 'mobx-react-lite'

import { Todo } from 'models/Todo'
import { Store } from 'models/Store'
import { TodoList } from 'components/TodoList'

const store =
  new Store([
    new Todo('podlać kwiatki'),
    new Todo('przekopać grządkę')
  ])

const App = observer(() => {
  const [text, setText] = useState('')
  useEffect(() => {
    // store.fetchJson()
  }, [])
  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      flexDirection="column"
      pt="128px"
    >
      <Flex flexDirection="column" width={["100%", "70%", "50%"]} p="15px">
        <Flex mb="15px">
          <Typography variant="h3" style={{ fontFamily: 'Roboto' }}>
            todos
          </Typography>
          {store.state === 'pending' && (
            <Box>
              <CircularProgress />
            </Box>
          )}
        </Flex>
        <Box mb="15px">
          <form onSubmit={(e) => {
            e.preventDefault()
            store.addTodo(new Todo(text))
            setText('')
          }}>
            <TextField
              variant="outlined"
              placeholder="What needs to be done?"
              style={{ width: '100%' }}
              onChange={({ target: { value } }) => {
                setText(value);
              }}
              value={text}
            />
          </form>
        </Box>
        <TodoList todos={store.todos} onDelete={store.deleteTodo} />
        <Box mt="15px">
          <Typography style={{ fontFamily: 'Roboto' }}>
            Unfinished todos: {store.unfinishedTodoCount}
          </Typography>
        </Box>
      </Flex>
    </Flex>
  );
})

export default App;

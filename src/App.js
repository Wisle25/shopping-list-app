/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import Navbar from './components/NavBar'
import Container from './components/Container'
import SearchInput from './components/SearchInput'
import Info from './components/Info'
import Todos from './components/Todos'
import Empty from './components/Empty'

function App () {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    { title: 'Susu Ultra', count: 1 },
    { title: 'Indomie', count: 1 },
    { title: 'Oreo', count: 1 }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('Tidak boleh kosong woi!')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos)
    setValue('')
  }

  const handleAdditionalCount = (index) => {
    const newTodos = [...todos]

    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos)
  }

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos]

    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1
    } else {
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    }, 0)

    return totalCounts
  }
  return (
    <>
      <Navbar />

      <Container>
        <SearchInput onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)} value={value}/>

        <Info todosLength={todos.length} totalCounts={getTotalCounts()} onDelete={() => setTodos([])}/>
        {todos.length > 0
          ? (
            <Todos todos={todos} onAdditon={(index) => handleAdditionalCount(index)} onSubstraction={(index) => handleSubstractionCount(index)}/>
            )
          : (
          <Empty />
            )}
      </Container>
    </>
  )
}

export default App

import React from 'react'
import styled from "styled-components"
const Box = styled.main`
  width: 260px;
  height: 50px;
  background: linear-gradient(90deg, #f60000 0%, #f60000 100%);
  margin: 0 auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: capitalize;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
`;
function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <Box key={todo.id} >
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
        </Box>
    )
}

export default ToDo
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Checkbox, Button, Typography } from '@mui/material';

const TodoList = ({ todos, onUpdate, onDelete }) => {
    return (
        <Droppable droppableId="todos">
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                        marginTop: '20px',
                        background: 'linear-gradient(135deg,rgb(200, 146, 104),rgb(22, 83, 82))',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {todos.map((todo, index) => (
                        <Draggable key={todo._id} draggableId={todo._id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        ...provided.draggableProps.style,
                                        marginBottom: '10px',
                                        backgroundColor: '#fff',
                                        padding: '15px',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Checkbox
                                            checked={todo.completed}
                                            onChange={() => onUpdate(todo)}
                                            color="primary"
                                        />
                                        <Typography
                                            style={{
                                                textDecoration: todo.completed ? 'line-through' : 'none',
                                                marginRight: '10px',
                                            }}
                                        >
                                            {todo.title}
                                        </Typography>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => onDelete(todo._id)}
                                        size="small"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;

import React, { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../api/todoApi';
import TodoList from '../components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';
import { TextField, Button, Container, Paper } from '@mui/material';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        const { data } = await fetchTodos();
        setTodos(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title) return;
        await createTodo({ title });
        setTitle('');
        getTodos();
    };

    const handleUpdate = async (todo) => {
        await updateTodo(todo._id, { completed: !todo.completed });
        getTodos();
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        getTodos();
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return; // Dropped outside

        const items = Array.from(todos);
        const [removed] = items.splice(source.index, 1);
        items.splice(destination.index, 0, removed);

        setTodos(items);
    };

    return (
        <div style={{ 
            background: 'linear-gradient(135deg,rgb(22, 83, 82),rgb(200, 146, 104))', 
            minHeight: '100vh', 
            paddingTop: '20px' 
        }}>
            <Container style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2>Todo List</h2>
                <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                    <TextField
                        label="Enter Todo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        variant="outlined"
                        fullWidth
                        style={{ marginBottom: '10px' }}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Add Todo
                    </Button>
                </form>

                <Paper style={{ padding: '20px' }}>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
                    </DragDropContext>
                </Paper>
            </Container>
        </div>
    );
};

export default Home;

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001/api' });

export const fetchTodos = () => API.get('/todos');
export const createTodo = (newTodo) => API.post('/todos', newTodo);
export const updateTodo = (id, updatedTodo) => API.put(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);

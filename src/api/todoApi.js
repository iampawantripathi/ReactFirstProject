import axios from 'axios';

const API = axios.create({ baseURL: 'http://13.51.238.79:3001/api' });

export const fetchTodos = () => API.get('/todos');
export const createTodo = (newTodo) => API.post('/todos', newTodo);
export const updateTodo = (id, updatedTodo) => API.put(`/todos/${id}`, updatedTodo);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);

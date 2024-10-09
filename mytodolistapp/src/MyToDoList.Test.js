import { render, screen, fireEvent } from '@testing-library/react';
import MyTodoList from './MyToDoList.js';

describe('MyTodoList Component', () => {
  test('renders without crashing', () => {
    render(<MyTodoList />);
  });

  test('renders the title', () => {
    render(<MyTodoList />);
    const titleElement = screen.getByText(/Assignment 2: My ToDo List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders form elements', () => {
    render(<MyTodoList />);
    const todoInput = screen.getByPlaceholderText(/Add todo Entry/i);
    const dueDateInput = screen.getByLabelText(/Due Date/i);
    const addButton = screen.getByText(/Add Todo/i);

    expect(todoInput).toBeInTheDocument();
    expect(dueDateInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('renders todo entries', () => {
    render(<MyTodoList />);
    const todoEntries = screen.getAllByRole('tab');
    expect(todoEntries.length).toBe(4); 
  });

  test('renders todo entries with correct titles', () => {
    render(<MyTodoList />);
    const todoTitles = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'];
    todoTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  const getVariant = (dueDate) => {
    const currentDate = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = Math.abs(dueDateObj - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays > 7) return 'primary';
    if (diffDays <= 7 && diffDays > 4) return 'success';
    if (diffDays <= 4 && diffDays > 2) return 'warning';
    return 'danger';
  };
  
  test('applies correct variant based on due date', () => {
    render(<MyTodoList />);
    const todoEntries = screen.getAllByRole('tabpanel');
    const todoTab = screen.getAllByRole('tablist');
  
    let variants = [];
    todoEntries.forEach((item) => {
      const input = entry.querySelector('input');
      const dueDate = input.getAttribute('value');
      const expectedVariant = getVariant(dueDate);
      variants.push(expectedVariant);
    });

    todoTab.forEach((entry, index) => {
        const anchor = item.querySelector('a');
        expect(anchor).toHaveClass(`list-group-item-${variants[index]}`);
        
    });


  });

});
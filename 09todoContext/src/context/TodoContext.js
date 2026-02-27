import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos: [{
        id: 1,
        Todo: "Todo text",
        completed: false,
    }],
    addTodo: (Todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, Todo) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
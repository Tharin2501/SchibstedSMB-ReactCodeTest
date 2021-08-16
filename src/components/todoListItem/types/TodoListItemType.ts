type TodoType = {
    text: string;
    complete: boolean;
};
  
export type TodoListItemType = {
    todo: TodoType;
    toggleTodo: (selectedTodo: TodoType) => void;
   
};

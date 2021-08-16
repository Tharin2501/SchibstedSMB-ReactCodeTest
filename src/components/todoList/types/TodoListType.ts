export type todoType = {
    text: string;
    complete: boolean;
};

export type TodoListType = {
    workTodos: todoType[];
    stuffTodos: todoType[];
    shoppingTodos: todoType[];
};

export type todoCategoryType = {
    id: number;
    name: string;
};

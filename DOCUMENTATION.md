You can document your choices here.

## How to Run

1. yarn install in root, this will generate a node_modules directory that hold the dependencies
2. yarn start in root
3. Go to http://localhost:1234/

## Components

### Buttons

- The ordinary buttons are used multiple times so it should be a single reusable component.
- Checkboxes are a little harder to style because you cant override styling directly on the native checkbox
  Had to hide the native checkbox with css and create another custom checkbox

### Header

- Just a simple rectangle header with a single title prop

### TodoInput

- Responsible for Adding a todo to the list
- First displaying of error if input is empty
- Takes inn a function addTodo as prop, with the functionality of adding a todo passed from parent.
- Centered flex row with 2 flex items (Input and Button)

### TodoList

- Takes inn all the 3 list of todos and add a state to them
- ButtonList function: that map over todo categories(object with 3 key-value pair). Set the id of the object to state(ButtonId) onclick and compare the state with actual id to modify bg-color and color with props
- Addtodo function: Create plain js object with same structure as a todo. switch case that takes in the ButtonId and concatenate the object to the different todolists

### TodoListItem

- Responsible for rendering the actual Todo item in the list with a checkbox and text
- Checkbox as controlled component.
- Rendered in the 3 todo lists in todoListCategory with the toggleTodo prop implementend in parent

**Note about controlled components:**

- _React handles the condition of the element by updating the checked/value attribute from the props or the state._<br/>
- _Need to notify React with changes to the conditon with an event-handler like onChange so that we can update the elements condition_

### TodoListCategory

- Map over and renders the todo data associated with the different todo-lists as a TodoListItem which uses the checkbox and Button for deleting a todo
- array.filter to remove the todo and update the new state

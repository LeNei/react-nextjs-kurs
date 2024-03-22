// Interfaces werden zum darstellen von Objekten genutzt
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

// ENUMS sind zum darstellen verschiedener Zustände
enum FilterOptions {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}

// Klassen für zusammenhängende Logik
class TodoList {
  private todos: Todo[];

  constructor(initialTodos: Todo[] = []) {
    this.todos = initialTodos;
  }

  addTodo(task: string): void {
    this.todos.push({
      id: Date.now(), // Simple ID generierung als Beispiel
      task,
      completed: false,
    });
  }

  getTodos(filter: FilterOptions = FilterOptions.ALL): Todo[] {
    // ...filtering logic here...
    return this.todos;
  }
}

// Funktionen erhalten für ihre Parameter und ihren Rückgabewert einen statischen Typ.
function filterTodos(todos: Todo[], filter: FilterOptions): Todo[] {
  switch (filter) {
    case FilterOptions.ACTIVE:
      return todos.filter(({ completed }) => !completed);
    case FilterOptions.COMPLETED:
      return todos.filter(({ completed }) => completed);
    case FilterOptions.ALL:
      return todos;
  }
}

// Der Rückgabetyp kann weg gelassen werden, wenn er dynamisch feststeht
function returnString() {
  return "hello";
}

// Generische Parameter können genutzt werden falls der Typ eines Wertes nicht von Bedeutung ist
function delay<T>(ms: number, value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
}

// Typ aliasse können zum Darstellen von Optionen genutzt werden
type TodoAppEvent = "add" | "toggle" | "filter";

// Intersection Typen können zum kompinieren verschiedener typen genutzt werden
type AppEvent = {
  [key in TodoAppEvent]?: any;
};
type UserInput = {
  task?: string;
  filter?: FilterOptions;
} & AppEvent;

// UNION TYPES
function handleEvent(event: UserInput) {
  if (event.add) {
    // Handle add event
  } else if (event.toggle) {
    // Handle toggle event
  }
}

// Let's use it!
const todoList = new TodoList([
  { id: Date.now(), task: "Learn TypeScript", completed: false },
]);
todoList.addTodo("Finish the example");

const todos = filterTodos(todoList.getTodos(), FilterOptions.ACTIVE);

delay(1000, "hello").then((result) => console.log(result));

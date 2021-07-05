import Todo from "./components/todo";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Todo title="Explore the full react course" />
    </div>
  );
};

export default App;

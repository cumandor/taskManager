import Header from "./components/header/Header";
import CompletedTasksPage from "./components/completedTasksPage/CompletedTasksPage"
import UncompletedTasksPage from "./components/uncompletedTasksPage/UncompletedTasksPage"
import AllTasks from "./components/allTasks/AllTasks";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/CompletedTasksPage" element={<CompletedTasksPage />} />
        <Route path="/UncompletedTasksPage" element={<UncompletedTasksPage />} />
      </Routes>

    </div>
  );
}

export default App;

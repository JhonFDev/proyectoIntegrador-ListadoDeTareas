import Header from "./components/Header"
// import Task from "./components/Task"
import {TaskList} from "./components/TaskList"
import "./App.css"

function App(){
    return <div className="app">
        <Header/>
        <TaskList/>
        {/* <Task/> */}
    </div>
}
export default App

// import { useState } from "react";
import Tasks from "./Task";
import "./TaskListStyle.css";
import Icon from "@mdi/react";
import {
  mdiTrashCanOutline,
  mdiNoteEditOutline,
  mdiNotePlusOutline,
} from "@mdi/js";
import { useEffect, useState } from "react";


// miStorage = window.localStorage;


export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);
  
  const addTask = () => {
    if (newTaskTitle) {
      const newTask = {
        title: newTaskTitle,
        completed: false, // Por defecto, una nueva tarea se establece como no completada.
        id: tasks.length + 1, // Genera un ID único para la tarea.
      };
  
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }
  };
  const listItems = Tasks.map((task) => (
    <div key={task.id}>
      <div className="cardforlist">
        <input
          type="checkbox"
          checked={task.completed ? true : false}
          key={task.id}
          className="btn"
        ></input>
        <div
          style={{
            opacity: task.completed ? "35%" : "100%",
            color: "black",
          }}
        >
          {task.title}
        </div>

        <div className="icon">
          <button className="btniconedit">
            <Icon path={mdiNoteEditOutline} size={1} color={"#646cff"} />
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <Icon path={mdiTrashCanOutline} size={1} color={"#e63739"} />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cardList">
      <div className="createtodo">
        <textarea
          placeholder="crear nueva tarea"
          className="input"
          cols={25}
          rows={4}
          maxLength={100}
          
        />
        <button className="btniconadd" onClick={addTask}>
          <Icon path={mdiNotePlusOutline} size={1.5} color={"#04caf1"} />
        </button>
      </div>
      <ul>{listItems}</ul>;
      
      <div className="footerbtntextcounter">
        <p>
          tienes tareas{" "}
          {Tasks.filter((completecounter) => !completecounter.completed).length}{" "}
          pendientes
        </p>
        <button className="btnfooter" type="reset">
          Borrar todo
        </button>
      </div>
    </div>
  );
};

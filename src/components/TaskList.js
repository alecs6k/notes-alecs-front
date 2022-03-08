import React from "react";
import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const loadTasks = async () => {
    const response = await fetch("https://note-serv.herokuapp.com/tasks");
    const data = await response.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
      try {
        await fetch(`https://note-serv.herokuapp.com/tasks/${id}`, {
            method: "DELETE",
        })
        setTasks(tasks.filter(task => task.id !== id));
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <h1>Lista de notas</h1>
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#064663",
          }}
          key={task.id}
        >
          <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
          }}>
            <div>
                <Typography color="#ECB365" >{task.title}</Typography>
                <Typography color="white" >{task.description}</Typography>
            </div>

            <div>
                <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
                >
                Editar
                </Button>

                <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
                style={{ marginLeft: ".5rem" }}
                >
                Eliminar
                </Button>
            </div>

          </CardContent>
        </Card>
      ))}
    </>
  );
}

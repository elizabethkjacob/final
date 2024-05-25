import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = () => {
  const [cardData, setCardData] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    fetchCardData();
  }, []);

  const fetchCardData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/todos');
      setCardData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
      setCardData(cardData.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/add">Add-Todo</Button>
        </Toolbar>
      </AppBar>

      <TableContainer component={Paper} sx={{ margin: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cardData.map((todo) => (
              <TableRow key={todo._id}>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.des}</TableCell>
                <TableCell>{todo.stat}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    variant="contained"
                    component={Link}
                    to={`/update/${todo._id}`}
                  >
                    Update
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(todo._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Button
                  size="small"
                  variant="contained"
                  component={Link}
                  to="/add"
                >
                  Add New Task
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;

const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;

function getEmployees() {
  const data = fs.readFileSync('employees.json', 'utf-8');
  return JSON.parse(data);
}

app.get('/', (req, res) => {
  res.send('Employee Server is working');
});

app.get('/employees', (req, res) => {
  const employees = getEmployees();
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server işləyir: http://localhost:${PORT}`);
});



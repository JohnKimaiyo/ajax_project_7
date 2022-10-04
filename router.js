const { Router } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employees = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_b',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// get employee
router.get('/employees', (request, response) => {
    response.json(employees);
});

// post request
router.post('/employee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    }
    employee.push(employee);
    console.log(`POST Request Received at server .. ${new Date().tolocate()}`);
    response.json(employee);
});

// [ut request
router.put('/employee/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last.name,
        email: request.body.gender,
        ip_address: request.body.ip_addresss
    };
    let existingEmployee = employees.find((employee) => {
        return employee.id === empID;
    });
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`PUT Request Recived at server .. ${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'put request is a success' });
});

// delete request
router.delete('/employees/:id', (request, response) => {
    let empId = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`delete Request Recived at server .. ${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete request is success' });
});

module.exports = router;


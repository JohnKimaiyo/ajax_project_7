import { Button } from 'bootstrap';
import { brainhttp } from './brainhttp';
const serverURL = `http://127.0.0.1:3001/api/employees`
//get button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployees();
});

let fetchEmployees = () => {
    let http = new brainhttp();
    let url = `{serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRows = '';
        for (let employee of employees) {
            tableRows += `<tr>
        <td>${employee.id}</td>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.email}</td>
        <td>${employee.gender}</td>
        <td>${employee.id_address}</td>
        </tr>
        `
        };
        document.querySelector('#table-body').innerHTML = tableRows
    });
    console.log(users);
}

// POST Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', function () {
    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'john',
        last_name: 'doe',
        email: 'male',
        ip_address: '127.0.0.5'
    };
    let http = new brainhttp();
    http.post(url, employee, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
});

// put request
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', function () {
    let empID = '_abcde';
    let employee = {
        id: empID,
        first_name: 'john',
        last_name: 'wislons',
        email: 'johnwislons@gmail.com',
        gender: 'male',
        ip_address: '255.555.555.555'
    }
    let url = `${serverURL}/employee/${empID}`;
    let http = new brainhttp();
    http.put(url, employee, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})

// delete button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', function () {
    let employeeID = `_vwxyz`
    let url = `${serverURL}/empoyees`;
    let http = new brainhttp();
    http.delete(url, (data));
    fetchEmployees();
})
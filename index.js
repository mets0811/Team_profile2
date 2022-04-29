const generateHTML = require('./src/generateHTML.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 
const fs = require('fs'); 
const inquirer = require('inquirer');

const allEmployees = []; 

function chooseEmployee(){
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role:",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID:"
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email:"   
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username:",
            when: (input) => input.role === "Engineer"   
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school:",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'input',
            name: 'officenumber',
            message: "Please enter the manager's officenumber:",
            when: (input) => input.role === "Manager"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])  .then(function(answers){
        if (answers.role === "Engineer") {
            var engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);

            allEmployees.push(engineer)

        } else if (answers.role === "Intern") {
           var intern = new Intern (answers.name, answers.id, answers.email, answers.school);
            allEmployees.push (intern)

            console.log(employee);
        } else if (answers.role ==="Manager"){
            var manager= new Manager (answers.name, answers.id, answers.email, answers.officenumber);
            allEmployees.push (manager)
        }
        if(answers.addEmployee===true){
            chooseEmployee(
            )
        
        }
        else{
            var txt=generateHTML(allEmployees)
            fs.writeFile('./dist/index.html', txt, err => {
                if(err) throw err
                console.log("htmlgenerated")
            })
        }
    })
}   
chooseEmployee()

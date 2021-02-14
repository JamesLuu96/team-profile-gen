const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const validator = require('email-validator')
const { generatePage, writeFile, css } = require(`./src/generatePage`)
let isEmployee = false
const employees = []

async function newEmployee(){
    
    await inquirer.prompt([
        {
            name: `role`,
            message: `What is your role?`,
            type: `list`,
            choices: ['Engineer', 'Intern'],
            when: function(){
                if(isEmployee){
                    return true
                }else{
                    return false
                }
            }
        },
        {
            name: `name`,
            message: `What is your name?`,
            type: `input`,
            validate: function(string){
                if(string){
                    return true
                } else{
                    return false
                }
            }
        },
        {
            name: `id`,
            message: `What is your ID Number?`,
            type: `number`,
            validate: function(number){
                if(number === NaN || number === null || number < 0){
                    return false
                } else{
                    return true
                }
            }
        },
        {
            name: `officeNumber`,
            message: `What is your office number?`,
            type: `number`,
            when: function(){
                if(!isEmployee){
                    return true
                }else{
                    return false
                }
            }
        },
        {
            name: `email`,
            message: `What is your e-mail?`,
            type: `input`,
            validate: function(email){
                if(validator.validate(email)){
                    return true
                }else{
                    console.log(`\nPlease enter a valid e-mail.`)
                    return false
                }
            }
        },
        // If Engineer
        {
            name: `github`,
            message: `What is your Github username?`,
            type: `input`,
            validate: function(github){
                if(github){
                    return true
                }else{
                    return false
                }
            },
            when: function({role}){
                if(role === `Engineer`){
                    return true
                } else{
                    return false
                }
            }
        },
        // If Intern
        {
            name: `school`,
            message: `What school do you go to?`,
            type: `input`,
            validate: function(school){
                if(school){
                    return true
                }else{
                    return false
                }
            },
            when: function({role}){
                if(role === `Intern`){
                    return true
                } else{
                    return false
                }
            }
        }
    ])
    .then(answers=>{
        const {name, id, email} = answers
        if(!answers.role){
            employees.push(new Manager(name, id, email, answers.officeNumber))
        } else if (answers.role === `Engineer`){
            employees.push(new Engineer(name, id, email, answers.github))
        } else if (answers.role === `Intern`){
            employees.push(new Intern(name, id, email, answers.school))
        }
        inquirer.prompt([
            {
                name: `newEmployeeConfirm`,
                type: `confirm`,
                message: `Would you like to add another employee?`,
                default: false
            }
        ])
        .then(x=>{
            if(x.newEmployeeConfirm){
                isEmployee = true
                newEmployee()
            } else{
                writeFile(`./dist/index.html`, generatePage(employees))
                .then(x=>console.log(x))
                writeFile(`./dist/styles.css`, css)
                .then(x=>console.log(x))
            }
        })
    })
}
console.log(`Team Manager's Information:`)
newEmployee()
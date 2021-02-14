const fs = require('fs')

function generatePage(array){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./styles.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    </head>
    <body>
        
        <header>
            <h1>
                My Team
            </h1>
        </header>

        <div class="main">
        ${generateEmployees(array)}
        </div>

    </body>
    </html>`
}

function generateEmployees(array){
    return array.map(object=>{
        const {name, id, email, role, officeNumber, github, school} = object;

        // Role
        let roleTag;
        let icon;
        switch(role){
            case `Manager`:
                roleTag = `<li>Office number: ${officeNumber}</li>`
                icon = `<i class="fas fa-user-tie"></i>`
                break;
            case `Engineer`:
                roleTag = `<li>Github: <a href="https://github.com/${github}" target="_blank">${github}</a></li>`
                icon = `<i class="fas fa-wrench"></i>`
                break;
            case `Intern`:
                roleTag = `<li>School: ${school}</li>`
                icon = `<i class="fas fa-walking"></i>`
                break;
        }
        return `
        <div class="employee">
        <div class="title">
            <h2>${name}</h2>
            <p>${icon}${role}</p>
        </div>
        <div class="info">
            <ul>
                <li>ID: ${id}</li>
                <li>Email: <a href="mailto:${email}" target="_blank">${email}</a></li>
                ${roleTag}
            </ul>
        </div>
        </div>`
    }).join('')
}

function writeFile(destination, text){
    return new Promise((resolve, reject)=>{
      fs.writeFile(destination, text, err =>{
        if(err){
          reject(err)
          return
        }
        resolve({
          ok: true,
          message: `File Created!`
        })
      })
    })
}

const css = `
* {
    padding: 0;
    margin: 0;
    color: white;
}

header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
    background-color: rgb(248, 88, 88);
}

.main{
    width: 95%;
    height: 85vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.employee {
    width: 14rem;
    box-shadow: 2px 2px 3px rgb(114, 113, 113);
    margin: 10px;
}

.employee .title{
    background-color: rgb(69, 113, 231);
    padding: 5px;
    text-align: center;
}

.employee .title h2 {
    margin: 5px 0 15px 0;
}

.employee i {
    margin: 0 3px;
}

.employee .info ul li{
    padding: 15px;
    color: black;
    list-style: none;
    border: 1px solid rgb(146, 146, 146);
}

.employee .info ul a {
    color: rgb(69, 158, 209);
}`

module.exports = { generatePage, writeFile, css }
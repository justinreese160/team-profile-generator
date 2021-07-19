const managerCard = (manager) => {
  return `
    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
    <div class="card-body">   
      <ul>
      <li>Manager Name: ${manager.name}</li>
      <li>Manager Id: ${manager.Id}</li>
      <li>Manager email: ${manager.email}</li>
      <li>Manager office number: ${manager.officeNumber}</li>
      </ul>
    </div>   
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    `;
};
const managerCard = (intern) => {
  return `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
      <div class="card-body">   
        <ul>
        <li>Manager Name: ${intern.name}</li>
        <li>Manager Id: ${intern.Id}</li>
        <li>Manager email: ${intern.email}</li>
        <li>Manager office number: ${intern.school}</li>
        </ul>
      </div>   
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      `;
};
const managerCard = (engineer) => {
  return `
      <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
      <div class="card-body">   
        <ul>
        <li>Manager Name: ${engineer.name}</li>
        <li>Manager Id: ${engineer.Id}</li>
        <li>Manager email: ${engineer.email}</li>
        <li>Manager office number: ${engineer.gitHub}</li>
        </ul>
      </div>   
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      `;
};

const generateHTML = (teamMembers) => {
  const cardArray = [];

  teamMembers.forEach((item) => {
    if (item.role === manager) {
      cardArray.push(managerCard(item));
    } else if (item.role === engineer) {
      cardArray.push(engineerCard(item));
    } else if (item.role === intern) {
      cardArray.push(internCard(item));
    }
  });

  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />

    <title>Document</title>
  </head>
  <body>
    <header>My Team</header>
    ${cardArray}
  </body>  
    `;
};

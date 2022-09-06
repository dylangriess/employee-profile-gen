//this will export data into HTML mockup and then written into outputindex.html
module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap.min.css" integrity="sha512-XWTTruHZEYJsxV3W/lSXG1n3Q39YIWOstqvmFsdNEEQfHoZ6vm6E9GK2OrF6DSJSpIbRbi+Nn0WDPID9O7xB2Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>Employee Profiles</title>

  </head>
  <body>
    <header class="d-flex flex-wrap justify-content-center container-fluid text-light bg-danger p-5">
      <h1>Our Team</h1>
    </header>
    <main class="container-fluid">
      <section class = "d-flex flex-wrap justify-content-evenly m-3">
        <!--Employee Cards-->
        ${teamMembers(team)}

      </section>
    </main>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js"
      integrity="sha512-8Y8eGK92dzouwpROIppwr+0kPauu0qqtnzZZNEF8Pat5tuRNJxJXCkbQfJ0HlUG3y1HB3z18CSKmUo7i2zcPpg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </body>
</html>`;
};
//teamMembers function holds manager, engineer and intern data to create HTML
const teamMembers = (teamMembers) => {
  const generateManager = (manager) => {
    return `
  <div class="card shadow m-3" style="width: 18rem">
    <div class="card-header bg-primary text-light">
    <h2>${manager.name}</h2>
      <div class="d-flex">
        <i class="fa-solid fa-mug-hot m-1"></i>
        <h4 class="m-1">Manager</h3>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}" class="card-link">${manager.email}</a></li>
      <li class="list-group-item">Office: ${manager.officeNum}</li>
    </ul>
  </div>`;
  };

  const generateEngineer = (engineer) => {
    return `
  <div class="card shadow m-3" style="width: 18rem">
    <div class="card-header bg-primary text-light">
    <h2>${engineer.name}</h2>
      <div class="d-flex">
        <i class="fa-solid fa-glasses m-1"></i>
        <h4 class="m-1">Engineer</h3>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}" class="card-link">${engineer.email}</a></li>
      <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" class="card-link">${engineer.github}</li>
    </ul>
  </div>`;
  };

  const generateIntern = (intern) => {
    return `
  <div class="card shadow m-3" style="width: 18rem">
    <div class="card-header bg-primary text-light">
      <h2>${intern.name}</h2>
      <div class="d-flex">
        <i class="fa-solid fa-graduation-cap m-1"></i>
        <h4 class="m-1">Intern</h3>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}" class="card-link">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`;
  };
  const cardsArray = [];
  //cards filtered by getRole() --> calls function for individual position
  cardsArray.push(
    teamMembers
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  cardsArray.push(
    teamMembers
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  cardsArray.push(
    teamMembers
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  //return final cardsArray
  return cardsArray.join("");
};

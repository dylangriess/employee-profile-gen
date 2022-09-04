module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/css/bootstrap-grid.css"
      integrity="sha512-bNJr+jVWHx74QbOOQeiQmwch8ZZR05dvbytcqZpXSNY0IvN+yhIqHbPnRktg+dDhYGSyDxlXFYWRITSw8uGdiA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css" />
    <title>Employee Profiles</title>

  </head>
  <body>
    <header class ="d-flex flex-wrap text-center p-5">
      <h1>Our Team</h1>
    </header>
    <main>
      <section class = "d-flex flex-wrap justify-content-evenly p-5">
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

const teamMembers = (team) => {
  const generateManager = (manager) => {
    return `
  <div class="card shadow" style="width: 18rem">
    <div class="card-header bg-primary text-light">
      <h2>${manager.name}</h2>
      <div>
        <h3>Manager</h3>
        <i class="fa-solid fa-mug-hot m-3"></i>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office: ${manager.officeNum}</li>
    </ul>
  </div>`;
  };

  const generateEngineer = (engineer) => {
    return `
  <div class="card shadow" style="width: 18rem">
    <div class="card-header bg-primary text-light">
      <h2>${engineer.name}</h2>
      <div>
        <h3>Manager</h3>
        <i class="fa-solid fa-glasses m-3"></i>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">Github: ${engineer.github}</li>
    </ul>
  </div>`;
  };

  const generateIntern = (intern) => {
    return `
  <div class="card shadow" style="width: 18rem">
    <div class="card-header bg-primary text-light">
      <h2>${intern.name}</h2>
      <div>
        <h3>Manager</h3>
        <i class="fa-solid fa-graduation-cap m-3"></i>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`;
  };
  const cardsArray = [];
  cardsArray.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  cardsArray.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
  );
  cardsArray.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
  );
  return cardsArray.join("");
};

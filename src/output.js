const generateManager = (manager) => {
  return `<div class="card" style="width: 18rem">
  <div class="card-header">${manager.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.name}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">Office: ${manager.officeNum}</li>
  </ul>
</div>`;
};

const generateEngineer = (engineer) => {
  return `<div class="card" style="width: 18rem">
  <div class="card-header">${engineer.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">Github: ${engineer.github}</li>
  </ul>
</div>`;
};

const generateIntern = (intern) => {
  return `<div class="card" style="width: 18rem">
  <div class="card-header">${intern.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.name}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>`;
};

const generateTeamCards = (teamCards) => {
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
    <title>Employee Profiles</title>
  </head>
  <body>
    <section>
      <!--Manager Card-->
      
      <!--Engineer Card-->
      <div class="card" style="width: 18rem">
        <div class="card-header">Featured</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.name}</li>
          <li class="list-group-item">A${manager.name}</li>
          <li class="list-group-item">${manager.name}</li>
        </ul>
      </div>

      <div class="card" style="width: 18rem">
        <div class="card-header">Featured</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.name}</li>
          <li class="list-group-item">A${manager.name}</li>
          <li class="list-group-item">${manager.name}</li>
        </ul>
      </div>
    </section>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.0/js/bootstrap.min.js"
      integrity="sha512-8Y8eGK92dzouwpROIppwr+0kPauu0qqtnzZZNEF8Pat5tuRNJxJXCkbQfJ0HlUG3y1HB3z18CSKmUo7i2zcPpg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
  </body>
</html>`;
};

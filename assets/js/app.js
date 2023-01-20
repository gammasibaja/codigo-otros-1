const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById('name');
const $b = document.getElementById('blog');
const $l = document.getElementById('location');


async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  
  console.log(response);
  $n.textContent = `${response.name}`;
  $b.textContent = `${response.blog}`;
  $l.textContent = `${response.location}`;
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
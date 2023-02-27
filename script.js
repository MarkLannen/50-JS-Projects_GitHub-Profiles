const APIURL = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('bradtra');
async function getUser(username) {
  try {
    const res = await axios.get(APIURL + username);
    console.log(res.data);
  } catch (err) {
    console.log('error:' + err);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = '';
  }
});

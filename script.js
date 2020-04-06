async function showAvatar(name) {
  // read github user
  let githubUser = await axios.get(`https://opentdb.com/api.php?amount=20&category=12&difficulty=medium&type=boolean`);

  console.log(githubUser);
}

showAvatar('your-username-here');
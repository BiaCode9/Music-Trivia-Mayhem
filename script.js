async function getInfo() {
  try {
    const results = await axios.get(`https://opentdb.com/api.php?amount=20&category=12&difficulty=medium&type=boolean`);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getInfo();



// NOW ADD DATA TO THE DOM ...




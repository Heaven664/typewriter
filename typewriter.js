const sentence = "hello there from lighthouse labs";

const  printDelayed = (sentence) => {
  let timer = 50;
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
    timer += 50;
  }
  setTimeout(() => {
    console.log();
  }, timer);
};

printDelayed(sentence);
let animation = ['|','/','-','\\','|','/','-','\\','|'];
let timer = 100;
for (let letter of animation) {
  setTimeout(() => {
    process.stdout.write(`\r${letter}   `);
  }, timer);
  timer += 200;
}



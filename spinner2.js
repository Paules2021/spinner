let delay =0
for(let i=0 ;i<5;i++){
setTimeout(() => {
  process.stdout.write('\r|   ');
}, delay +=100);

setTimeout(() => {
  process.stdout.write('\r/   ');
},delay += 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, delay += 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, delay += 700);
i ++}

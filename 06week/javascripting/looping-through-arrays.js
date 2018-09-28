var pets = ['cat','dog','rat'];
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  pets[i] = pets[i] + 's';
}
console.log(pets);

  
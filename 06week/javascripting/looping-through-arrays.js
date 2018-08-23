var pets = ['cat', 'dog', 'rat'];
for (var i = 0, length = pets.length; i < length; i++) {
  pets[i] = pets[i] + 's';
}
console.log(pets);
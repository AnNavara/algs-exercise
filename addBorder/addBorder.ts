function addBorder(picture: string[]): string[] {
  let border = '*'.repeat(picture[0].length + 2);
  let arr = picture.map(e => '*' + e + '*');
  arr.unshift(border)
  arr.push(border);
  return arr;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abc", "ded", "cec"]));
console.log(addBorder(["abcd", "dede"]));
const exampleA = ['a', 'b', 'c'];
const exampleB = [1, 2, 3];

function zipList(listA, listB) {
  if (listA.length !== listB.length) {
    console.log('Given lists in parameters of zipList are not the same length');
    return [];
  }
  const newList = [];
  for (let i = 0; i < listA.length; i++) {
    newList.push(listA[i]);
    newList.push(listB[i]);
  }
  return newList;
}

function zipListTheSimpleWay(listA, listB) {
  if (listA.length !== listB.length) {
    console.log('Given lists in parameters of zipList are not the same length');
    return [];
  }
  return _.flatten(_.zip(listA, listB));
}

console.log(zipList(exampleA, exampleB));
console.log(zipListTheSimpleWay(exampleA, exampleB));



// * 문제1
// 문제: 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

function getValueAtObject(obj, key) {
  let arrKeys = Object.keys(obj);
  let arrValues = Object.values(obj);

  for (let i = 0; i < arrKeys.length; i++) {
    if (key === arrKeys[i]) {
      return arrValues[i];
    }
  }

  throw new Error("Error !");

}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !

// * 문제2
// 문제: 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
// 설명: 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

function getNumberAtArray(arr, index) {
  let arrIndex = Array();
  for(let i = 0; i< arr.length; i++){
    arrIndex.push(i)
  if (index === arrIndex[i]) {
    return arr[i];
  }
  };
    throw new Error('Error!')
  
  // return arrIndex;
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
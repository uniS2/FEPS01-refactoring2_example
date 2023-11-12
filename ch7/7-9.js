function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don';
    }
    if (people[i] === 'John') {
      return 'John';
    }
    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }
  return '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));

// 알고리즘 교체하기 (책 7.9)
// 상황 : foundPerson함수는 사람을 찾는 알고리즘입니다. 사람들을 받아서 Don, John, Kent를 찾으면 종료합니다.
// 기대 : if문과 for문은 가독성을 해친다고 생각합니다. 더 좋은 방법이 있을까요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

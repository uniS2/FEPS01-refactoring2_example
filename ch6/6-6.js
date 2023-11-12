let defaultOwner = { firstName: '마틴', lastName: '파울러' };

function getDefaultOwner() {
  return defaultOwner;
}

const owner = getDefaultOwner();
owner.firstName = '사자';
console.log(owner);
console.log(getDefaultOwner());
// 변수 캡슐화하기 (책 6.6)
// 상황 : 실행하면 owner의 이름도, getDefaultOwener()의 이름도 바뀌었습니다.
// 기대 : 바뀌게하고 싶지 않아요(hint : immutable, 얕은복사, 깊은복사 )
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

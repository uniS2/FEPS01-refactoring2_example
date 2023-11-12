const organization = { name: 'Acme Gooseberries', country: 'GB' };

organization.name = 'nice lion';
console.log(organization.name);
console.log(organization.country);

// 레코드 캡슐화하기 (책7.1)
// 상황 : 외부에서 기존에 선언한 데이터인 organization의 name과 country를 바꾸고 있다.
// 기대 : 외부에서 기존 데이터를 바꾸지 못하도록 하고 싶다.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

//# 레코드 캡슐화하기 (책7.1)
class Organization {
  #name;
  #country;

  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  get country() {
    return this.#country;
  }
}

const organization = new Organization({ name: 'Acme Gooseberries', country: 'GB' });

//^ 캡슐화(private 필드)를 통해 프로퍼티 값을 바꿀 수 없도록 지정해주었다.
// organization.name = 'nice lion';  // TypeError: Cannot set property name of #<Organization> which has only a getter
console.log(organization.name);
console.log(organization.country);

//# 상황 : 외부에서 기존에 선언한 데이터인 organization의 name과 country를 바꾸고 있다.
// 기대 : 외부에서 기존 데이터를 바꾸지 못하도록 하고 싶다.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return this.#courses;
  }

  set courses(courses) {
    this.#courses = courses;
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const lion = new Person('사자');
lion.courses.push(new Course('리팩토링', true));
console.log(lion.courses.length);

// 컬렉션 캡슐화하기 (책 7.2)
// 상황 : 사자라는 사람이 리팩토링이라는 과목을 수강하고 있다.
// 기대 : 사자 내부에 있는 courses가 너무 노출되고 있지 않은가?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

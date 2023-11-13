//# class 프리미엄  예약  // 메소드콜
//# class 일반     예약 // 메소드콜

export default class Book {
  #reservations;

  constructor() {
    this.#reservations = [];
  }

  addReservation(customer) {  //# isPriority = false
    //# flag 변수가 포함된 메소드는 함수가 1가지 일만 해야하는데 두 가지 일을 하므로 좋지 않다.
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id,
    );
  }
}

// 함수 선언 바꾸기 (책 6.5)
// 상황 : 예약을 추가하고 확인하는 함수를 만들었습니다.
//# 기대 : 추가로 우선 순위가 높은 예약을 확인하는 함수를 만들어야 한다고 가정합니다
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

//# 힌트 : boolean flag 인수, 함수는 한가지일만해야한다. 따로 빼내는 것도 나쁘지 않을 것

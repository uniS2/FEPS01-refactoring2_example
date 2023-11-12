class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get price() {
    const basePrice = this.#quantity * this.#item.price;
    const discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
// 임시 변수를 질의 함수로 바꾸기 (책 7.4)
// 상황 : 가격을 계산하는데에 사용하는  basePrice , discountFactor는 다시 쓰일수도 있어요
// 기대 : 다시 쓰일수 있는 변수는 질의 함수로 바꿔주세요
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

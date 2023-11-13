//^ class를 사용할 때와 함수 코드를 분리할 때의 차이점은?
//* class_캡슐화: 내부구현사항을 숨기고, 외부에서 필요한 사항만 노출하고 싶을 때
//* 함수쪼개기: 하나의 로직으로 몰려있는 함수를 분리해서 보고 싶을 때
//^ 좋은 리팩토링은 결국 가 독 성 !

//# class 만들기 연습 -> 여기서는 로직을 확인할 수 있는 '함수 쪼개기' 방식을 추천!
export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice(quantity)
  const discount = product.discount(quantity);
  const shippingPerCase = shippingMethod.shippingPerCase(basePrice)
  const shippingCost = quantity * shippingPerCase;

  const price = basePrice - discount + shippingCost;

  return price;
}

class Product {
  #basePrice;
  #discountRate;
  #discountThreshold;

  constructor(data) {
    this.#basePrice = data.basePrice;
    this.#discountRate = data.discountRate;
    this.#discountThreshold = data.discountThreshold;
  }

  get basePrice() {
    return this.#basePrice;
  }
  get discountRate() {
    return this.#discountRate;
  }
  get discountThreshold() {
    return this.#discountThreshold;
  }

  basePrice(quantity) {
    return this.#basePrice * quantity
  }

  discount(quantity) {
    return Math.max(quantity - this.#discountThreshold, 0) *
      this.#basePrice *
      this.#discountRate;
  }
}

class ShippingMethod {
  #discountThreshold;
  #feePerCase;
  #discountedFee;

  constructor(data) {
    this.#discountThreshold = data.discountThreshold;
    this.#feePerCase = data.feePerCase;
    this.#discountedFee = data.discountedFee;
  }

  get discountThreshold() {
    return this.#discountThreshold;
  }
  get feePerCase() {
    return this.#feePerCase;
  }
  get discountedFee() {
    return this.#discountedFee;
  }

  shippingPerCase(basePrice) {
    return basePrice > this.#discountThreshold
      ? this.#discountedFee
      : this.#feePerCase;
  }
}

// 사용 예:
const product = new Product({
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10
});
const shippingMethod = new ShippingMethod({
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3
});

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

// // 단계 쪼개기 (책 6.11)
// 상황 : priceOrder 함수는 상품 가격, 수량, 배송비를 받아서 주문에 대한 가격을 계산한다.
// 기대 : 함수가 하는 일을 단계별로 쪼개서 보고 싶어요.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

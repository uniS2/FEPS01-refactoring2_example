export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비
  const { quantity, itemPrice } = order;

  //# 변수명은 단순하게. 가 독 성
  const basePrice = quantity * itemPrice;
  const disCount = Math.max(0, quantity - 500) * itemPrice * 0.05;
  const shipping = Math.min(quantity * itemPrice * 0.1, 100)

  return basePrice - disCount + shipping;
}

// 변수 추출하기 (책 6.3)

// 상황 :
// 기대 :
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

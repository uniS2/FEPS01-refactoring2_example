export function isDeliveryFree(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

// 변수 인라인하기 (책 6.4)
// 상황 : basePrice가 1000을 넘으면 배송비를 무료로 해주세요
// 기대 : 표현식이 복잡하지 않은 변수가 필요할까요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

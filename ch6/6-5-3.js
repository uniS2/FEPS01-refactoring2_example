export function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

// 함수 선언 바꾸기 (책 6.5)
// 상황 : 고객의 주(state)가 뉴잉글랜드에 속하는지 확인하는 함수를 만들었습니다.
// 기대 : 함수가 불필요한 인자를 받고 있지 않나요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

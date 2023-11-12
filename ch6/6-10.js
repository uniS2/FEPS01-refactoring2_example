const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
// 여러 함수를 변환 함수로 묶기 (책 6.10)
// 상황 : reading은 기록을 나타내는 객체이다. reading의 기본 요금을 계산하는 로직이 여러 곳에 중복되어 있다.
// 기대 : 관련된 결과는 묶어서 보고 싶어요.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

// hint 변환 함수란 들어간 인수를 이용해 무언가를 계산한 다음, 그 인수형태를 반환하는 함수를 말한다.

//# 함수 인라인
// 예제 1
export function rating(driver) {
  return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}

// 예제 2
function reportLines(customer) {
  const lines = [];
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
  return lines;
}

/* function gatherCustomerData(out, customer) {
  out.push(['name', customer.name]);
  out.push(['location', customer.location]);
} */
// 함수 인라인하기 (책 6.2)
// 상황 : moreThanFiveLateDeliveries 함수는
// rating 함수에서만 사용되고 간단한 로직입니다.
// gatherCustomerData 함수는 단순히 데이터를 넣는 용도로만 사용되고 있습니다.

// 기대 : 의미없는 함수는 가독성을 해치지 않을까요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 여러분의 생각을 써보세요

//# 예제1: 간단한 로직임에도 불구하고 굳이 분리를 하였다.
//# 예재2: 어떤 데이터를 넣어주는지 명확히 알기 어렵다.

//# 하는 일이 명확하면 함수를 따로 분리하지 않고 원래 로직애 넣어주자 ! => 함수 인라인

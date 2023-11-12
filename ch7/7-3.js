export class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority,
).length;

// 기본형을 객체로 바꾸기 (책 7.3)
// 상황 : 우선순위가 높은 주문을 세는 코드를 만들었습니다. 우선순위 세는 로직을 왜 Order 밖에서 하나요?
// 기대 : Order 안에 우선순위를 세는 로직을 넣고 싶습니다.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

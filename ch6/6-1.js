export function printOwing(invoice) {
  let outstanding = 0;

  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');

  // calculate outstanding
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // record due dates
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30,
  );

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '사자',
};
printOwing(invoice);

// 함수 추출하기 (책 6.1)
// 상황 : 주문을하고 난 후, 고객에게 청구서를 보내야한다. 청구서에는 고객이름, 총액, 납기일이 포함된다.
// 기대 : printOwing함수가 하는 일을 파악하기 쉽게 만들고 싶다.
// 문제파악 : 이 코드는 어떤 문제가 있나요? 여러분의 생각을 써보세요

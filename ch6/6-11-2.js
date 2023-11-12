import fs from 'fs';

if (!process.argv[2]) {
  throw new Error('파일 이름을 입력하세요');
}

const fileName = `./${process.argv[2]}.json`;
if (!fs.existsSync(fileName)) {
  throw new Error('파일이 존재하지 않습니다');
}

const rawData = fs.readFileSync(fileName);
const orders = JSON.parse(rawData);
if (process.argv.includes('-r')) {
  console.log(orders.filter((order) => order.status === 'ready').length);
} else {
  console.log(orders.length);
}

// 단계 쪼개기 (책 6.11)
// 상황 : 파일에서 읽어와서 주문을 처리하는 코드가 있습니다. 주문의 상태가 ready인 주문의 개수를 출력하고 싶습니다.
// 기대 : 단계를 쪼개면 어떨까요? 입력 유효성 검사 필요한 로직 처리 // dependency 가 있지 않나요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

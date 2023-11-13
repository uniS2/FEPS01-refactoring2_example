//# 여러 함수를 클래스로 묶기 (책 6.9)  (6.9-client 1,2,3)
class Read {
  #customer;
  #quantity;
  #year;
  #month;

  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }

  baseRate() {
    if (this.#year === 2017 && this.#month === 5) return 0.1;
    return 0.2;
  }

  base() {
    return this.baseRate() * this.#quantity;
  }

  taxThreshold(year = this.#year) {
    return 0.1
  }

  taxableCharge() {
    return Math.max(0, this.base() - this.taxThreshold());
  }

  calculateBaseCharge(reading = this) {
    return this.base()
  }
}

export const reading = new Read({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });


//# 상황 : reading은 기록을 나타내는 객체이다. reading의 기본 요금을 계산하는 로직이 여러 곳에 중복되어 있다.
// 기대 :
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

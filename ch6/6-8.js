//# 응집성 높이기: class 생성하여 관리하기
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => range.outOfRange(r.temp));
}

const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

class TemperactureRange {
  #min;
  #max;

  constructor(data) {
    this.#min = data.min;
    this.#max = data.max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  outOfRange(temp) {
    return temp < this.#min || temp > this.#max;
  }
}

const operationPlan = {
  min: 51,
  max: 53
};

const outsideRange = readingsOutsideRange(
  station,
  new TemperactureRange(operationPlan),
);

console.log(outsideRange);

// 매개변수 객체 만들기 (책 6.8)
// 상황 : 역의 온도를 특정 온도 이하, 특정 온도 이상의 값만 필터링해서 가져오는 함수가 있습니다. 이 함수는 역(station)과 최소 최대값을 매개변수로 받습니다.
// 기대 : 온도들을 특정 레인지라는 개념으로 묶어볼 수 있지않을까요?
// 문제파악 : 이 코드는 어떤 문제가 있나요? 없을수도 있어요. 여러분의 생각을 써보세요

import {assert} from 'chai';
import {payload, people} from '../serialization';
// you can ge row data form payload.js file

describe('payload', function () {

  // in this tests try to use as least as possible number of assignments

  it('car quantity with owners older than 20 years', function () {

    let answer;
    const currentYear = new Date().getFullYear();

    answer = payload.data.filter(car =>
        currentYear - car.attrs.year > 20);
    return answer;


    assert.equal(answer, 2);

  });

  it('all car colors separated by comma without duplicates', function () {

    let answer;

    answer = payload.data.filter((elem, i, thisArr) =>
      thisArr.indexOf(elem.attrs.color) === thisArr.lastIndexOf(elem.attrs.color)).join(',');
    return answer;

    assert.equal(answer, 'red,yellow');

  });

  it('id\'s of all vehicles separated by comma', function () {

    let answer;

      answer = payload.data.map(elem => elem.id).join(',');
      return answer;

    assert.equal(answer, '1,3,6,4,2');

  });

  it('summary price of all items', function () {

    let answer;

      answer = payload.data.reduce((acc, cur) => acc + cur.attrs.price, 0);
      return answer;

    assert.equal(answer, 42800);

  });

  it('price of all things john has own', function () {

    let answer;

      answer = payload.data.filter(elem => elem.owners.includes(people.johnSmith)).reduce((acc, cur) => acc + cur.attrs.price, 0);
      return answer;

    assert.equal(answer, 25000);

  });

  it('all cities', function () {

    let answer;

      answer = people.johnSmith.cities.concat(people.elizabethComstock.cities);
      return answer;
    assert.equal(answer, 'New York,Boston,Columbia,Rapture');

  });
});

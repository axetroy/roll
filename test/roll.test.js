/**
 * Created by axetroy on 2017/4/4.
 */

import test from 'ava';
import Roll from '../index';

const MISTAKE = 0.01;

function diff(num1, num2) {
  return Math.abs(num1 - num2);
}

test('simple', t => {
  const random = new Roll();

  const items = [
    { item: 'Apple', rank: 1 },
    { item: 'Sydney', rank: 2 },
    { item: 'Banana', rank: 7 }
  ];

  items.forEach(v => random.add(v.item, v.rank));

  const resultTimes = {
    Apple: 0,
    Sydney: 0,
    Banana: 0
  };

  const loopTimes = 1000000;

  for (let i = 0; i < loopTimes; i++) {
    const result = random.roll();
    if (result in resultTimes) {
      resultTimes[result] += 1;
    }
  }

  let totalRank = 0;
  items.forEach(item => totalRank += item.rank);

  items.forEach(v => {
    t.is(
      diff(resultTimes[v.item], loopTimes * v.rank / totalRank) <
        loopTimes * MISTAKE,
      true
    );
  });
});

test('simple with random rank', t => {
  const random = new Roll();

  const items = [
    { item: 'Apple', rank: 125 },
    { item: 'Sydney', rank: 999 },
    { item: 'Banana', rank: 222 }
  ];

  items.forEach(v => random.add(v.item, v.rank));

  const resultTimes = {
    Apple: 0,
    Sydney: 0,
    Banana: 0
  };

  const loopTimes = 1000000;

  for (let i = 0; i < loopTimes; i++) {
    const result = random.roll();
    if (result in resultTimes) {
      resultTimes[result] += 1;
    }
  }

  let totalRank = 0;
  items.forEach(item => totalRank += item.rank);

  items.forEach(v => {
    t.is(
      diff(resultTimes[v.item], loopTimes * v.rank / totalRank) <
        loopTimes * MISTAKE,
      true
    );
  });
});

test('roll with 1 content', t => {
  const random = new Roll();

  const items = [{ item: 'Apple', rank: 1 }];

  items.forEach(v => random.add(v.item, v.rank));

  const resultTimes = {
    Apple: 0
  };

  const loopTimes = 100;

  for (let i = 0; i < loopTimes; i++) {
    const result = random.roll();
    if (result in resultTimes) {
      resultTimes[result] += 1;
    }
  }

  t.deepEqual(resultTimes.Apple, loopTimes);
});

test('roll without any thing should return null', t => {
  const random = new Roll();

  const loopTimes = 100;

  for (let i = 0; i < loopTimes; i++) {
    const result = random.roll();
    t.deepEqual(result, null);
  }
});

test('.add with invalid argument, it should throw an error', function(t) {
  const random = new Roll();
  t.throws(
    function() {
      random.add();
    },
    'Item must be required'
  );

  t.throws(
    function() {
      random.add('Apple', []);
    },
    `Rank must be a Number not ${typeof []}`
  );

  t.throws(
    function() {
      random.add('Apple', -1);
    },
    'require Rank>0'
  );
});

/**
 * Created by axetroy on 2017/4/4.
 */

function throwError(msg) {
  throw new Error(msg);
}

class Roll {
  constructor() {
    this._ = [];
  }

  add(
    item = throwError('Item must be required'),
    rank = throwError('Rank must be required')
  ) {
    const rankType = typeof rank;
    if (rankType !== 'number')
      throwError(`Rank must be a Number not ${rankType}`);
    if (rank <= 0) throwError('require Rank>0');
    this._.push({ item, rank });
  }

  roll() {
    let totalRank = 0;
    const random = Math.random();
    let result = null;

    const items = this._.slice().map(item => (totalRank += item.rank) && item);

    let start = 0;

    while (items.length) {
      const item = items.shift();
      const end = start + item.rank / totalRank;
      if (random > start && random <= end) {
        result = item;
        break;
      }
      start = end;
    }

    return result ? result.item : null;
  }
}

module.exports = Roll;

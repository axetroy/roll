# Roll

Roll item from a given list with simple api.

## Installation

```bash
npm install @axetroy/roll
```

or if you using **yarn**(recommend)

```bash
yarn add @axetroy/roll
```

## Usage

```javascript
const Roll = require('@axetroy/roll');

const roller = new Roll();

roller.add('Apple', 1);     // 10% get Apple
roller.add('Sydney', 2);    // 20% get Sydney
roller.add('Banana', 7);    // 70% get Banana

const result = roller.roll();

console.log(result);
```

## API

### .add(item:any, rank: number): void

add an item to roller.

- item: any thing except **undefined** and **null**
- rank: rank of this item. you can set any number >0, no need the make the in 10 total.

### .roll(): any

start roll and return item.

## Test

```bash
git clone https://github.com/axetroy/roll.git
cd ./gpm.js
yarn
yarn run test
```

## Contributing

```bash
git clone https://github.com/axetroy/roll.git
cd ./gpm.js
yarn
yarn run test
```

You can flow [Contribute Guide](https://github.com/axetroy/roll/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/roll/blob/master/LICENSE)
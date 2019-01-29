# The Pirate JS

The Pirate is a lib that has some util functions that can abstract
logic and prevent errors

## Install
```bash
# Using npm
npm i the-pirate
# Using yarn
yarn add the-pirate
```

## General examples
```js
import * as pirate from 'the-pirate'

// General functions
pirate.truthyJoin(['Hey', undefined, 'You'], ', ') // 'Hey, You'
pirate.any(false, true, false) // true
pirate.any(false, false) // false

pirate.maybe({}, 'item.price') // undefined
pirate.maybe({ item: { price: '$10.00' } }, 'item.price') // '$10.00'
```

## DOM utils
```js
import { dom } from 'the-pirate'
/*
imagine this span is in a structure like this:
<h2 class="parent">
    <div>
        <span class="child"></span>
    </div>
</h2>
*/
const spanChild = document.querySelector('.child')
dom.closest(spanChild, '.parent') // returns the h2 that has the .parent class

```

## Numeric utils
```js
import { numeric as numPyrate } from 'the-pirate'

numPyrate.validateCNPJ('18.837.197/0001-83') // true
numPyrate.validateCNPJ('47.372.635/4756-32') // false

numPyrate.validateCPF('93549281021') // true
numPyrate.validateCPF('34549284521') // false

numPyrate.normalizeLocalCurrency('20,000.04') // 20000.04 float
numPyrate.normalizeLocalCurrency('20.000,04') // 20000.04 float
```

## String examples
```js
import { string as strPi } from 'the-pirate'
strPi.isURL('http://google.com') // true
strPi.isURL('this is not an url') // false
strPi.interpol('Hello', 'World') // 'Hello World'
strPi.toSnakeCase('Hello World')//hello_world
strPi.toSnakeCase('HelloWórld')//hello_wrld

```

# rc-national-flag
Light weight national flag React component. wrapper of http://flag-icon-css.lip.is/

## Installation
```
yarn add rc-national-flag
```

## Props
```
code: ISO2 country codes
square: if true, it's going to show flag as square(1x1). default false (4x3)
```

## Example
```
// ThFlag.js
import React from 'react
import Flag from 'rc-national-flag'

export default () => (
    <ul>
        {/* Thailand Flag */}
        <li><Flag code="th" /></li>
        {/* Make Thailand Flag Square */}
        <li><Flag code="th" square /></li>
    </ul>
)
```

## Demo
https://abzeede.github.io/rc-national-flag/.

### Feel free to contribute
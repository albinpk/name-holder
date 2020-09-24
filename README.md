# name-holder

Generate random name for your project.

### Install

```npm
npm i --save name-holder
```

### Import

```js
import nameHolder from "name-holder";

// OR

const nameHolder = require("name-holder");
```

`name-holder` also have some named exports

```js
import { nickName, petName } from "name-holder";
```

### Example

```js
nameHolder(); // "Isabel Andres"
```

#### options

First parameter is gender _(optional)_

- Generate a female name

```js
nameHolder("f");
```

- Generate a string of 2 male names separated by comma (`', '`)

```js
nameHolder("m", 2);
```

- Generate a string of 2 male names separated by string(`' & '`)

```js
nameHolder("m", 2, " & ");
```

- Generate a string of 2 random names separated by comma(`', '`)

```js
nameHolder(2);
```

- Generate a string of 2 random names separated by string(`' and '`)

```js
nameHolder(2, " and ");
```

- Return a random name in array

```js
nameHolder([]); // [ "Chaya Mooney" ]
```

- Return a female name in array

  First parameter in array is gender _(optional)_

```js
nameHolder(["f"]);
```

- Return 2 male name in array

```js
nameHolder(["m", 2]);
```

- Return 2 formated male name in array

```js
nameHolder(["m", 2, (name) => `Hi ${name}`]);
// [ 'Hi Damion Nina', 'Hi Cohen Choi' ]
```

- Return 2 formated random names in array

```js
nameHolder([2, (name) => `Iam ${name}`]);
```

##### Option object

```js
nameHolder({ firstNameOnly: true, count: 10 });
```

##### Options list

- **gender** `"m"` | `"f"`
  -- _Select only specific gender_
- **count** `number`
  -- _Number of names_
- **separator** `string`
  -- _Separator string_
- **asArray** `boolean`
  -- _Return result in array_
- **firstNameOnly** `boolean`
  -- _Only return first names_
- **format** `function`
  -- _Formater function for each name_

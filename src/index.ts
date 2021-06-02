import _ from 'lodash';
import { add } from 'lodash/fp';

const addOne = add(1);
_.map([1, 2, 3]);

import foo from './foo';

export default function () {
  console.log(foo());
}

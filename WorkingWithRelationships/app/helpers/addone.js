import { helper } from '@ember/component/helper';

export function addone(params/*, hash*/) {
  return +params+1;
}

export default helper(addone);

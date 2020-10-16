export function isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
}

export function isArray(x) {
  return Object.prototype.toString.call(x) === '[object Array]';
}

export function isDate(x) {
  return Object.prototype.toString.call(x) === '[object Date]';
}

export function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

export function isValue(x) {
  return !this.isObject(x) && !this.isArray(x);
}

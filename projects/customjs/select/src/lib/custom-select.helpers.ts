export function CustomOptionLabelFunction(option = '') {
  return typeof option === 'object' ? JSON.stringify(option) : option;
}

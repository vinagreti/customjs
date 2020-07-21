import {
  CustomFilterPaginateSortEvent,
  CustomFilterPaginateSortEventParams,
  CustomFilterPaginateSortEventParamType,
  CustomFilterPaginateSortResponse,
} from './filter-paginate-sort.models';

const keysDelimiter = '.';

export function customFilterPaginateSort<T>(
  data: any[],
  { filter, limit, page, sort }: CustomFilterPaginateSortEvent,
): CustomFilterPaginateSortResponse<T> {
  // REMOVES UNMATHCES
  let filteredData: any[] = data;
  if (filter) {
    filteredData = filterData(data, filter);
  }
  // SORT
  let results = filteredData;
  if (sort) {
    results = sortData(results, sort);
  }
  // PAGINATE
  if (page) {
    limit = limit || results.length;
    results = paginateData(results, limit, page);
  }
  const result: CustomFilterPaginateSortResponse<any> = {
    results,
    count: filteredData.length,
    page,
    limit,
  };
  return result;
}

function filterData(data: any[], filterParams: CustomFilterPaginateSortEventParams) {
  const filteredData = data.filter(item => compareToFilter(item, filterParams));
  return filteredData;
}

function paginateData(data: any[], limit: number, page: number) {
  const lastIndex = page * limit;
  const initialIndex = lastIndex - limit;
  return data.slice(initialIndex, lastIndex);
}

function sortData(data: any[], key: string) {
  const ascending = key[0] !== '-';
  const keyWithoutDirection = ascending ? key : key.slice(1, key.length);
  return data.sort((a, b) => compareToSort(a, b, keyWithoutDirection, ascending));
}

// HELPERS
function normalizeValue(str: CustomFilterPaginateSortEventParamType) {
  return `${str}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
function compareToFilter(item: any, filterParams: CustomFilterPaginateSortEventParams) {
  const result = Object.keys(filterParams).reduce((accumulator, key) => {
    const filterValue: CustomFilterPaginateSortEventParamType = filterParams[key];
    const value: string = getValueByKey(item, key);
    const normalizedFilterValue = normalizeValue(filterValue);
    const normalizedValue = normalizeValue(value);
    const matches = normalizedValue.includes(normalizedFilterValue);
    return accumulator && matches; // ONLY 'AND OPERATOR' FOR COMPARISON, OR IS NOT YET SUPPORTED
  }, true);
  return result;
}

function getValueByKey(data: any, key: string) {
  const keys = key.split(keysDelimiter);
  const latestKey = keys.shift();
  const latestValue = data[latestKey];
  if (keys.length) {
    const newKey = keys.join(keysDelimiter);
    return getValueByKey(latestValue, newKey);
  } else {
    return ensureTypes(latestValue);
  }
}

function ensureTypes(latestValue: any) {
  const isNumber = !isNaN(latestValue);
  switch (true) {
    // NUMERIC STRING (transform numeric strings in float number to compare)
    case !isNaN(latestValue) && typeof latestValue === 'string':
      return parseFloat(latestValue);
    // DEFAULT IS
    default:
      return latestValue;
  }
}

function compareToSort(a: any, b: any, key: string, ascending: boolean) {
  const valueA = getValueByKey(a, key);
  const valueB = getValueByKey(b, key);
  let result = 0;
  if (valueA > valueB) {
    result = ascending ? 1 : -1;
  } else if (valueB > valueA) {
    result = ascending ? -1 : 1;
  }
  return result;
}

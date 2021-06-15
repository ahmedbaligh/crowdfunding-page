export const formatDecimal = num => new Intl.NumberFormat().format(num);

export const formatCurrency = num =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);

export const isInRangeInteger = (num, min = 1, max = Infinity) =>
  Number.isInteger(num) && num >= min && num <= max;

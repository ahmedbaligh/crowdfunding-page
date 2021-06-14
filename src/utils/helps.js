export const formatDecimal = num => new Intl.NumberFormat().format(num);

export const formatCurrency = num =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);

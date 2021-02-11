const formatValue = (value: number): string => {
  if (value) {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return '...';
};

export default formatValue;

const formatDate = (value: string): string => {
  if (value) {
    const date = new Date(value);
    return date.toLocaleDateString();
  }
  return '...';
};

export default formatDate;

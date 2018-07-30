const getUniqueArray = <T>(array: T[]): T[] => {
  const set = new Set(array);
  const newArray: T[] = [];
  set.forEach((element) => { newArray.push(element); });
  return newArray;
};

export default getUniqueArray;

export const deepClone = object => {
  // dealing with primitive
  if (object === null || typeof object !== 'object') {
    return object;
  }

  if (object instanceof Date) {
    return new Date(object.getTime());
  }

  if (Array.isArray(object)) {
    const clonedArr = [];
    object.forEach(element => {
      clonedArr.push(deepClone(element));
    });
    return clonedArr;
  }

  const clonedObj = new object.constructor();
  Object.keys(object).map((key) => {
    if (object.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(object[key]);
      return clonedObj;
    }
    return null;
  });

  return clonedObj;
};

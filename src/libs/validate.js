const hasNull = value => value === '' || value === null;

export const isObject = obj => obj !== null && typeof obj === 'object';

/**
 * check if null or '' in the Object
 */
export const isValidObject = obj => Object.keys(obj).reduce((p, n) => p && !hasNull(obj[n]), true);

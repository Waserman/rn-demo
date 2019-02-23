export const arrayToObject = (array, propToKey) => {
  if(!Array.isArray(array)) {
    throw new Error('array arg must be Array type');
  }

  return array.reduce((map, tweet) => {

    if (!tweet.hasOwnProperty(propToKey)) {
      console.warn('introduced tweet without id');
      return map;
    }
    
    const key = tweet[propToKey];
    if (map[key]) {
      return map;
    }

    return {
      ...map,
      [key]: tweet,
    };
  }, {})
}
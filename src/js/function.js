export default function calcAndtext(a, b, c, d, text) {
  // eslint-disable-next-line no-useless-concat
  const summAndText = `${a + b + c + d}-` + ` ${text}`;
  return summAndText;
}

// eslint-disable-next-line no-console
console.log('hi from function.js ');

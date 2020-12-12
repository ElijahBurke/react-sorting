export default function randomArrGenerator (length) {
  let res = [];
  for (let i = 0; i < length; i++) {
    res.push(Math.ceil(Math.random() * 100));
  }
  return res;
};
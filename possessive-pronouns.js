const list = ['my', 'your', 'his', 'her', 'our', 'their'];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};

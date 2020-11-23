const list = ['under', 'near', 'by', 'inside', 'within', 'on top of', 'on', 'next to', 'below'];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};

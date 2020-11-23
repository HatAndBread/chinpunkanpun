const list = ['he', 'she'];
const withBe = ['I am', 'you are', 'he is', 'she is', 'it is', 'that is'];
const objects = ['me', 'you', 'him', 'her', 'it', 'that'];

module.exports = (object, be) => {
  if (object) {
    return objects[Math.floor(Math.random() * objects.length)];
  } else if (be) {
    return withBe[Math.floor(Math.random() * withBe.length)];
  } else {
    return list[Math.floor(Math.random() * list.length)];
  }
};

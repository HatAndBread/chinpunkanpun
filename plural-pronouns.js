const list = ['they', 'we'];
const objects = ['them', 'us'];
const withBe = ['they are', 'we are'];

module.exports = (object, be) => {
  if (object) {
    return objects[Math.floor(Math.random() * objects.length)];
  } else if (be) {
    return withBe[Math.floor(Math.random() * withBe.length)];
  } else {
    return list[Math.floor(Math.random() * list.length)];
  }
};

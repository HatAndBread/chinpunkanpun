const list = [
  'mother',
  'brother',
  'sister',
  'father',
  'aunt',
  'uncle',
  'friend',
  'parol officer',
  'cousin',
  'grandson',
  'granddaughter',
  'son',
  'daughter',
  'grandmother',
  'grandfather',
  'best friend',
  'teacher',
  'lawyer',
  'trainer',
  'priest',
  'boss'
];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};

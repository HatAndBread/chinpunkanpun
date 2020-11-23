const list = [
  'boat',
  'house',
  'doll',
  'cat',
  'soup',
  'alternate reality',
  'disease',
  'river',
  'police officer',
  'bus',
  'traitor',
  'calculation',
  'flake of snow',
  'drop of rain',
  'oven',
  'wish',
  'basketball player',
  'orange',
  'box',
  'penny',
  'bicycle',
  'spy',
  'baby',
  'apple',
  'city',
  'country',
  'daisy',
  'woman',
  'man',
  'child',
  'computer',
  'tooth',
  'foot',
  'person',
  'human',
  'leaf',
  'mouse',
  'toy',
  'calf',
  'goose',
  'half',
  'knife',
  'wife',
  'life',
  'elf',
  'loaf',
  'potato',
  'tomato',
  'cactus',
  'fungus',
  'mushroom',
  'nucleus',
  'syllabus',
  'analysis',
  'crisis',
  'sheep',
  'fish',
  'deer',
  'aircraft',
  'antenna',
  'appendix',
  'cactus',
  'curriculum',
  'formula',
  'index',
  'millennium',
  'referendum',
  'stadium',
  'espresso',
  'risotto',
  'fresco',
  'berry',
  'chicken',
  'bed',
  'sofa',
  'activity',
  'flower',
  'kangaroo',
  'memo',
  'photo',
  'piano',
  'pimento',
  'soprano',
  'studio',
  'tattoo',
  'video',
  'zoo',
  'rainbow',
  'dolphin',
  'fox',
  'kitchen',
  'mountain',
  'witch',
  'box',
  'word',
  'book',
  'number',
  'equation',
  'shadow',
  'finger',
  'vegetable',
  'salad',
  'tree',
  'plant',
  'flower',
  'car',
  'gas',
  'ghost',
  'spirit',
  'family',
  'monkey',
  'injection',
  'question',
  'balloon',
  'house',
  'diamond',
  'stone',
  'rock',
  'kidney',
  'poem',
  'story',
  'rocket',
  'monster',
  'alien',
  'battle',
  'insect',
  'painting',
  'ambulance',
  'banana',
  'strawberry',
  'window',
  'lock',
  'door',
  'lawyer',
  'storm',
  'sock',
  'rose',
  'doctor',
  'dictator',
  'charlatan',
  'baker',
  'delivery man',
  'blacksmith',
  'pilot',
  'wave',
  'robot',
  'factory',
  'ribbon',
  'string',
  'instrument',
  'cube',
  'triangle',
  'number',
  'wall',
  'magician',
  'musician',
  'floor',
  'spice',
  'nut',
  'bean',
  'rule',
  'motorcycle',
  'whale',
  'regret',
  'microphone',
  'planet',
  'star',
  'movie',
  'chicken',
  'disagreement',
  'action',
  'lover',
  'basket',
  'island',
  'bone',
  'lion',
  'rehearsal',
  'student',
  'thief',
  'rioter',
  'journalist',
  'singer',
  'poet',
  'teacher',
  'intellectual',
  'engineer',
  'rat',
  'scent',
  'stair',
  'desk',
  'road',
  'field',
  'method',
  'request',
  'weed',
  'queen',
  'king',
  'stranger',
  'smile',
  'paper',
  'kitten',
  'gun',
  'director',
  'lady',
  'prisoner',
  'employee',
  'employer',
  'philosopher',
  'patient',
  'pie',
  'cake',
  'cookie',
  'sandwich',
  'suggestion',
  'comment',
  'problem',
  'cloud',
  'biscuit',
  'cow',
  'farm',
  'farmer',
  'zoo keeper',
  'university',
  'bullet',
  'reindeer',
  'park',
  'pimple',
  'ear',
  'eye',
  'nose',
  'mouth',
  'leg',
  'knee',
  'elbow',
  'forest',
  'village',
  'town',
  'creature',
  'path',
  'concept',
  'idea',
  'formality',
  'greeting',
  'color',
  'earthquake',
  'bridge',
  'waterfall',
  'painter',
  'bag',
  'rash',
  'hair',
  'person',
  'theory',
  'opinion',
  'fact',
  'letter',
  'language',
  'marriage',
  'nation',
  'cigarette',
  'cigar',
  'drug',
  'ocean',
  'elephant',
  'situation',
  'penguin',
  'appointment',
  'ratio',
  'line',
  'circle',
  'grandmother',
  'grandfather',
  'mother',
  'father',
  'calf',
  'bell',
  'building',
  'sky-scraper',
  'rapper',
  'dancer',
  'trader',
  'vacuum cleaner',
  'agency',
  'drawing',
  'room',
  'lesson',
  'signature',
  'accident',
  'airport',
  'chip',
  'assumption',
  'error',
  'meal',
  'proposal',
  'workers',
  'writer',
  'conclusion',
  'establishment',
  'ladder',
  'menu',
  'weakness',
  'analyst',
  'friendship',
  'funeral',
  'addiction',
  'shoe',
  'skirt',
  'process',
  'election',
  'voter',
  'job',
  'career',
  'radio',
  'name',
  'answer',
  'picture',
  'exercise',
  'ball',
  'morning',
  'ceremony',
  'egg',
  'machine',
  'background',
  'fruit',
  'shirt',
  'belt',
  'ticket',
  'dot',
  'circle',
  'finance',
  'substance',
  'interview',
  'emergency',
  'dinosaur'
];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};

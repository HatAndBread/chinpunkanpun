const list = [
  'coughing up',
  'accepting',
  'acknowledging',
  'pinching',
  'kicking',
  'stabbing',
  'hugging',
  'admitting',
  'aggravating',
  'answering',
  'asking',
  'avoiding',
  'beating',
  'bending',
  'blessing',
  'bothering',
  'breaking',
  'brushing',
  'building',
  'craving',
  'canceling',
  'capturing',
  'carrying',
  'catching',
  'changing',
  'chasing',
  'chastising',
  'cleaning',
  'collecting',
  'comforting',
  'contradicting',
  'converting',
  'cracking',
  'dazzling',
  'deceiving',
  'defining',
  'describing',
  'destroying',
  'discovering',
  'distinguishing',
  'dragging',
  'dressing',
  'dunking',
  'edifying',
  'eating',
  'embarrassing',
  'embracing',
  'enabling',
  'encouraging',
  'entertaining',
  'executing',
  'enlisting',
  'fascinating',
  'finishing',
  'following',
  'flicking',
  'forgetting',
  'freezing',
  'frightening',
  'forgiving',
  'furnishing',
  'gathering',
  'grabbing',
  'grasping',
  'gripping',
  'greasing',
  'handling',
  'hanging',
  'highlighting',
  'honouring',
  'hurrying',
  'hurting',
  'helping',
  'imitating',
  'impressing',
  'indulging',
  'inserting',
  'interesting',
  'inspecting',
  'interrupting',
  'intimidating',
  'irritating',
  'joining',
  'judging',
  'keeping',
  'killing',
  'kissing',
  'knocking',
  'laying',
  'leading',
  'lightening',
  'limiting',
  'linking',
  'loading',
  'loving',
  'lowering',
  'maintaining',
  'marrying',
  'massaging',
  'melting',
  'mocking',
  'munching',
  'murdering',
  'noticing',
  'numbering',
  'offending',
  'ordering',
  'paralyzing',
  'persuading',
  'petrifying',
  'piercing',
  'pleasing',
  'poisoning',
  'possessing',
  'preparing',
  'promising',
  'protecting',
  'purchasing',
  'punching',
  'puzzling over',
  'questioning',
  'quitting',
  'raising',
  'reassuring',
  'recognizing',
  'refilling',
  'reminding',
  'removing',
  'repelling',
  'researching',
  'satisfying',
  'scolding',
  'selecting',
  'slapping',
  'smelling',
  'softening',
  'specifying',
  'spelling',
  'spitting on',
  'spreading',
  'striking',
  'surprising',
  'swallowing',
  'switching',
  'teaching',
  'tasting',
  'tickling',
  'tightening',
  'toasting',
  'transforming',
  'tweaking',
  'twisting',
  'turning',
  'tossing',
  'trying',
  'underestimating',
  'understanding',
  'unlocking',
  'unloading',
  'using',
  'untying',
  'upgrading',
  'vacating',
  'vilifying',
  'videotaping',
  'waking',
  'wanting',
  'warming',
  'washing',
  'warning',
  'watching',
  'widening',
  'wearing',
  'winning',
  'wiping',
  'wrapping',
  'wrecking',
  'weeping for',
  'praying for',
  'forgetting',
  'preparing for',
  'wishing for',
  'hoping for',
  'abstaining from',
  'working on',
  'pointing at',
  'suffering from',
  'escaping from',
  'arguing about',
  'asking about',
  'boasting about',
  'dreaming about',
  'forgetting about',
  'laughing about',
  'thinking about',
  'worrying about',
  'dealing with',
  'hiding from',
  'tampering with',
  'trusting in',
  'commenting on',
  'concentrating on',
  'insisting on',
  'longing for',
  'apologizing to',
  'resigning from',
  'blaming',
  'stabbing',
  'shooting',
  'hugging',
  'stepping on',
  'criticizing',
  'accusing',
  'biting',
  'acquiring',
  'feeling',
  'demanding',
  'delivering',
  'consulting',
  'maintaining',
  'punching',
  'drinking',
  'establishing',
  'creating',
  'manufacturing',
  'generating',
  'waking up',
  'eating up',
  'adapting to',
  'talking to',
  'elaborating on',
  'chopping up'
];

module.exports = () => {
  return list[Math.floor(Math.random() * list.length)];
};

const defaults = {
  data: {},
  lang: {},
  template: 'default'
};

export default function getTemplate(args = {}) {
  const options = Object.assign({}, defaults, args);
  const templates = {
    default: '<div>You have loaded a web component</div>'
  };

  return templates[options.template];
}

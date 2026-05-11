module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-clean-order',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
    'order/properties-order': null,
    'declaration-empty-line-before': 'never',
    'scss/dollar-variable-empty-line-before': null,
    'rule-empty-line-before': null,
  },
};

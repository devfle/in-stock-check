const Configuration = {
  extends: ['@commitlint/config-convetional'],
  formatter: '@commitlint/format',
  rules: {
    'type-enums': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  helpUrl: 'https://github.com/devfle/in-stock-check',
};

export default Configuration;

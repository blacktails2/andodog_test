module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
    overrides: [
      {
        files: ['*.astro', '**/*.astro'],
  
        // `*.astro` では postcss-html を指定しないとシンタックスエラーになってしまう
        customSyntax: 'postcss-html',
      },
    ],
  }
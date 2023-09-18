// eslint-disable-next-line no-undef
module.exports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@/'],
            message:
              'Import things from the root index to ensure that things are exported correctly'
          }
        ]
      }
    ]
  }
}

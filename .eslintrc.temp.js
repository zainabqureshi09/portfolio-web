module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable problematic rules temporarily
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off'
  }
};
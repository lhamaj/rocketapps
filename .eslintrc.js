module.exports = {
  root: true, // Stops ESLint from looking for config files in parent directories
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    '@typescript-eslint', // Enables the @typescript-eslint/eslint-plugin
    'prettier' // Enables eslint-plugin-prettier
  ],
  extends: [
    'eslint:recommended', // Use the recommended rules from ESLint
    'plugin:@typescript-eslint/recommended', // Use the recommended rules from @typescript-eslint/eslint-plugin
    'prettier', // Enables eslint-config-prettier. This MUST be the last config in the extends array.
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. MUST be last.
  ],
  env: {
    node: true, // Add Node.js environment globals
    es2021: true // Add ES2021 globals
  },
  parserOptions: {
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    // Optional: You might need this if you use rules that require type information
    // project: './tsconfig.json',
  },
  rules: {
    // Place to add your custom ESLint rules
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    // You can override rules from the extended configurations here,
    semi: true,
  },
  ignorePatterns: [
    'dist/', // Ignore compiled JavaScript files
    'node_modules/' // Ignore dependency directory
  ]
};
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    // Desativa a regra que exige que apenas componentes sejam exportados no módulo que usa o react-refresh.
    "react-refresh/only-export-components": "off",
    // Desativa a regra que proíbe o uso do operador de assertiva de não-nulidade (!) em TypeScript.
    "@typescript-eslint/no-non-null-assertion": "off",
    // Desativa a regra que verifica variáveis não utilizadas em TypeScript.
    "@typescript-eslint/no-unused-vars": "off",
  },
}

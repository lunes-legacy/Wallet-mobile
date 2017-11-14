# README #

## Passos para instalação do projeto

Executar comandos dentro do diretório do projeto.

* npm install

### Flow

Para inicializar o servidor Flow, execute

* npm run flow start

## Lista de extensões do Visual Studio Code

### Principais

* React Native Tools
* Flow Language Support
* ESLint
* Prettier — JavaScript formatter

### Secundários (para facilitar o desenvolvimento)

* Auto Close Tag
* Auto Complete Tag
* Auto Rename Tag
* Babel ES6/ES7
* Color Highlight
* Copy Relative Path
* Debugger for Chrome
* Docker
* Document This
* Git Blame
* Path Intellisense
* Rainbow Brackets
* React-Native/React/Redux snippets for es6/es7
* SVG Viewer
* TODO Highlight

### Configurações do VSCode

Para habilitar o Prettier e ESLint no VSCode, é necessário inserir esses valores nas configurações do VSCode:

```json
  // Enable/disable JavaScript validation. (For Flow)
  "javascript.validate.enable": false,
  // Enable/disable default JavaScript formatter (For Prettier)
  "javascript.format.enable": false,
  // Support using flow through your node_modules folder,
  // WARNING: Checking this box is a security risk.
  // When you open a project we will immediately run code
  // contained within it.
  "flow.useNPMPackagedFlow": true,
  // Use 'prettier-eslint' instead of 'prettier'.
  // Other settings will only be fallbacks in case
  // they could not be inferred from eslint rules.
  "editor.formatOnSave": true,
  // Use 'prettier-eslint' instead of 'prettier'.
  // Other settings will only be fallbacks in case
  // they could not be inferred from eslint rules.
  "prettier.eslintIntegration": true
```

### Fluxo do Git

#### Os branches ficarão dividos em:
* master - nossos arquivo de produção com as versões estáveis
* staging - arquivos liberados para serem testados
* develop - branch de desenvolvimento. A partir desse branch deverá ser criado um novo branch temporário com a tarefa a ser executada.

#### Fluxo de commits
* Toda tarefa finalizada a partir do "branch temporário que foi criado", deverá ser criado um Pull Request no bitbucket e marcar pelo menos 2 desenvolvedores para que o código seja validado e aprovado pelo time.

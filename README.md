# Meu Segundo Projeto React do Zero

# Crie um projeto react
Iniciou-se o processo de criação de um projeto react entrando na pasta que eu desejava que a nova pasta fosse criada, cliquei com o mouse direito, selecionei a função 'Git bash Here'

Utilizei o comando 'yarn create react-app atividade-thamyres', ao ficar pronto, rodei o comando 'code .'.

# Apague as informações default
Após ser aberto no VS Code, fui ao app.js e exclui da linha 8 á 19 e o comando de import de imagem (que estava entre essas linhas), testei o código desenvolvendo um <h1>Hello World</h1>, fui ao git bash que estava aberto e utilizei o comando 'yarn start' abrindo no navegador o código (ao testar, exclui o h1 e comecei a desenvolver a atividade).

Abri a pasta public, deletei os arquivos: Favicon.ico; logo192.png; logo512.png; manifest.json e robots.txt. Dentro de index.html  retiro os links de favicon, logo e manifest, além dos comentários.

Na pasta SRC, apaguei: setupTests.js; reportWebVitals.js; logo.svg e App.text.js.   Após apagar, deu uma quebra no código, fui até o arquivo index.js e apago a linha que contém 'reportWebVitals();' linha 14 á 17, necessitando retirar o import da linha 5 também. 

# Consuma a API pública do gitHub: https://api.github.com/users/thamyreslais/repos

Criei a pasta components e um arquivo nomeado por 'card.jsx', para consumir o API utilizei o async, axios e await, inicialmente ela chega como uma array vazia (linha 5 'useState([])'), para mostrar os repositórios em 'return' foi colocado uma 'ul'  após o comando de mapeamento (linha 31 'filtro.map') para retornar uma 'li', sendo sempre necessário passar o 'key' dos API's pois é uma propriedade nativa do react onde deve haver um valor único dentro dos dados.

Para poder utilizar o axios para consumir a API inicialmente foi necessário ir até o git bash já aberto com o arquivo que está usando, escrever 'yarn add axios', ao baixar, importei para o arquivo 'card.jsx' (linha 2 'import Axios  from 'axios''), para utilizar o async/await dentro do useEffect é necessário criar uma função (-lembrete: é necessário chamar a função no final para que ela possa rodar-) dentro do mesmo (linha 9), logo após utilizei o await para poder receber os dados da API, criei a variável response para que o react guardasse todos os dados da API e tratasse a promise e pegue com o Axios de dentro do link da API (linha 10). 
 Faz-se mais uma const para guardar na variável todas as respostas que estão vindo de dentro de Data (linha 11)

 Para passar os dados que estão dentro da linha 11 para a const inicial sobre repositórios (linha 5) chamei 'setRepositorios(data)', testei com 'console.log(repositorios)' para ver se os dados estavam realmente rodando e aparecendo no console.

 # Crie um componente título que recebe o texto: "Meu Segundo Projeto React do Zero", a ser renderizado por props ou children

 Dentro da pasta 'components' criei um novo arquivo chamado 'Title.jsx' para criar um componente título, com a função sendo redenrizada pelo props, fui ao arquivo App.js, importei o arquivo Title.jsx e chamei a função texto para exibir na tela 'Meu Segundo Projeto React do Zero'

 # Crie 1 componente que mapeia os dados da lista da API e retorna uma lista, ele também tem um input que pega o texto digitado para atualizar o estado do componente, mostrando na tela somente o valor digitado.

 No arquivo 'card.jsx' na área de return criei um 'input' (linha 28) com tag de auto-fechamento, utilizei o placeholder e o onChange no mesmo com um e.target.value, esse valor que será digitado foi guardado dentro da variável 'setBusca' (linha 6). 
    Foi criado o filtro para que sempre ao fazer a busca, apareça quem está sendo buscado, foi criado o estado para o mesmo que inicia com a array vazia 'useState([])' (linha 7), para poder fazer a modificação na tela todas as vezes que a busca mudar é necessário criar um useEffect que fique com uma dependência na busca (useEffect criado na linha 18), chamei o mesmo em uma função dentro recebendo dois parâmetros sendo uma a arrow function ('() => {}') e o segundo parâmetro uma array que guardou a dependência. 
        No useEffect foi colocado o setFiltro, dentro do mesmo ele filtrou o que havia nos 'repositórios' sendo a função 'repositorios.filter' (linha 20) pedindo para retornar uma arrow function com return o 'repositorio.name.includes(busca)' retornar o repositório pelo nome que foi incluído na busca.
        Sendo necessário colocar no segundo parâmetro (na array) a dependência 'repositorios' e 'busca'

Não mapeando mais 'repositorios', mas sim o 'filtro'

# Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça o projeto funcionar.

fui até 'app.js' importei o Card e o Title e chamei os mesmos.
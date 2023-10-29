Estudo Base Para desenvolvimento em React utilizando JavaScript.

Aqui estão algumas funcionalidades Basicas do JavaScript que são muito importantes de 
serem revisadas para o uso nos códigos utilizadas na área Profissional.




--Nullish Coalescing Operator--
    -- 0, '', [], false, undefined, null => falsy --
    const idade = 0;
    document.body.innerText = 'Sua Idade é: ' + (idade ?? 'Não informado');

--Objetos--
const user = {
  name : 'Diego0',
  idade: 27,
  adress: {
    street: 'Rua Teste',
    number: 176,
  },
};

    --Se há a variavel no objeto--
    document.body.innerText = ('name' in user) //true
    document.body.innerText = ('nickname' in user) // false

    --Quais variaveis tem no objeto-- 
    document.body.innerText = Object.keys(user)

    --Quais valores tem no objeto--
    document.body.innerText = Object.values(user)

    --Printa valor como JSON--
    document.body.innerText = JSON.stringify(Object.values(user))
    Resp: ["Diego0",27,{"street":"Rua Teste","number":176}]

    --Retorna Vetor de vetores com { nome_da_variavel, valor }
    document.body.innerText = JSON.stringify(Object.entries(user))
    Resp: [["name","Diego0"],["idade",27],["adress",{"street":"Rua Teste","number":176}]]

--Desestruturação Do Objeto
const adress = user.adress
document.body.innerText = JSON.stringify(adress)

--Sintaxe de Desestruturação--
const { address ,idade } = user
document.body.innerText = JSON.stringify({address,idade})

    --Renomear Sintaxe de Desestruturação--
    const { address ,idade : age} = user
    document.body.innerText = JSON.stringify({address,age})

    --Usar contrutor padrao para caso não haja a variavel no objeto--
    const { address ,idade : age, nickname = 'Fernandes'} = user 
        --caso não hover nickname no objeto coloca 'Fernandes'--
    document.body.innerText = JSON.stringify({address,age, nickname})

    --Usar variavel direta na função--
    function mostraIdade(user){return user.idade}
    document.body.innerText = mostraIdade(user)

    --Usar variavel indireta na função--
    function mostraIdade({ idade }){return idade}
    document.body.innerText = mostraIdade(user)

--Rest Operator--
const { name, idade, ...rest } = user;
document.body.innerText = JSON.stringify(rest)
    --Exemplo Array--
    const array = [1,2,3,4,5,6,7,8,9,10];
    const first = array[0];
    document.body.innerText = JSON.stringify(first)
    --Aplicado Array no objeto--
    const array = [1,2,3,4,5,6,7,8,9,10];
    const [first, second, ...rest] = array;
    document.body.innerText = JSON.stringify({first, second, rest})
    --Pular valor do Array--
    const array = [1,2,3,4,5,6,7,8,9,10];
    const [first, , third, ...rest] = array;
    document.body.innerText = JSON.stringify({first, third, rest})

--Short Syntax--
const name = 'Diego';
const age = 27;

const user = {
  name,
  age,
};

document.body.innerText = JSON.stringify(user)

--Exemplo Uso IF/ELSE ?:--
const user = {
  name : 'Diego0',
  age: 27,
  adress: {
    street: 'Rua Teste',
    number: 176,
    zip: {
      code: '89160000',
      city: 'Rio do Sul',
    }
  },
};

document.body.innerText = user.adress 
? user.adress.zip
  ? user.adress.zip.code 
  : 'Não informado'
: 'Não informado'

--Optional Chaining--
const user = {
  name : 'Diego0',
  age: 27,
  adress: {
    street: 'Rua Teste',
    number: 176,
    zip: {
      code: '89160000',
      city: 'Rio do Sul',
    }
  },
};
    --Tenta acessar o objeto antes do '?' caso ele não exista ele da false--
    document.body.innerText = user.adress?.zip?.code ?? 'Não informado'; 

    --Optional Chaining com função dentro do objeto--
    const user = {
    name : 'Diego0',
    age: 27,
    adress: {
        street: 'Rua Teste',
        number: 176,
        zip: {
        code: '89160000',
        city: 'Rio do Sul',
        },
        showFullAdress(){
        return 'ok';
        }
    },
    };
    document.body.innerText = user.adress?.showFullAdress?.();
    --Busca com [] no objeto, Optional Chaining--
    const key = 'street';
    document.body.innerText = user.adress?.[key];

--Método de Array--
const array = [1,2,3,4,5];

--Mostrar array--
    --for--
    for (const i of array){
    document.body.innerText += i
    }

    --foreach--
    array.forEach(item => {
    document.body.innerText += item;
    })

    --foreach return (não recomendavel)--
    const newArray = [];
    array.forEach(item => {
    newArray.push(item * 2)
    })
    document.body.innerText = JSON.stringify(newArray);

    --map--
    const newArrayMap = array.map(item => {
    return item*2;
    }) 
    document.body.innerText = JSON.stringify(newArrayMap)
        --array de retorno sempre tem o mesmo tamanho--

    --map condicional--
    const newArrayConditionalMap = array.map(item => {
        if(item % 2 == 0){
        return item * 10;
        }
        return item;
    })
    document.body.innerText = JSON.stringify(newArrayConditionalMap)

--Filter--
const array = [1,2,3,4,5];
const novoArray = array
.filter(item => item % 2 != 0 )
.map(item => item*10)

document.body.innerText = JSON.stringify(novoArray)

--Every--
const array = [1,2,3,4,'da'];
const todosItensSaoNumeros = array.every( item => typeof item == 'number');
  
document.body.innerText = JSON.stringify(todosItensSaoNumeros)
  --Bolleano--

--Some--
const array = [1,2,3,4,5];
const peloMenosUmItemNaoEUmNumero = array.some(item => {
  return typeof item != 'number';
})

document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

--Find--
const array = [1,2,3,4,5];
const par = array.find(item => item%2==0)
document.body.innerText = JSON.stringify(par)
  --retorna o primeiro que satisfaça a condição--

  --FindIndex--
  const par = array.findIndex(item => item%2==0)
  document.body.innerText = JSON.stringify(par)
  --retorna o indice do array que foi encontrado o pedido--

--Reduce--
const array = [1,2,3,4,5];

const soma = array.reduce((acc, item) => {
  document.body.innerText += acc + ',' + item + ' --- '

  return acc + item ;
}, 0)
  document.body.innerText = JSON.stringify(soma)
  --Passa função e objeto inicial--
--Template Literals--
const array = [1,2,3,4,5];

const name = null
const message = 'Bem-Vindo, ' + name;
  --Forma Aplicada--
  const formatMessage = `Bem-vindo, ${name ?? 'visitante'}`

  document.body.innerText = formatMessage;

--Promisses--
const SomaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

SomaDoisNumeros(1,3)
  .then (soma => {
    document.body.innerText = soma
  })
  .catch (err => {
    console.log(err)
  })

--.then.catch não aninhado--
fetch('https://api.github.com/users/diego3g')
  .then(response => {
    response.json().then(body => {
      console.log(body)
    })
  })
  .catch(err => {
    console.log(err)
  })

--.then.catch aninhado recomendado --
fetch('https://api.github.com/users/diego3g')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body)
  })
  .catch(err => {
    console.log(err)
  }

  --.finally--
  fetch('https://api.github.com/users/diego3g')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('deu')
  })

  --Await/Async function with promisses--
  async function buscaDadosNoGitHub(){
  const response = await fetch('https://api.github.com/users/diego3g');
  const body = await response.json();

  console.log(body);
  }

  buscaDadosNoGitHub();

  --Await/Async function and finally/catch--
  async function buscaDadosNoGitHub(){
    try {
      const response = await fetch('https://api.github.com/users/diego3g');
      const body = await response.json();

        console.log(body);
      } catch (error) {
        console.log(error)
      } finally {
        console.log('deu')
      }
    }

    buscaDadosNoGitHub();

    --Return Await/Async function--
    async function buscaDadosNoGitHub(){
      try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();

        return body.name;
      } catch (error) {
        console.log(error)
      } finally {
        console.log('deu')
      }
    }

    buscaDadosNoGitHub().then( name => {
      console.log(name)
    });

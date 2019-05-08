# Conversor de números romanos para arábicos e números arábicos para romanos v.1.0.0

**Esta biblioteca se destina à conversão de números romanos para arábicos e vice versa, para utilização em aplicações web.**
Nesta versão é possível converter os números arábico de 1 a 1.000.000.00 para números romanos e os seus equivalentes em números romanos para arábicos.
OBS: A númeração romana a partir do número 4000 segue a seguinte regra  utiliza-se um travessão por cima da letra, que 
representa sua multiplicação por 1000.  

## Como instalar:

```shell

$  npm install pafconversor-lib

```

## Como utilizar:

```node

Criar arquivo index.js com as seguintes informações:

> const conversorRomanToInt = require("pafconversor-lib");
> console.log(conversorRomanToInt("CCL"))
> // returns 250

> const conversorIntToRoman = require("pafconversor-lib");
> console.log(conversorIntToRoman(950))
> // returns "CML"

OBS: O nùmero romano deve ser digitado sempre entre " " para conversão, pois é uma string.

```

## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;


#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação para que retorne erro do digitada uma string que não é um algarismo romano;

#### versão 1.0.0 (released)
- funcionalidades: conversão de números arábicos de 1 a 1.000.000.00 para números romanos;
- funcionalidades: conversão de números romanos para arábicos;

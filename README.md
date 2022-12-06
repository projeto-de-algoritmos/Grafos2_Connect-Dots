# Pac-Man

**Número da Dupla**: 39<br>
**Conteúdo da Disciplina**: Grafos 2<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 19/0027355  |  Erick Melo Vidal de Oliveira|

## Sobre 
O objetivo deste projeto é mostrar como funciona o algorítmo Dijkstra, utilizando o jogo Dead By Daylight para ilustrá-lo, de modo que as barreiras e janelas que existem no jogo fariam o algorítmo calcular qual caminho seria melhor para o killer chegar até o player. Porém, para a data em questão (05/12/2022) não foi possível implementar o algorítmo inteiro e, por isso, o código está incompleto.

## Screenshots
![Screenshot from 2022-12-05 20-51-07](https://user-images.githubusercontent.com/48844857/205771662-23e0ad28-dd2e-4b30-b99b-2e7af211935b.png)
![Screenshot from 2022-12-05 20-54-23](https://user-images.githubusercontent.com/48844857/205771768-a1231454-ebc2-46a9-8d00-c9d08c067d87.png)
![Screenshot from 2022-12-05 20-55-36](https://user-images.githubusercontent.com/48844857/205771783-9789f205-12be-4a16-85aa-c9b5adf11a9d.png)


## Instalação 
**Linguagem**: TypeScript<br>
**Framework**: Angular<br>

### Pré-requisitos:
Para rodar o projeto é necessário ter instalado o framework Angular na máquina, para isso basta executar o código abaixo:

`npm install -g @angular/cli@latest`
 
É necessário ter o [NodeJs](https://nodejs.org/en/download/) verão 12 ou superior já instalado.

### Iniciando o porjeto
Para rodar o código, primeiro clone este repositório em um diretório de sua preferência com o git

`git clone https://github.com/projeto-de-algoritmos/Grafos2_DeadByDaylight.git`

Em seguida acesse a pasta do código no repositório clonado

`cd Grafos2_DeadByDaylight/dbd`

Instale as dependencias do projeto

`npm install`

Agora basta rodar o projeto com este comando que ele abrirá em uma aba de seu navegador padrão

`ng serve --open`

## Uso 
Para iniciar o jogo basta apertar no botão "start" no canto superior direito do mapa. O killer irá desaparecer, indicando que ele não está mais te vendo, e irá percorrer o mapa de maneira pseudoaleatória. Quando o player entrar no range de visão do killer, ele irá ficar visível. O objetivo do jogo é completar todos os 5 geradores (quadrados amarelos) e fugir pelo portão que irá abrir (quadrado verde) antes do killer te alcançar. Caso ele alcance, você não morrerá instantaneamente, apenas ficará com o estado "ferido" e o killer irá spawnar novamente em outro ponto do mapa. 

As pálets são os quadrados rosados no mapa, e podem ser derrubadas para atrasar o killer, mudando para a cor vermelha, e as janelas são representadas pelos quadrados azuis.

Para iniciar um gerador, o player deve estar parado em um dos lados do gerador, sem contar as diagonais, e iniciar a ação. Caso o player inicie um gerador e se afaste dele em seguida, a contagem será interrompida. Um gerador é considerado finalizado quando chega ao valor 10 na contagem.

### Controles
 - `E` - realizar uma ação (derrubar palet / iniciar gerador) 
 - `A` - andar para a esquerda 
 - `S` - andar para baixo 
 - `D` - andar para a direita 
 - `W` - andar para cima 





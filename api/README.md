NestJS -> Utiliza express / fastify por baixo dos panos e força uma estrutura no código baseada em módulos e decorators (@)

Providers: Tudo que não é controller

Inversão de dependência -> Ao invés do método buscar as dependências / parâmetros, isso tudo é enviado a ele

Injeção de dependência -> A partir do momento que se utiliza um tipo que possua a tag @Injection() sendo usada
em um Controller, não é necessário enviar esse parâmetro a ele. O Nest tem a inteligência de injetar isso nele. É
recomendável que todos providers sejam injetados para seguir o príncipio 5 SOLID (Inversão de dependência) de forma
não verbosa

Imports de um model importa outros módulos. Controllers são os controladores e os Providers, para finalizar, são
todas as outras camadas (Services/Repositories)
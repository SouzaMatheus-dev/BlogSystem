# BlogSystem

Este é o projeto **BlogSystem**, desenvolvido em .NET. A solução é organizada em uma arquitetura em camadas para separar responsabilidades e facilitar a manutenção e a escalabilidade. Abaixo está uma descrição detalhada da estrutura do projeto.

## Estrutura do Projeto

A estrutura do projeto foi organizada de acordo com as melhores práticas de desenvolvimento em .NET, seguindo uma arquitetura em camadas.

- **BlogSystem.Application**: Esta camada contém a lógica da aplicação e os serviços de domínio. Ela lida com as operações principais, como validações e processamento de dados. A camada `Application` também pode incluir os DTOs (Data Transfer Objects) e as interfaces de serviços que serão implementadas na camada de `Services`.

- **BlogSystem.Domain**: Nesta camada, estão definidos os modelos de domínio, entidades e regras de negócios do sistema. Também inclui interfaces de repositórios para abstrair as interações com a base de dados. Esta é a camada que contém o núcleo do sistema, sem dependências diretas de infraestrutura ou tecnologias específicas.

- **BlogSystem.Infrastructure**: Esta camada lida com a implementação dos repositórios, acesso a dados e integração com tecnologias externas (como o banco de dados). Aqui é onde os detalhes de implementação da persistência de dados são realizados. Por exemplo, conexões com SQL Server, Entity Framework, Dapper, etc.

- **BlogSystem.Services**: Esta camada contém a implementação dos serviços definidos na camada `Application`. Ela lida com a lógica de negócios e interação entre diferentes partes da aplicação. O objetivo é manter os controladores e outras camadas mais limpas, delegando as operações de negócio para esta camada de serviços.

- **BlogSystem.Web**: Esta é a camada de apresentação do sistema. Geralmente, ela contém a aplicação web ASP.NET Core, incluindo os controladores, views (no caso de uma aplicação MVC) e APIs. Esta camada é responsável por receber as solicitações dos usuários, interagir com os serviços e retornar as respostas adequadas.

- **BlogSystem.sln**: Este é o arquivo da solução, que agrupa todos os projetos acima, permitindo que eles sejam desenvolvidos e mantidos como uma única unidade.

## Como Executar

1. Abra a solução `BlogSystem.sln` no Visual Studio ou em outro ambiente de desenvolvimento compatível com .NET.
2. Compile a solução para restaurar as dependências necessárias e compilar todos os projetos.
3. Execute o projeto principal para iniciar a aplicação.

## Contribuindo

Siga a estrutura estabelecida ao adicionar novas funcionalidades ou corrigir problemas. As alterações devem ser feitas na camada apropriada para manter a arquitetura limpa e organizada:

- Adicione novos modelos e regras de negócio em `BlogSystem.Domain`.
- Crie novos serviços em `BlogSystem.Application` e implemente-os em `BlogSystem.Services`.
- Gerencie integrações com bancos de dados e outras tecnologias em `BlogSystem.Infrastructure`.
- Adicione endpoints ou páginas web em `BlogSystem.Web`.

## Tecnologias Utilizadas

- .NET Core
- ASP.NET Core (para a camada web)
- Entity Framework Core / Dapper (para a camada de infraestrutura)
- Outros pacotes e ferramentas necessários para o desenvolvimento da aplicação.

## Estrutura da Solução

A arquitetura em camadas promove uma clara separação de responsabilidades, facilitando a manutenção, testes e futuras extensões da aplicação.

<div align="center">

# 🔗 LinkSpace

**Plataforma moderna de encurtamento de URLs com interface intuitiva e analytics em tempo real**

[![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-2088FF?style=flat-square&logo=githubactions)](https://github.com/DionathaGoulart/link-shortener--Angular/actions)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](LICENSE)
[![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.8.7-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.5-7952B3?style=flat-square&logo=bootstrap)](https://getbootstrap.com/)

</div>

---

## 📸 Preview

<div align="center">

<img src="imgs/Home.png" alt="Desktop Preview" width="800"/>
<p><em>Interface principal para encurtamento de URLs com design moderno</em></p>

<img src="imgs/Dashboard.png" alt="Mobile Preview" width="400"/>
<p><em>Dashboard responsivo com lista de links e analytics em tempo real</em></p>

</div>

---

## ✨ Funcionalidades

### 🎯 Principais Características

- **🔗 Encurtamento de URLs** - Transforme links longos em URLs curtas e memoráveis
- **📊 Analytics em Tempo Real** - Acompanhe cliques e estatísticas de cada link
- **📋 Gerenciamento de Links** - Visualize, copie e exclua seus links encurtados
- **📱 Totalmente Responsivo** - Otimizado para todos os dispositivos
- **⚡ Performance Otimizada** - Carregamento rápido com Angular e otimizações avançadas
- **🎨 Design Moderno** - Interface limpa e intuitiva com Bootstrap 5
- **🔒 Validação de URLs** - Verificação automática de URLs válidas
- **📋 Cópia Rápida** - Botão para copiar links com um clique

### 🛠️ Funcionalidades Técnicas

- **🏗️ Arquitetura Modular** - Estrutura organizada com separação de responsabilidades
- **🎯 TypeScript Completo** - Tipagem forte em toda a aplicação
- **🔄 API RESTful** - Endpoints organizados e documentados
- **🌐 CORS Configurado** - Comunicação segura entre frontend e backend
- **⚡ Geração de IDs Únicos** - Algoritmo ShortID para códigos únicos
- **🧪 CI/CD Automatizado** - Deploy automático com GitHub Actions

---

## 🏗️ Arquitetura do Projeto

```
link-shortener--Angular/
├── 📁 backend/              # API Node.js + Express
│   ├── config/
│   │   └── db.js           # Configuração MongoDB
│   ├── models/
│   │   └── url.js          # Modelo de dados URL
│   ├── routes/
│   │   └── urls.js         # Rotas da API
│   ├── public/
│   │   └── index.html      # Página estática
│   ├── package.json        # Dependências backend
│   └── server.js           # Servidor principal
├── 📁 frontend/             # Aplicação Angular
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/ # Componentes Angular
│   │   │   ├── models/     # Interfaces TypeScript
│   │   │   ├── services/   # Serviços HTTP
│   │   │   └── styles/     # Estilos SCSS
│   │   ├── environments/   # Configurações de ambiente
│   │   └── assets/         # Recursos estáticos
│   ├── angular.json        # Configuração Angular
│   ├── package.json        # Dependências frontend
│   └── vercel.json         # Configuração deploy
└── 📁 imgs/                # Screenshots do projeto
```

---

## 📄 Páginas e Seções

### 🏠 Página Principal

- **Encurtador de URLs** - Formulário para inserir e encurtar links
- **Validação em Tempo Real** - Verificação de URLs válidas
- **Resultado Instantâneo** - Exibição da URL encurtada
- **Cópia Rápida** - Botão para copiar o link gerado

### 📊 Dashboard de Links

- **Lista Completa** - Visualização de todos os links encurtados
- **Estatísticas** - Contador de cliques por link
- **Gerenciamento** - Ações de copiar e excluir links
- **Filtros** - Ordenação por data de criação
- **Estado Vazio** - Interface amigável quando não há links

---

## 🛠️ Tecnologias Utilizadas

### Frontend Principal

- **Angular 19.2.0** - Framework principal para SPA
- **TypeScript 5.7.2** - Superset JavaScript com tipagem estática
- **Bootstrap 5.3.5** - Framework CSS utility-first
- **Bootstrap Icons 1.11.3** - Ícones vetoriais
- **Angular CDK 19.2.14** - Componentes e utilitários
- **RxJS 7.8.0** - Programação reativa

### Backend e Banco de Dados

- **Node.js 18+** - Runtime JavaScript
- **Express 4.21.2** - Framework web minimalista
- **MongoDB 7.8.7** - Banco de dados NoSQL
- **Mongoose 7.8.7** - ODM para MongoDB
- **ShortID 2.2.17** - Geração de IDs únicos
- **Valid-URL 1.0.9** - Validação de URLs

### Ferramentas de Desenvolvimento

- **Angular CLI 19.2.10** - Ferramentas de linha de comando
- **Nodemon 3.0.1** - Auto-reload para desenvolvimento
- **SCSS 1.77.6** - Pré-processador CSS
- **TypeScript 5.7.2** - Compilador TypeScript

### Deploy e CI/CD

- **Vercel** - Deploy automático do frontend
- **Render** - Deploy automático do backend
- **GitHub Actions** - CI/CD automatizado
- **MongoDB Atlas** - Banco de dados em nuvem

### Integrações

- **Angular Router 19.2.0** - Roteamento SPA
- **Angular Forms 19.2.0** - Formulários reativos
- **Angular HTTP Client** - Comunicação com API
- **Angular CDK Clipboard** - Funcionalidade de cópia

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- MongoDB (local ou Atlas)
- Git para clonagem do repositório

### Instalação

```bash
# Clone o repositório
git clone https://github.com/DionathaGoulart/link-shortener--Angular.git

# Entre no diretório
cd link-shortener--Angular

# Instale as dependências do backend
cd backend
npm install

# Instale as dependências do frontend
cd ../frontend
npm install

# Execute em modo desenvolvimento
npm run start
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor backend com nodemon
npm start            # Inicia servidor backend em produção
ng serve             # Inicia servidor frontend de desenvolvimento

# Build e Deploy
ng build             # Gera build otimizado para produção
ng test              # Executa testes unitários

# Qualidade de Código
ng lint              # Executa ESLint para verificar código
```

---

## 🧪 CI/CD e Qualidade

### GitHub Actions

O projeto possui workflow automatizado de CI/CD:

- **Build & Test** - Verifica se o projeto compila corretamente
- **Lint Check** - Valida qualidade do código com ESLint
- **Deploy Automático** - Deploy na Vercel e Render em caso de sucesso
- **Health Check** - Monitoramento de status do servidor

### Ferramentas de Qualidade

- **ESLint** - Análise estática de código com regras customizadas
- **Prettier** - Formatação automática e consistente
- **TypeScript** - Verificação de tipos em tempo de compilação
- **Angular CLI** - Linting e formatação automática

---

## 🚀 Deploy

### Deploy Automático (Vercel + Render)

O projeto está configurado para deploy automático:

- **Frontend**: Deploy automático na Vercel via GitHub Actions
- **Backend**: Deploy automático na Render via GitHub Actions
- **URL Frontend**: `https://link-shortener-angular.vercel.app`
- **URL Backend**: `https://link-shortener-72f5.onrender.com`

### Configuração Vercel

- **Framework**: Angular
- **Runtime**: Node.js 18
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Configuração Render

- **Runtime**: Node.js 18
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment**: Production

### Configuração Automática

1. Conecte seu repositório no Vercel Dashboard
2. Configure as variáveis de ambiente necessárias
3. O deploy acontece automaticamente via GitHub Actions

### Workflows GitHub Actions

O projeto possui workflow automatizado:

- **CI/CD** (`ci.yml`) - Build, testes, lint e deploy automático

### Deploy Manual

```bash
# Build para produção
ng build --configuration production

# Deploy via Vercel CLI
vercel --prod
```

---

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms
- **Speed Index**: < 3.0s
- **Performance Score**: > 90
- **Accessibility Score**: > 95
- **Best Practices Score**: > 90
- **SEO Score**: > 90

---

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na pasta `backend`:

```env
# MongoDB
MONGO_URI=mongodb://localhost:27017/urlshortener
# ou para MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener

# Servidor
PORT=5000
BASE_URL=http://localhost:5000
# ou para produção:
# BASE_URL=https://link-shortener-72f5.onrender.com
```

### Personalização

- **Cores**: Edite `src/styles/_variables.scss`
- **Logo**: Substitua arquivos em `src/assets/`
- **Favicon**: Configure em `public/favicon.ico`
- **Título**: Modifique em `src/app/app.component.ts`
- **API URL**: Configure em `src/environments/`

---

## 📱 Responsividade

O LinkSpace é totalmente responsivo e otimizado para:

- **📱 Mobile** (320px - 768px)
- **📱 Tablet** (768px - 1024px)
- **💻 Desktop** (1024px - 1440px)
- **🖥️ Large Desktop** (1440px+)

---

## ♿ Acessibilidade

- **Navegação por Teclado** - Suporte completo para navegação sem mouse
- **Screen Readers** - Labels e descrições adequadas para leitores de tela
- **Contraste de Cores** - Paleta de cores com contraste adequado (WCAG AA)
- **Foco Visual** - Indicadores claros de foco em elementos interativos
- **Semântica HTML** - Estrutura semântica correta para melhor compreensão

---

## 📄 Licença

**⚠️ ATENÇÃO: Este projeto é de uso exclusivo e pessoal.**

### Direitos Reservados

Este software e sua documentação são propriedade exclusiva do autor e estão protegidos por direitos autorais. É **expressamente proibido**:

- ❌ **Copiar** o código fonte
- ❌ **Modificar** sem autorização
- ❌ **Distribuir** o software
- ❌ **Usar** para fins comerciais
- ❌ **Criar trabalhos derivados**
- ❌ **Fazer engenharia reversa**

### Uso Permitido

- ✅ **Visualizar** o código para fins educacionais
- ✅ **Estudar** a implementação para aprendizado
- ✅ **Inspirar-se** nas ideias e conceitos
- ✅ **Fazer fork** apenas para estudo pessoal

### Consequências

A violação desta licença resultará em:

- Ação legal imediata
- Remoção do conteúdo infrator
- Danos e prejuízos conforme a lei

**© 2025 Dionatha Goulart. Todos os direitos reservados.**

---

## 📞 Contato

**Desenvolvedor**: Dionatha Goulart  
**Email**: dionatha.work@gmail.com  
**Portfolio**: https://dionatha.com.br/  
**GitHub**: https://github.com/DionathaGoulart  
**Linkedin**: https://www.linkedin.com/in/dionathagoulart/

---

<div align="center">

**Feito by Dionatha Goulart**

</div>

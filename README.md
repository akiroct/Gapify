# Gapify

Site institucional da Gapify, uma agência de sites e páginas de vendas focados em clareza, performance e conversão.

## Stack

- React 19
- TanStack Start e TanStack Router
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Rodando localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

O servidor de desenvolvimento fica disponível em `http://localhost:8080` ou na próxima porta livre.

## Scripts

```bash
npm run dev       # inicia o desenvolvimento
npm run build     # gera o build de produção
npm run preview   # visualiza o build localmente
npm run lint      # executa o ESLint
```

## Estrutura

```text
src/
	assets/          imagens utilizadas pelo site
	components/      layout, navegação e componentes reutilizáveis
	routes/          páginas Home, Sobre, Serviços e Contato
	lib/             utilitários e tratamento de erros do servidor
	styles.css       tokens de design e estilos globais
```

## Páginas

- `/` — apresentação da Gapify e pacotes
- `/sobre` — missão, visão e forma de trabalho
- `/servicos` — serviços e perguntas frequentes
- `/contato` — formulário de orçamento

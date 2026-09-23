# Migração Next.js

Branch de migração da versão estática para Next.js + TypeScript.

## Rotas
- `/` — institucional
- `/links` — agregador
- `/contato` — formulário

## Fonte de dados
Dados da profissional e integrações ficam centralizados em `src/config/client.ts`.

## Integrações pendentes
WhatsApp, Instagram e endpoint do formulário permanecem nulos de propósito. O formulário não transmite dados até a definição do canal seguro e política de privacidade.

## Validação
A versão estática da `main` permanece como baseline visual até o preview desta branch ser validado.

# Portfólio do Joás Pardim (Mago Root)

Este é um fork/custom do template **portfolio**. Ajustado para publicação em **https://magoroot.github.io/site/**.

## Como publicar
1. Crie o repositório `site` em `magoroot/site` no GitHub.
2. Faça push deste código para o branch `main`.
3. Vá em *Settings → Pages* e selecione *Source: GitHub Actions*.
4. O workflow `.github/workflows/deploy-pages.yml` fará o build (CRA/Vite) e publicará automaticamente.
5. Para SPAs, use `HashRouter` ou defina `homepage` no `package.json` (já definido).
    Teste
## Ajustes de branding já feitos
- Metas e links apontando para `magoroot.github.io/site`.
- Títulos: “Joás Pardim — Portfólio”.
- Remoção de meta refresh antigo.

Edite os conteúdos (about, projects, social) conforme necessário.

/* =================================================
   posts.js — adicione aqui cada novo post do blog
   =================================================
   Campos:
     date    — "YYYY-MM-DD"  (usado para ordenar)
     title   — título do post
     desc    — descrição curta (1-2 frases)
     url     — caminho relativo ao index.html
     section — "writeups" | "fundamentos" | "critica"
     tag     — label exibida no card (texto livre)

   Posts são exibidos do mais recente para o mais antigo.
   Enquanto este array estiver vazio, o index exibe
   apenas a apresentação das seções sem posts.
================================================= */

const POSTS = [
  {  
    date:    "2026-06-22",
    title:   "Autenticação",
    desc:    "Como enumeração de usuários, brute-force, falhas de MFA e reset de senha quebram na prática.",
    url:     "fundamentos/web-security/autenticacao.html",
    section: "fundamentos",
    tag:     "Web Security",
    img:     "assets/img/autenticacao.png"
  },
  {
    date:    "2026-06-19",
    title:   "Controle de Acesso",
    desc:    "Como controles verticais, horizontais e IDOR quebram na prática.",
    url:     "fundamentos/web-security/controle-de-acesso.html",
    section: "fundamentos",
    tag:     "Web Security",
    img:     "assets/img/controle-de-acesso.png"   // 1280x720px recomendado
  },

  {
    date:    "2026-06-18",
    title:   "Path Traversal — Teoria e Exploração",
    desc:    "Como vulnerabilidades de travessia de caminhos permitem ler arquivos arbitrários no servidor.",
    url:     "fundamentos/web-security/path-traversal.html",
    section: "fundamentos",
    tag:     "Web Security",
    img:     "assets/img/path-traversal.png"   // 1280x720px recomendado
  },

];
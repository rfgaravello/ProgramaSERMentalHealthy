/* App.jsx - Programa SER - ver instruções no topo do arquivo */
/*
Programa SER - Single-file React landing page
Tech: React + Tailwind CSS

Como usar:
1) Crie um projeto React (Vite ou Create React App).
   Ex: npm create vite@latest ser-site -- --template react
2) Instale e configure TailwindCSS seguindo a docs do Tailwind.
3) Copie este arquivo como src/App.jsx (ou adapte para seu roteamento).
4) Adicione as imagens remotas (os links Unsplash já estão embutidos).
5) Rode: npm install && npm run dev (Vite) ou npm start (CRA).

Sugestões de deploy: Vercel, Netlify ou Cloudflare Pages.

Obs: textos em português; classe de estilo usa Tailwind. Personalize cores e imagens conforme sua identidade visual.
*/

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold text-lg">SER</div>
			<img src="/images/SERIcon.png" alt="" className="w-20 h-20"  />
            <div>
              <h1 className="text-lg font-semibold">Programa SER</h1>
              <p className="text-xs text-slate-600">Sabedoria • Equilíbrio • Realidade</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#metodologia" className="hover:underline">Metodologia</a>
            <a href="#beneficios" className="hover:underline">Benefícios</a>
            <a href="#contato" className="text-sky-600 font-medium hover:underline">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/rafael-garavello" target="_blank" rel="noreferrer" className="hidden md:inline-block text-sm px-4 py-2 border rounded-lg">LinkedIn</a>
            <a href="#contato" className="inline-block bg-sky-600 text-white px-4 py-2 rounded-lg text-sm shadow">Agende uma conversa</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Expansão da consciência para ambientes de trabalho mais saudáveis</h2>
            <p className="mt-6 text-lg text-slate-700">Mentoria e aconselhamento voltados para o bem-estar emocional, prevenção do burnout e a construção de uma cultura organizacional mais humana e resiliente.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium shadow">Agende uma conversa</a>
              <a href="#metodologia" className="inline-block border border-slate-300 px-6 py-3 rounded-lg text-slate-700">Conheça a metodologia</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-sm font-semibold">Sabedoria</h4>
                <p className="text-xs text-slate-600 mt-2">Estoicismo aplicado ao cotidiano corporativo.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-sm font-semibold">Equilíbrio</h4>
                <p className="text-xs text-slate-600 mt-2">Princípios de neurociência para regulação emocional.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-sm font-semibold">Realidade</h4>
                <p className="text-xs text-slate-600 mt-2">Mindfulness e práticas de presença.</p>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500">* Posicionamos o Programa SER como aconselhamento e mentoria — não substituímos serviços de psicoterapia ou psiquiatria.</p>
          </div>

          <div className="relative">
            <img src="https://images.unsplash.com/photo-1523264766116-ef2be3b6b531?w=1400&q=80&auto=format&fit=crop" alt="Equipe em conversa e mindfulness" className="w-full rounded-2xl shadow-xl" />

            <div className="mt-4 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80&auto=format&fit=crop" alt="Momento de reflexão" className="w-full rounded-lg shadow" />
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80&auto=format&fit=crop" alt="Prática de respiração" className="w-full rounded-lg shadow" />
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute inset-x-0 bottom-0 -mb-1">
          <svg viewBox="0 0 1440 60" className="w-full h-16" preserveAspectRatio="none">
            <path d="M0 0h1440v40c-200 20-420 40-720 0C420 10 200 0 0 40z" fill="#ffffff"/>
          </svg>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">O que é o Programa SER?</h3>
            <p className="mt-4 text-slate-700">O Programa SER (Sistema de Expansão da Realidade) é uma abordagem integrativa de mentoria que une princípios do estoicismo, fundamentos de neurociência e práticas de mindfulness para promover bem-estar, resiliência e ambientes organizacionais éticos e compassivos.</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Foco prático:</strong> Exercícios aplicáveis no dia a dia corporativo para regulação emocional e tomada de decisão com clareza.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Não clínico:</strong> O programa é de aconselhamento e mentoria, destinado a apoiar o crescimento consciencial — não substitui terapia.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Formato flexível:</strong> Workshops, sessões em grupo, mentorias para líderes e trilhas auto-guiadas.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-xl font-semibold">Quem conduz</h4>
              <p className="mt-3 text-slate-600">Rafael Garavello — mentor e facilitador do Programa SER. Atua com práticas de autoconhecimento, filosofia aplicada e estratégias de bem-estar em organizações.</p>

              <div className="mt-6">
                <a href="https://www.linkedin.com/in/rafael-garavello" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg border">Perfil LinkedIn</a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop" alt="caminhada meditativa" className="w-full rounded-lg shadow" />
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop" alt="mesa de reunião humanizada" className="w-full rounded-lg shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold">Metodologia</h3>
          <p className="mt-4 text-slate-700">Nossa abordagem combina aprendizado conceitual e práticas experiencialess: workshops, exercícios de atenção plena, micro-hábitos baseados em neurociência e mentorias para lideranças.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Workshops</h4>
              <p className="mt-2 text-sm text-slate-600">Sessões interativas (2–4 horas) para equipes com exercícios práticos e discussões guiadas.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Mentoria de Liderança</h4>
              <p className="mt-2 text-sm text-slate-600">Programa de desenvolvimento para líderes focado em regulação emocional, comunicação e tomada de decisão ética.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h4 className="font-semibold">Trilhas Auto-guiadas</h4>
              <p className="mt-2 text-sm text-slate-600">Conteúdo estruturado para práticas semanais, com micro-exercícios e material de apoio.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="font-semibold">Componentes base</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Exercícios de atenção plena (mindfulness)</li>
                <li>• Práticas estoicas aplicadas (reflexões, pre-mortem, dicotomias)</li>
                <li>• Ferramentas de regulação emocional baseadas em neurociência</li>
                <li>• Planos de ação individuais e para equipes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h5 className="font-semibold">Métricas de impacto sugeridas</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Escalas de estresse percebido antes e depois</li>
                <li>• NPS interno para programas de bem-estar</li>
                <li>• Taxa de engajamento nas atividades</li>
                <li>• Feedback qualitativo estruturado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold">Benefícios para sua empresa</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">Redução do burnout</h4>
            <p className="mt-2 text-sm text-slate-600">Práticas preventivas que ajudam a diminuir esgotamento emocional.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">Maior engajamento</h4>
            <p className="mt-2 text-sm text-slate-600">Colaboradores mais presentes e motivados em suas atividades.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h4 className="font-semibold">Liderança consciente</h4>
            <p className="mt-2 text-sm text-slate-600">Líderes com ferramentas práticas para apoiar suas equipes.</p>
          </div>
        </div>

        <div className="mt-10 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8">
          <h4 className="text-xl font-semibold">Oferta Corporativa (exemplo)</h4>
          <p className="mt-2 text-slate-600 text-sm">Programa piloto de 8 semanas: 4 workshops + 4 sessões de mentoria de liderança + trilha auto-guiada. Relatório de impacto ao final.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Quer que sua empresa SER diferente?</h4>
            <p className="mt-2 text-sm opacity-90">Agende uma conversa introdutória sem compromisso.</p>
          </div>

          <div className="flex gap-4">
            <a href="mailto:contato@programaser.com.br?subject=Quero%20saber%20mais%20sobre%20o%20Programa%20SER" className="bg-white text-sky-600 px-5 py-3 rounded-lg font-medium">Enviar email</a>
            <a href="#contato" className="border border-white px-5 py-3 rounded-lg">Fale comigo</a>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold">Contato</h3>
            <p className="mt-3 text-slate-600">Preencha o formulário abaixo ou envie uma mensagem direta no LinkedIn.</p>

            <form action="mailto:contato@programaser.com.br" method="post" encType="text/plain" className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-slate-600">Nome</label>
                <input name="Nome" required className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Empresa</label>
                <input name="Empresa" className="w-full mt-2 px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" name="Email" required className="w-full mt-2 px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Mensagem</label>
                <textarea name="Mensagem" rows="4" className="w-full mt-2 px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <button type="submit" className="bg-emerald-500 text-white px-6 py-3 rounded-lg">Enviar mensagem</button>
              </div>
            </form>

            <div className="mt-6 text-sm text-slate-600">
              <p>Email: <a href="mailto:contato@programaser.com.br" className="text-sky-600">contato@programaser.com.br</a></p>
              <p className="mt-1">LinkedIn: <a href="https://www.linkedin.com/in/rafael-garavello" target="_blank" rel="noreferrer" className="text-sky-600">rafael-garavello</a></p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Recursos para começar</h4>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Material introdutório em PDF (podemos gerar o PDF com os slides).</li>
              <li>• Mini-trilha de 4 semanas para times (checklist e micro-práticas).</li>
              <li>• Relatório de resultados após piloto.</li>
            </ul>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <a href="#" className="block px-4 py-3 border rounded-lg">Solicitar PDF com apresentação</a>
              <a href="#" className="block px-4 py-3 border rounded-lg">Solicitar proposta piloto</a>
            </div>

            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-lg p-4">
              <p className="text-sm text-slate-600">Atenção: o Programa SER é aconselhamento e mentoria. Para casos clínicos procure profissionais de saúde mental qualificados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Programa SER — Rafael Garavello</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:underline">Política de Privacidade</a>
            <a href="#" className="hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


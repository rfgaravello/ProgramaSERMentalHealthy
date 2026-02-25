import React from "react";
import ContactForm from "./ContactForm";

export default function App() {

  const whatsappNumber = "5519996210076";
  const whatsappMessage = "Olá Rafael, gostaria de saber mais sobre o Programa SER.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#140c1f] via-[#1b1230] to-[#0f0a1a] text-slate-100 font-sans">
      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-2xl z-50 transition-all duration-300"
      >
        WhatsApp
      </a>

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/70 backdrop-blur-xl z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg">
              SER
            </div>
            <span className="font-semibold tracking-wide text-lg">Programa SER</span>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg">
            <img
              src="/images/SERIcon.png"
            
            /> 
            </div>
         
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/rafaelgaravello"
              target="_blank"
              rel="noreferrer"
              className="hidden md:block border border-slate-600 px-4 py-2 rounded-lg text-sm hover:border-emerald-400 transition"
            >
              LinkedIn
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-lg text-sm font-medium transition shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-36 pb-28 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-emerald-400 uppercase text-sm tracking-[0.2em]">
            Mentoria de Desenvolvimento Humano
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
            Consciência, Equilíbrio e
            <span className="block text-emerald-400 mt-2">Responsabilidade</span>
          </h1>

          <p className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed">
            Um processo estruturado de autoconhecimento aplicado à vida pessoal e profissional,
            para quem deseja evoluir com clareza, maturidade emocional e decisões mais conscientes.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="#contato"
              className="bg-white text-slate-900 px-7 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
            >
              Solicitar Informações
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-600 px-7 py-3 rounded-xl hover:border-emerald-400 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661277666101-01fb123f2a4c?q=80&w=1170&auto=format&fit=crop"
            alt="Equipe em conversa"
            className="w-full rounded-3xl shadow-2xl"
          />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1711390047534-49fa467d891d?w=600&auto=format&fit=crop&q=60"
              alt="Momento de reflexão"
              className="w-full rounded-xl shadow-lg"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1667533288519-49d00a1620b2?w=600&auto=format&fit=crop&q=60"
              alt="Clareza e foco"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="py-28 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">O Método SER</h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Uma abordagem estruturada de desenvolvimento humano voltada para ampliar clareza,
            equilíbrio emocional e responsabilidade nas decisões do dia a dia.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">

            {[
              {
                title: "Sabedoria Prática",
                text: "Desenvolvimento da capacidade de refletir antes de reagir, reconhecer padrões emocionais e tomar decisões com maior discernimento."
              },
              {
                title: "Equilíbrio Emocional",
                text: "Regulação emocional aplicada a situações reais da vida pessoal e profissional, fortalecendo estabilidade interna mesmo sob pressão."
              },
              {
                title: "Responsabilidade Consciente",
                text: "Assumir autoria sobre a própria trajetória, desenvolver comunicação madura e alinhar atitudes aos valores e objetivos."
              }
            ].map((item, index) => (
              <div key={index} className="p-8 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-emerald-400 transition duration-300 shadow-lg">
                <h3 className="text-xl font-semibold text-emerald-400">{item.title}</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            ))}

          </div>

          {/* IMAGEM DO MÉTODO */}
          <div className="mt-20 flex justify-center">
            <img
              src="/images/notebooklm_SER.png"
              alt="Infográfico do Método SER"
              className="rounded-3xl shadow-2xl border border-slate-800 max-w-5xl w-full"
            />
          </div>
         

        </div>
      </section>

      {/* FORMATO */}
      <section className="py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <img
          src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=80&auto=format&fit=crop"
          alt="Reflexão"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <h2 className="text-3xl font-bold">Como Funciona</h2>

          <ul className="mt-10 space-y-4 text-slate-400 leading-relaxed">
            <li>• Diagnóstico inicial de desafios e objetivos pessoais</li>
            <li>• Sessões estruturadas de mentoria individual</li>
            <li>• Aplicação prática no contexto real</li>
            <li>• Plano de desenvolvimento contínuo</li>
          </ul>

          <div className="mt-12 flex gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 px-7 py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition"
            >
              Conversar agora
            </a>

            <a
              href="mailto:contato@programaser.com.br?subject=Quero saber mais sobre o Programa SER"
              className="border border-slate-600 px-7 py-3 rounded-xl hover:border-emerald-400 transition"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-slate-950 border-t border-slate-800 py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Contato</h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block bg-emerald-500 px-6 py-4 rounded-xl text-center shadow-lg hover:bg-emerald-600 transition"
              >
                Falar via WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/rafaelgaravello"
                target="_blank"
                rel="noreferrer"
                className="block border border-slate-600 px-6 py-4 rounded-xl text-center hover:border-emerald-400 transition"
              >
                LinkedIn
              </a>
              <div className="w-30 h-30 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg">
            <img  src="/images/SERIcon.png"   
            /> 
            </div>
            </div>

          </div>

          <p className="mt-16 text-center text-sm text-slate-500">
            Programa de mentoria voltado ao desenvolvimento pessoal e profissional.
            Não se trata de atendimento clínico ou psicológico.
          </p>
        </div>
       
      </section>
    
      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Programa SER — Rafael Garavello
      </footer>

    </div>
  );
}
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", mensagem: "" });
      } else {
        setStatus(data.error || "Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro de conexão com o servidor.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-slate-800 p-8 rounded-2xl"
    >
      <div>
        <label className="block text-sm mb-2">Nome</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg w-full"
      >
        {loading ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {status && (
        <p className="text-sm text-center mt-4">
          {status}
        </p>
      )}
    </form>
  );
}
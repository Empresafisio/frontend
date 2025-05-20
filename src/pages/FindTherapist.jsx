import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profissionaisData from "../data/profissionais";
import "../styles/FindTherapist.css";

const subespecialidadesPorEspecialidade = {
  "Fisioterapia": [
    "Fisioterapia Músculo-Esquelética",
    "Fisioterapia Neurológica",
    "Fisioterapia Respiratória",
    "Fisioterapia Cardiorrespiratória",
    "Fisioterapia Desportiva",
    "Fisioterapia Geriátrica",
    "Fisioterapia Pediátrica",
    "Fisioterapia na Saúde da Mulher",
    "Fisioterapia Uroginecológica",
    "Fisioterapia Oncológica",
    "Fisioterapia Dermatofuncional",
    "Fisioterapia Traumato-Ortopédica",
    "Fisioterapia Reumatológica",
    "Fisioterapia Vestibular (Reabilitação do equilíbrio)",
    "Fisioterapia Pélvica",
    "Fisioterapia em Cuidados Intensivos",
    "Fisioterapia Aquática",
    "Fisioterapia do Trabalho (Ergonomia e reabilitação ocupacional)"
  ],
  "Osteopatia": [],
  "Enfermagem ao domicílio": []
};

const FindTherapist = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const especialidadeQuery = queryParams.get("especialidade") || "";

  const [especialidade, setEspecialidade] = useState(especialidadeQuery);
  const [subespecialidade, setSubespecialidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");
  const [nomeSearch, setNomeSearch] = useState("");

  useEffect(() => {
    setEspecialidade(especialidadeQuery);
    setSubespecialidade("");
  }, [especialidadeQuery]);

  const especialidades = [...new Set(profissionaisData.map(p => p.especialidade))];
  const localizacoes = [...new Set(profissionaisData.map(p => p.localizacao))];

  const profissionaisFiltrados = profissionaisData.filter((p) => {
    const precoNum = parseFloat(p.preco.replace("€", ""));

    return (
      (especialidade === "" || p.especialidade === especialidade) &&
      (subespecialidade === "" || p.subespecialidade === subespecialidade) &&
      (localizacao === "" || p.localizacao === localizacao) &&
      (nomeSearch === "" || p.nome.toLowerCase().includes(nomeSearch.toLowerCase())) &&
      (precoMin === "" || precoNum >= parseFloat(precoMin)) &&
      (precoMax === "" || precoNum <= parseFloat(precoMax))
    );
  });

  return (
    <>
      <Header />
      <main className="find-therapist-page">
        <section className="therapist-header">
          <h1>Encontre um Profissional</h1>
          <p>Filtre por especialidade, subespecialidade, localização, nome ou preço.</p>
        </section>

        <section className="therapist-filter-section">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={nomeSearch}
            onChange={(e) => setNomeSearch(e.target.value)}
          />

          <select value={especialidade} onChange={(e) => {
            setEspecialidade(e.target.value);
            setSubespecialidade(""); // limpar subespecialidade
          }}>
            <option value="">Todas as Especialidades</option>
            {especialidades.map((esp, index) => (
              <option key={index} value={esp}>{esp}</option>
            ))}
          </select>

          {especialidade && subespecialidadesPorEspecialidade[especialidade]?.length > 0 && (
            <select value={subespecialidade} onChange={(e) => setSubespecialidade(e.target.value)}>
              <option value="">Todas as Subespecialidades</option>
              {subespecialidadesPorEspecialidade[especialidade].map((sub, idx) => (
                <option key={idx} value={sub}>{sub}</option>
              ))}
            </select>
          )}

          <select value={localizacao} onChange={(e) => setLocalizacao(e.target.value)}>
            <option value="">Todas as Localizações</option>
            {localizacoes.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Preço mín (€)"
            value={precoMin}
            onChange={(e) => setPrecoMin(e.target.value)}
            min="0"
          />

          <input
            type="number"
            placeholder="Preço máx (€)"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
            min="0"
          />
        </section>

        <section className="lista-profissionais">
          {profissionaisFiltrados.map((p) => (
            <div key={p.id} className="card" onClick={() => window.location.href = `/profissional/${p.id}`}>
              <img src={p.foto} alt={p.nome} />
              <h3>{p.nome}</h3>
              <p>{p.especialidade} · {p.localizacao}</p>
              {p.subespecialidade && <p style={{ fontStyle: "italic" }}>{p.subespecialidade}</p>}
              <p><strong>{p.preco}</strong></p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FindTherapist;

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../components/context/AuthContext";
import profissionais from "../data/profissionais";
import "../styles/MarcarConsultaCliente.css";

const MarcarConsultaCliente = () => {
  const { user } = useAuth();

  const [nomeSearch, setNomeSearch] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [precoMin, setPrecoMin] = useState("");
  const [precoMax, setPrecoMax] = useState("");

  const especialidades = [...new Set(profissionais.map(p => p.especialidade))];
  const localizacoes = [...new Set(profissionais.map(p => p.localizacao))];

  const aplicarFiltros = (lista) => {
    return lista.filter((p) => {
      const preco = parseFloat(p.preco.replace("€", ""));
      return (
        (!nomeSearch || p.nome.toLowerCase().includes(nomeSearch.toLowerCase())) &&
        (!especialidade || p.especialidade === especialidade) &&
        (!localizacao || p.localizacao === localizacao) &&
        (!precoMin || preco >= parseFloat(precoMin)) &&
        (!precoMax || preco <= parseFloat(precoMax))
      );
    });
  };

  const favoritos = aplicarFiltros(profissionais.filter(p => user.favoritos?.includes(p.id)));
  const anteriores = aplicarFiltros(profissionais.filter(p => user.historico?.includes(p.id)));
  const outros = aplicarFiltros(profissionais.filter(p =>
    !user.favoritos?.includes(p.id) && !user.historico?.includes(p.id)
  ));

  return (
    <>
      <Header />
      <main className="find-therapist-page">
        <section className="therapist-header">
          <h1>Marcar Nova Consulta</h1>
          <p>Filtre por nome, especialidade, localização ou intervalo de preço.</p>
        </section>

        <section className="therapist-filter-section">
          <input
            type="text"
            placeholder="Pesquisar por nome..."
            value={nomeSearch}
            onChange={(e) => setNomeSearch(e.target.value)}
          />
          <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}>
            <option value="">Todas as Especialidades</option>
            {especialidades.map((esp, index) => (
              <option key={index} value={esp}>{esp}</option>
            ))}
          </select>
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
          />
          <input
            type="number"
            placeholder="Preço máx (€)"
            value={precoMax}
            onChange={(e) => setPrecoMax(e.target.value)}
          />
        </section>

        {favoritos.length > 0 && (
          <section className="lista-profissionais">
            <h3 className="secao-titulo">Terapeutas Favoritos</h3>
            {favoritos.map((p) => (
              <div key={p.id} className="card" onClick={() => window.location.href = `/profissional/${p.id}`}>
                <img src={p.foto} alt={p.nome} />
                <h3>{p.nome}</h3>
                <p>{p.especialidade} · {p.localizacao}</p>
                <p><strong>{p.preco}</strong></p>
                <button>Agendar</button>
              </div>
            ))}
          </section>
        )}

        {anteriores.length > 0 && (
          <section className="lista-profissionais">
            <h3 className="secao-titulo">Terapeutas Anteriores</h3>
            {anteriores.map((p) => (
              <div key={p.id} className="card" onClick={() => window.location.href = `/profissional/${p.id}`}>
                <img src={p.foto} alt={p.nome} />
                <h3>{p.nome}</h3>
                <p>{p.especialidade} · {p.localizacao}</p>
                <p><strong>{p.preco}</strong></p>
                <button>Agendar</button>
              </div>
            ))}
          </section>
        )}

        {outros.length > 0 && (
          <section className="lista-profissionais">
            <h3 className="secao-titulo">Novos Profissionais</h3>
            {outros.map((p) => (
              <div key={p.id} className="card" onClick={() => window.location.href = `/profissional/${p.id}`}>
                <img src={p.foto} alt={p.nome} />
                <h3>{p.nome}</h3>
                <p>{p.especialidade} · {p.localizacao}</p>
                <p><strong>{p.preco}</strong></p>
                <button>Agendar</button>
              </div>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default MarcarConsultaCliente;


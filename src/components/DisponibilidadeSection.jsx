import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/DisponibilidadeSection.css";

const DisponibilidadeSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [disponibilidades, setDisponibilidades] = useState({});
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  const dateKey = selectedDate.toISOString().split("T")[0];
  const slots = disponibilidades[dateKey] || [];

  const adicionarHorario = () => {
    if (!startHour || !endHour || startHour >= endHour) return alert("Horas inválidas");

    const novo = { start: startHour, end: endHour };
    const atualizados = [...slots, novo];
    atualizados.sort((a, b) => a.start.localeCompare(b.start));

    setDisponibilidades({ ...disponibilidades, [dateKey]: atualizados });
    setStartHour("");
    setEndHour("");
  };

  const removerHorario = (index) => {
    const atualizados = slots.filter((_, i) => i !== index);
    const novas = { ...disponibilidades };
    if (atualizados.length > 0) {
      novas[dateKey] = atualizados;
    } else {
      delete novas[dateKey];
    }
    setDisponibilidades(novas);
  };

  return (
    <section className="disponibilidade-section">
      <h2>Definir Disponibilidades</h2>
      <div className="disponibilidade-grid">
        <div className="calendar-wrapper">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            locale="pt-PT"
          />
        </div>

        <div className="form-wrapper">
          <h3>{selectedDate.toLocaleDateString("pt-PT")}</h3>

          {slots.length > 0 ? (
            <ul className="slots-list">
              {slots.map((slot, idx) => (
                <li key={idx}>
                  {slot.start} – {slot.end}
                  <button onClick={() => removerHorario(idx)}>Remover</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem horários definidos para este dia.</p>
          )}

          <div className="input-row">
            <label>Das</label>
            <input type="time" value={startHour} onChange={(e) => setStartHour(e.target.value)} />
            <label>às</label>
            <input type="time" value={endHour} onChange={(e) => setEndHour(e.target.value)} />
            <button onClick={adicionarHorario}>Adicionar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisponibilidadeSection;


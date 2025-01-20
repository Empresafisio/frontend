import React from "react";
import "../styles/WorkProcess.css";
import IconStep1 from "../assets/process-1.svg";
import IconStep2 from "../assets/process-3.svg";
import IconStep3 from "../assets/process-1-1.svg";

const WorkProcess = () => {
  return (
    <section className="work-process-section">
      <h3 className="work-process-title">WORK PROCESS</h3>
      <h2 className="work-process-heading">How it works?</h2>
      <div className="process-container">
        <div className="process-step">
          <div className="step-icon">
            <img src={IconStep1} alt="Step 1" />
          </div>
          <p>Escolha o melhor profissional para si</p>
        </div>
        <div className="process-arrow">→</div>
        <div className="process-step">
          <div className="step-icon">
            <img src={IconStep2} alt="Step 2" />
          </div>
          <p>Escolha os horários que mais lhe convêm</p>
        </div>
        <div className="process-arrow">→</div>
        <div className="process-step">
          <div className="step-icon">
            <img src={IconStep3} alt="Step 3" />
          </div>
          <p>Contacte o terapeuta para alguma informação adicional</p>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

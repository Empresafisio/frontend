import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        {/* Primeira Seção */}
        <div className="about-us-section-one">
          <h2>Sobre Nós</h2>
          <p>
            A HomeCare nasceu a partir de quatro colegas com a visão de melhorar
            a qualidade do serviço prestado na área da saúde, permitindo a
            ligação direta entre o paciente e a rede de profissionais de saúde,
            em que apenas alguns cliques consiga encontrar toda a informação que
            precisa para resolver o seu problema.
          </p>
          <p>
            Aliado à nossa missão em dar a facilidade ao paciente para estar no
            seu conforto enquanto tem um acompanhamento mais personalizado,
            também queremos valorizar os nossos profissionais de saúde, que se
            encontram numa situação de precariedade laboral, e assim dando a
            facilidade a ambos os lados de ter uma ligação mais próxima e
            fiável.
          </p>
          <p>
            Devido ao início desta empresa tão jovem, certas áreas podem ainda
            não estar disponíveis devido à localização dos nossos colaboradores,
            no entanto consulte o mapa e veja que profissionais se encontram
            disponíveis na sua área.
          </p>
        </div>

        {/* Segunda Seção */}
        <div className="about-us-section-two">
          <h2>História dos fundadores e da FisioHome</h2>
          <p>
            Sabemos que cada pessoa é diferente e dado isto, percebemos a
            necessidade acrescida nos dias de hoje, de cada pessoa escolher o
            profissional de saúde mais indicado para si. Damos por isto a
            possibilidade de o paciente poder escolher o melhor profissional
            para o seu caso específico aumentando assim a confiança entre
            paciente e terapeuta. Disponibilizamos serviços de Fisioterapia em
            várias áreas como por exemplo, músculo-esquelética (tendinites,
            ruturas musculares, dores musculares entre outros), cardiorrespiratória
            (Défices pulmonares, cardíacos, pneumonias, entre outros),
            neurologia (AVC, Alzheimer, Parkinson, paralisias, entre outros),
            pediatria, pilates clínico, exercício clínico, entre várias outras
            terapias.
          </p>
          <p>
            O nosso principal objetivo é melhorar a qualidade e personalização
            da saúde e dar novas possibilidades aos profissionais de saúde de
            poderem trabalhar a 100% com cada paciente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

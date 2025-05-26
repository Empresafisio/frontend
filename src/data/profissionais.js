const profissionais = [
  {
    id: "1",
    nome: "Joana Silva",
    localizacao: "Lisboa",
    freguesia: "Areeiro",
    foto: "/assets/profissionais/ana.jpg",
    especialidadesDetalhadas: [
      {
        especialidade: "Fisioterapia",
        subespecialidade: "Fisioterapia Desportiva",
        preco: 40
      },
      {
        especialidade: "Fisioterapia",
        subespecialidade: "Fisioterapia Músculo-Esquelética",
        preco: 42
      },
      {
        especialidade: "Osteopatia",
        subespecialidade: "", // sem sub
        preco: 38
      }
    ],
    formacoes: [
      "Licenciatura em Fisioterapia - Escola Superior de Saúde",
      "Pós-graduação em Reabilitação Desportiva"
    ],
    locaisTrabalho: [
      "Clínica Movimento",
      "Hospital Santa Maria"
    ]
  },
  {
    id: "2",
    nome: "Carlos Martins",
    localizacao: "Porto",
    freguesia: "Cedofeita",
    foto: "/assets/profissionais/joao.jpg",
    especialidadesDetalhadas: [
      {
        especialidade: "Osteopatia",
        subespecialidade: "", // sem sub
        preco: 35
      }
    ],
    formacoes: [
      "Licenciatura em Osteopatia - ESSV",
      "Curso Avançado em Técnicas Miofasciais"
    ],
    locaisTrabalho: [
      "Clínica Terapias Norte"
    ]
  },
  {
    id: "3",
    nome: "Rita Fernandes",
    localizacao: "Lisboa",
    freguesia: "Penha de França",
    foto: "/assets/profissionais/marta.jpg",
    especialidadesDetalhadas: [
      {
        especialidade: "Enfermagem ao domicílio",
        subespecialidade: "", // sem sub
        preco: 30
      }
    ],
    formacoes: [
      "Licenciatura em Enfermagem - ESEL",
      "Especialização em Cuidados Paliativos"
    ],
    locaisTrabalho: [
      "Serviço Domiciliário EnfCare"
    ]
  }
];

export default profissionais;


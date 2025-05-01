import React from "react";

const HistoryTable = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">Histórico de Montantes Recebidos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-gray-300 px-4 py-2">Ano/Mês</th>
              <th className="border border-gray-300 px-4 py-2">#Sessões</th>
              <th className="border border-gray-300 px-4 py-2">S/Retenção</th>
              <th className="border border-gray-300 px-4 py-2">C/Retenção</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{item.anoMes}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.sessoes}</td>
                  <td className="border border-gray-300 px-4 py-2">{item.sRetencao}€</td>
                  <td className="border border-gray-300 px-4 py-2">{item.cRetencao}€</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                  Sem registros
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryTable;

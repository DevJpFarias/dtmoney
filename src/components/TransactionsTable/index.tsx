import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
        <tr>
            <td>Pix</td>
            <td className="deposit">+ R$10</td>
            <td>Transferências</td>
            <td>02/10/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$200</td>
            <td>Casa</td>
            <td>01/11/2022</td>
          </tr>

          <tr>
            <td>Internet</td>
            <td className="withdraw">- R$80</td>
            <td>Casa</td>
            <td>01/11/2022</td>
          </tr>

          <tr>
            <td>Salário Mensal</td>
            <td className="deposit">+ R$2.000</td>
            <td>Trabalho</td>
            <td>31/10/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
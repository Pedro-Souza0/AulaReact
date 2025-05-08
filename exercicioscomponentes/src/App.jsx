import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"


export default function App()
{
  return(
    <div>

      <h1>Exercícios de Componentes</h1>


     <h3>Chamada da função do Exemplo1</h3>
     <Exemplo1 numero1={8} numero2={2} />
     <Exemplo1 numero1={10} numero2={22} />
     <Exemplo1 numero1={7.8} numero2={9.4} />
     <Exemplo1 numero1={-90} numero2={23} />

     <hr />
    
      <h3>Chamada da função do Exercicio1</h3>
      <Exercicio1 F={32} />
      <Exercicio1 F={100} />
      <Exercicio1 F={212} />
      <Exercicio1 F={-40} />
    
      <h3>Chamada da função do Exercicio2</h3>
      <Exercicio2 peso={70} altura={1.75} />
      <Exercicio2 peso={80} altura={1.80} />
      <Exercicio2 peso={60} altura={1.65} />
      <Exercicio2 peso={90} altura={1.85} />

    </div>
  )
}



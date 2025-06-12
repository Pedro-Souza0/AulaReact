import "./Estilos.css";

export default function Exercicio3()
{
    const titulo = {
        color : "red",
        backgroundColor : "yellow",
        textAling : "center",
        padding : "10px",
        textAling : "center"
    };

    return(
        <div>
            <h2 style={titulo}>Exemplo de Estilo em Objeto</h2>

            <p>
                Este foi um exemplo de estilo em linha, mas utilizando uma variavel objeto para armazenar os <span style={titulo}>estilos</span>.
            </p>
        </div>
    )
}    
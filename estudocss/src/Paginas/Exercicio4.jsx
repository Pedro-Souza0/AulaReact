export default function Exercicio4({cor})
{
    const borda = {
        color : cor,
        border : "4px solid " + cor,
        textAling : "center",
        padding : "10px"  
    };

    

    return(
        <div>
            <h2 style={borda}>Pedro Augusto</h2>

            <p style={{color:cor}}>
                Exercicio 
            </p>
        </div>
    );
}
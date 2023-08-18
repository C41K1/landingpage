import axios from "axios";
import Styles from "./contato.module.scss";

const Contato = () =>{

    const SendEmail = () => {
        axios.post("api/sendEmail").then(()=>console.log("funcionou")).catch(()=>console.log("erro"));
    }

    return (
    <div className={Styles.container}>
        <div className={Styles.titulo}>
            <h1>ENTRE EM CONTATO E TRANSFORME A SUA PRODUÇÃO</h1>
        </div>
        <div className = {Styles.formulario}>

        
            <input type="text" placeholder="nome" required/>
            <input type="email" placeholder="email" required/>
            <input type="number" placeholder="telefone" required/>
            <input type="text" className={Styles.msg} placeholder="mensagem" required/>

        <div calssName = {Styles.botao}>
            <button onClick={SendEmail}>ENVIAR</button>
        </div>

        

        </div>
    </div>
    )
}

export default Contato
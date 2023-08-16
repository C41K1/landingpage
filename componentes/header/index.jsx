import Image from "next/image";
import Link from "next/link";
import logoind from "/public/imagens/ind2.png";
import styles from"./header.module.scss";

const Header = () => {
    return <div className = {styles.container}> 
        <div className = {styles.logotipo}>
            <Image src={logoind}/>
        </div>
        <div className = {styles.menu}>
        <ul>
            <Link href="/">HOME</Link>
            <Link href="/">PRODUTOS</Link>
            <Link href="/">CASES</Link>
        </ul>
        </div>
        <div className = {styles.action}>
            <button className ={styles.button}>ENTRE EM CONTATO</button>
        </div>
    </div>;
};

export default Header;
import styles from "../styles/Card.module.css";

import Image from "next/image";
import Link from "next/link";

const Card = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="150"
        height="150"
        alt={pokemon.id}
      />
      <p>#{pokemon.id}</p>
      <h3>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  );
};

export default Card;

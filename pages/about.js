import Image from "next/image";

import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellat
        quaerat sed fugit aliquam illum fugiat maiores voluptas saepe rerum
        ipsa, adipisci natus voluptatibus error non itaque totam, sint ullam.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
};

export default About;

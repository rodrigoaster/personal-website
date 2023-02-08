import { Body, Img, TextContainer } from "./styles";

import ProfileImg from '../../public/profile.png'

export function Home() {
  const variantsImg = {
    first: { opacity: 0 },
    last: { opacity: 1 }
  }
  
  const variantsTextBody = {
    first: { opacity: 0, y: 50 },
    last: { opacity: 1, y: 0 }
  }

  return (
    <Body>
      <Img 
        src={ProfileImg} 
        alt="profile photo of developer"
        initial="first"
        whileInView="last"
        viewport={{ once: true, amount: 0.8 }}
        variants={variantsImg}
        transition={{ type: "spring", stiffness: 20, delay: 2 }}
      />
      <TextContainer
        initial="first"
        whileInView="last"
        viewport={{ once: true, amount: 0.8 }}
        variants={variantsTextBody}
        transition={{ type: "spring", stiffness: 20, delay: 3 }}
      >
        <h1>Rodrigo Aster</h1><br />
        <h2>I am Software Developer at <a href="https://www.accenture.com/br-pt" target="_blank">@Accenture Brasil</a></h2><br />
        <p>Hi, welcome to my little world.</p><br />
        <p>I'm started my studies in Web Development a one year ago.</p><br />
        <p>Today, I'm working at Accenture Brasil as a Software Developer.</p><br />
        <p>Let's code! 😆</p>
      </TextContainer>
    </Body>
    );
  }
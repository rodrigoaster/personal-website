import * as S from "./styles";

import ProfileImg from '../../../public/profile.png'

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
    <>
      <S.Body>
        <S.ImgBox
          initial="first"
          whileInView="last"
          viewport={{ once: true, amount: 0.8 }}
          variants={variantsImg}
          transition={{ type: "spring", stiffness: 20, delay: 2 }}  
        >
          <S.Img
            src={ProfileImg}
            alt="profile photo of developer"
          />
        </S.ImgBox>
        <S.TextContainer
          initial="first"
          whileInView="last"
          viewport={{ once: true, amount: 0.8 }}
          variants={variantsTextBody}
          transition={{ type: "spring", stiffness: 20, delay: 3 }}
        >
          <S.Title>Rodrigo Aster</S.Title><br />
          <S.Subtitle>I am Software Developer at
            <S.Link 
              href="https://www.accenture.com/br-pt" 
              target="_blank"
              > @Accenture Brasil
            </S.Link>.
          </S.Subtitle><br />
          <S.Paragraph>Hi, welcome to my little world.</S.Paragraph><br />
          <S.Paragraph>I'm started my studies in Web Development a one year ago.</S.Paragraph><br />
          <S.Paragraph>Today, I'm working at Accenture Brasil as a Software Developer.</S.Paragraph><br />
          <S.Paragraph>Let's code! 😆</S.Paragraph>
        </S.TextContainer>
      </S.Body>
    </>
    );
  }
import { Container, Logo, Navbar, Navlink, Link } from './styles';

import imgLogo from '../../../public/logo.png'

export function Heading() {
  const variantsLogo = {
    first: { opacity: 0, y: 70 },
    last: { opacity: 1, y: 0 }
  }
  
  const variantsBody = {
    first: { opacity: 0 },
    last: { opacity: 1 }
  }

  return (
    <Container
      initial="first"
      whileInView="last"
      viewport={{ once: true, amount: 0.8 }}
      variants={variantsBody}
      transition={{ type: "spring", stiffness: 20, delay: 0.5 }}
    >
      <Logo
        initial="first"
        whileInView="last"
        viewport={{ once: true, amount: 0.8 }}
        variants={variantsLogo}
        transition={{ type: "spring", stiffness: 20, delay: 1.2 }}
      >
        <img src={imgLogo} alt="logo of header" />
      </Logo>
      <nav>
        <Navbar>
          <Navlink>
            <Link href='#'>Home</Link>
          </Navlink>
          <Navlink>
            <Link href='#'>Portifolio</Link>
          </Navlink>
          <Navlink>
            <Link href='#'>Contact</Link>
          </Navlink>
        </Navbar>
      </nav>
    </Container>
  );
}

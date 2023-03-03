import { useContext } from 'react';

import { Container, Logo, Navbar, Navlink, Link } from './styles';

import Switch from 'react-switch'

import img_logo_dark from '../../../public/logo.png'
import img_logo_light from '../../../public/logo-light.png'

import { ThemeContext } from 'styled-components';

interface HeadingProps {
  toggleTheme(): void;
}

export function Heading(props: HeadingProps) {
  const variantsLogo = {
    first: { opacity: 0, y: 70 },
    last: { opacity: 1, y: 0 }
  }
  
  const variantsBody = {
    first: { opacity: 0 },
    last: { opacity: 1 }
  }

  const { colores, title } = useContext(ThemeContext)

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
        {
          title === 'light' ? 
          <img src={img_logo_light} alt="logo of header" />
          :
          <img src={img_logo_dark} alt="logo of header" />
        }
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
      <Switch 
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offColor="#ccc"
        onColor='#001aff'
      />
    </Container>
  );
}

import styled from 'styled-components';

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 5px 100px;

  position: fixed;
`;



export const Logo = styled(motion.div)`
  img {
    width: 9.375rem;
    height: 7.5rem;
  }  
`


export const Navbar = styled.ul`
  display: flex; 

  padding-right: 60px;
`

export const Navlink = styled.li`
  padding-right: 40px;
`

export const Link = styled.a`
  font-size: 20px;

  text-decoration: none;

  position: relative;

  :after {
    content: " ";
    width: 0;
    height: 0.125rem;
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.colores.text};
    transition: 0.2s ease-in-out ;
    position: absolute;
  }

  :hover {
    ::after {
      width: 100%;
      left: 0;  
    }
  }
`
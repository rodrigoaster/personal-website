import styled from 'styled-components';

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 15px 50px;

  color: #fff;
`;

export const Logo = styled(motion.div)`
  
  img {
    width: 150px;
    height: 120px;
  }
  
`
export const Nav = styled.nav`
  
`
export const Navbar = styled.ul`
  display: flex; 
`
export const Navlink = styled.li`
  padding-right: 40px;
`
export const Link = styled.a`
  font-size: 24px;

  text-decoration: none;

  color: #fff;

  position: relative;

  :after {
    content: " ";
    width: 0;
    height: 2px;
    bottom: 0;
    right: 0;
    background-color: #fff;
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
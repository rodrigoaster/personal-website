import styled from "styled-components";
import { motion } from 'framer-motion'

export const Body = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #fff;

  height: 100vh;

  padding-top: 50px;

  h1 {
    padding-top: 72px;
  }

`

export const Img = styled(motion.img)`
  width: 25rem;
  height: 31.25rem;

  margin-top: 20px;

  border-radius: 100px;
`

export const TextContainer = styled(motion.p)`
  width: 38%;
  
  p {
    width: 80%;

    color: #808080;

    font-size: 24px;
    font-weight: 300;
  }

  a {
    text-decoration: none;

    color: #fff;

    :hover {
      color: #808080;
      transition: .5s ease-in-out;
    }
  }
`
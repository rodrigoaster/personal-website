import styled from "styled-components"

import { motion } from 'framer-motion'

export const Body = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;

  height: 100vh;
`


export const ImgBox = styled(motion.div)`
  width: 350px;
  height: 400px;

  display: flex;
  justify-content: center;
  
  background-color: #000000;

  border-radius: 20px;

  margin-top: 5rem;
  margin-left: 5rem;
`



export const Img = styled(motion.img)`
  width: 21.875rem;
  height: 25rem;

  border-radius: 20px;

`



export const TextContainer = styled(motion.p)`
  width: 40%;

  margin-top: 1.563px;
`

export const Title = styled(motion.h1)`
  padding-top: 72px;
  font-size: 32px;
`

export const Subtitle = styled(motion.h2)`
  width: 85%;

  font-size: 27px;
`

export const Paragraph = styled(motion.p)`
  width: 75%;

  color: #808080;

  font-size: 18px;
  font-weight: 300;
`

export const Link = styled(motion.a)`
  text-decoration: none;

  color: #fff;

  :hover {
    color: #808080;
    transition: .5s ease-in-out;
  }
`
import styled from "styled-components"

import { motion } from 'framer-motion'

export const Body = styled(motion.div)`
  display: flex;
  justify-content: space-around;
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

  margin-top: 70px;
`



export const Img = styled(motion.img)`
  width: 350px;
  height: 400px;

  border-radius: 20px;

`



export const TextContainer = styled(motion.p)`
  width: 38%;
`

export const Title = styled(motion.h1)`
  padding-top: 72px;
  font-size: 32px;
`

export const Subtitle = styled(motion.h2)`
  font-size: 27px;
`

export const Paragraph = styled(motion.p)`
  width: 80%;

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
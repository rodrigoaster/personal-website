import { ReactNode } from 'react';

import { Container } from './styles';

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <Container>
      <h1>Heading</h1>
      {children}
    </Container>
  );
}

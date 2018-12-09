import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 1rem 0 2rem;
`

export const H2 = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 1rem;
`

export const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const TextDark = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

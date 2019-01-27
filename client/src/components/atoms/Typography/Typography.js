import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.weight.light};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 2rem 0;
`

export const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 1rem;
`

export const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const TextDark = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const TextPrimary = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`

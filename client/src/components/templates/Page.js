import styled from 'styled-components'

const Page = styled.div`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.4rem;
  overflow-y: auto;
`

export default Page

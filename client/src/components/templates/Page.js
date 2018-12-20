import styled from 'styled-components'

const Page = styled.div`
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.4rem;
  overflow-y: auto;
`

export default Page

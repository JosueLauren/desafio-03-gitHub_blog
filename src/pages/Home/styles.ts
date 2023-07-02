import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 54rem;
  margin: auto;
  padding-bottom: 5rem;
`

export const ContainerPosts = styled.div`
  margin-top: 4.5rem;
`

export const SearchSection = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.75rem;

    h3 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.75rem;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const ListPosts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  grid-gap: 2rem;
`

import styled from 'styled-components'

export const ContentPostContainer = styled.div`
  margin-top: 2.5rem;

  img {
    width: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  ul {
    margin-left: 1rem;
    margin-bottom: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  h3 {
    border-bottom: 1px solid ${(props) => props.theme['base-label']};
    margin-bottom: 1rem;
  }

  h2,
  p {
    margin-bottom: 1rem;
  }

  pre {
    background-color: ${(props) => props.theme['base-border']};
    padding: 0.5rem;
    margin-bottom: 1rem;
  }
`

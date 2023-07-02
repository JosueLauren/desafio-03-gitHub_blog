import styled from 'styled-components'

export const InfoPostContainer = styled.div`
  width: 100%;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-background']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;

  > h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    height: max-content;
    font-size: 0.75rem;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
    margin-bottom: 1.25rem;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${(props) => props.theme['base-span']};
    }
  }
`

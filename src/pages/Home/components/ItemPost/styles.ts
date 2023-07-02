import styled from 'styled-components'

export const ItemPostContainer = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  width: 26rem;
  height: 16.25rem;
  border: 2px solid transparent;
  transition: border-color 0.2s;
  text-decoration: none;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1.25rem;
    gap: 1rem;

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      flex: 1;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.75rem;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 7rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['base-text']};
  }
`

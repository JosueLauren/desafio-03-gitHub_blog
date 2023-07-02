import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  gap: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-background']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -5rem;
`

export const Avatar = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 9.25rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Description = styled.div`
  flex: 1;
`

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const NameAndGitHubLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  > span {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
    border-bottom: 1px solid transparent;
    height: max-content;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const Bio = styled.p`
  margin-bottom: 1.5rem;
`

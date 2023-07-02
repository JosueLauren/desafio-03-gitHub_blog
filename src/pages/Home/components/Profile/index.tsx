import {
  Avatar,
  ProfileContainer,
  Description,
  Info,
  NameAndGitHubLink,
  Bio,
} from './styles'

import iconFollowrers from './../../../../assets/icon_followers.svg'
import iconGithub from './../../../../assets/icon_github.svg'
import iconOffice from './../../../../assets/icon_office.svg'
import iconSeta from './../../../../assets/icon_seta.svg'

interface IUser {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface ProfileProps {
  user: IUser
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <Avatar>
        <img src={user.avatar_url} alt="" />
      </Avatar>
      <Description>
        <NameAndGitHubLink>
          <span>{user.name}</span>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <span>Github</span>
            <img src={iconSeta} alt="" />
          </a>
        </NameAndGitHubLink>
        <Bio>{user.bio}</Bio>
        <Info>
          <p>
            <img src={iconGithub} alt="" />
            <span>{user.login}</span>
          </p>
          <p>
            <img src={iconOffice} alt="" />
            <span>{user.company || 'N/F'}</span>
          </p>
          <p>
            <img src={iconFollowrers} alt="" />
            <span>{user.followers} seguidores</span>
          </p>
        </Info>
      </Description>
    </ProfileContainer>
  )
}

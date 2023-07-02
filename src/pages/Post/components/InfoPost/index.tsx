import { InfoPostContainer, LinksContainer, Info } from './styles'

import iconComments from './../../../../assets/icon_comments.svg'
import iconGithub from './../../../../assets/icon_github.svg'
import iconCalendary from './../../../../assets/icon_calendary.svg'
import iconBack from './../../../../assets/Icon_back.svg'
import iconSeta from './../../../../assets/icon_seta.svg'

import { dateFormatter } from '../../../../utils/formatter'

import { NavLink } from 'react-router-dom'

interface IIssueCompleted {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

interface InforPostProps {
  issueCompleted: IIssueCompleted
}

export function InfoPost({ issueCompleted }: InforPostProps) {
  const dateFormated = issueCompleted?.created_at
    ? dateFormatter.format(new Date(issueCompleted.created_at))
    : issueCompleted.created_at

  return (
    <InfoPostContainer>
      <LinksContainer>
        <NavLink to="/">
          <img src={iconBack} alt="" />
          <span>Voltar</span>
        </NavLink>
        <a href={issueCompleted?.html_url}>
          <span>Ver no Github</span>
          <img src={iconSeta} alt="" />
        </a>
      </LinksContainer>
      <h3>{issueCompleted?.title}</h3>
      <Info>
        <p>
          <img src={iconGithub} alt="" />
          <span>{issueCompleted.user?.login}</span>
        </p>
        <p>
          <img src={iconCalendary} alt="" />
          <span>{dateFormated}</span>
        </p>
        <p>
          <img src={iconComments} alt="" />
          <span>{issueCompleted?.comments} comentários</span>
        </p>
      </Info>
    </InfoPostContainer>
  )
}

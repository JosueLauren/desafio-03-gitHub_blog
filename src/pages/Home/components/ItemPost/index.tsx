import { ItemPostContainer } from './styles'

import { dateFormatter } from '../../../../utils/formatter'

import { NavLink } from 'react-router-dom'

interface IIssue {
  number: number
  title: string
  body: string
  created_at: string
}

interface ItemPostProps {
  infoIssue: IIssue
}

export function ItemPost({ infoIssue }: ItemPostProps) {
  return (
    <NavLink
      style={{ textDecoration: 'none' }}
      to={`/post/${infoIssue.number}`}
    >
      <ItemPostContainer>
        <div>
          <h3>{infoIssue.title}</h3>
          <span>{dateFormatter.format(new Date(infoIssue.created_at))}</span>
        </div>
        <p>{infoIssue.body}</p>
      </ItemPostContainer>
    </NavLink>
  )
}

import { ContentPostContainer } from './styles'
import ReactMarkdown from 'react-markdown'

interface ContentPostProps {
  bodyIssue: string
}

export function ContentPost({ bodyIssue }: ContentPostProps) {
  return (
    <ContentPostContainer>
      <ReactMarkdown>{bodyIssue}</ReactMarkdown>
    </ContentPostContainer>
  )
}

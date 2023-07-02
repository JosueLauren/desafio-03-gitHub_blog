import { useEffect, useState } from 'react'
import { ContentPost } from './components/ContentPost'
import { InfoPost } from './components/InfoPost'
import { PostContainer } from './styles'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

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

export function Post() {
  const [issueCompleted, setIssueCompleted] = useState<IIssueCompleted>(
    {} as IIssueCompleted,
  )
  const { id } = useParams()

  const fetchIssueCompleted = async () => {
    const response = await api.get(
      `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`,
    )

    setIssueCompleted(response.data)
  }

  useEffect(() => {
    fetchIssueCompleted()
  }, [])

  console.log(issueCompleted)

  return (
    <PostContainer>
      {issueCompleted && <InfoPost issueCompleted={issueCompleted} />}
      {issueCompleted && <ContentPost bodyIssue={issueCompleted.body} />}
    </PostContainer>
  )
}

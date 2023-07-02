import { ChangeEvent, useEffect, useState } from 'react'
import { ItemPost } from './components/ItemPost'
import { Profile } from './components/Profile'
import {
  HomeContainer,
  ContainerPosts,
  SearchSection,
  ListPosts,
} from './styles'

import { api } from '../../lib/axios'

interface IUser {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface IIssue {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [user, setUser] = useState<IUser>({} as IUser)
  const [listIssues, setListIssues] = useState<IIssue[]>([])
  const [query, setQuery] = useState('')

  const fetchUser = async () => {
    const response = await api.get('/users/rocketseat-education')

    setUser(response.data)
  }

  const fetchIssues = async (query: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    })

    setListIssues([...response.data.items])
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    fetchIssues(query)
  }, [query])

  return (
    <HomeContainer>
      <Profile user={user} />

      <ContainerPosts>
        <SearchSection>
          <div>
            <h3>Publicações</h3>
            <span>{listIssues.length} publicações</span>
          </div>
          <input
            type="text"
            placeholder="Buscar conteúdo"
            value={query}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setQuery(event.target.value)
            }
          />
        </SearchSection>
        <ListPosts>
          {listIssues.length ? (
            listIssues.map((infoIssue) => (
              <ItemPost infoIssue={infoIssue} key={infoIssue.number} />
            ))
          ) : (
            <h3>Issue não encontrada !</h3>
          )}
        </ListPosts>
      </ContainerPosts>
    </HomeContainer>
  )
}

import { Sidebar } from '../../components/Sidebar/Sidebar'
import { TopBar } from '../../components/TopBar/TopBar'
import { Dashboard } from '../Dashboard/Dashboard'
import {
  ContentStyled,
  HomeStyled,
  SideAStyled,
  TopStyled,
} from './Home.styled'

export function Home() {
  return (
    <HomeStyled>
      <SideAStyled>
        <Sidebar />
      </SideAStyled>
      <ContentStyled>
        <TopStyled>
          <TopBar />
        </TopStyled>
        <Dashboard />
      </ContentStyled>
    </HomeStyled>
  )
}

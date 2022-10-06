import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { TopBar } from '../../components/TopBar/TopBar'

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
          <TopBar name="Thiago Menezes" email="exemplo@exemplo.com" />
        </TopStyled>
        <div>
          <Outlet />
        </div>
      </ContentStyled>
    </HomeStyled>
  )
}

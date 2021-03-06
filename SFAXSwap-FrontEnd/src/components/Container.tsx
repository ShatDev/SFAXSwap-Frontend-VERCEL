import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;

  background: url('/images/sfax_stars.png');
  background-repeat: no-repeat;
  // background-position: bottom 24px center;
  // background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/arch-dark.svg'),
      url('images/512x512_App_Icon.png'), url('images/512x512_App_Icon.png'), url('images/sfax_stars.png');
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px, center;
    background-size: contain, 266px, 266px, 100vw;
    min-height: 90vh;
  }
`

export default Container

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
`
const Header = styled.header`
    margin-bottom:65px;
`
const Content = styled.section`
  height: 100%;
  padding-bottom: 391px;
  @media ${size('xs')}{
    padding-bottom: 618px;
  }
  @media ${size('sm')}{
    padding-bottom: 468px;
  }
`
const Footer = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`
const PageTemplate = ({
  header,
  children,
  wallpaper,
  footer,
  ...props
}) => {

  if (wallpaper) {

    //Custom wallpaper
    if (wallpaper.indexOf('.jpg') > -1 || wallpaper.indexOf('.png') > -1) {

      injectGlobal`
  body{
    background-image: url('${wallpaper}');
    background-size: cover;
    background-position: center center;
    background-attachment:fixed;
  }
`
    } else {

      //Module wallpaper

      switch (wallpaper) {
        case 'File':
          injectGlobal`
      body{
        background-image: url(/demo/i2.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
        background-repeat: no-repeat;
        background-color: #222;
      }
    `
          break;
        case 'Login':
          injectGlobal`
      body{
        background-image: url(/background/11285_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `
          break;
        case 'Static':
          injectGlobal`
      body{
        background-image: url(/background/82168_orig.jpg);
        background-size: cover;
        background-position: center center;
        background-attachment:fixed;
      }
    `
          break;
        default:

      }
    }
  }

  return (
    <Wrapper {...props}>
      {header
        ? <Header>{header}</Header>
        : false}
      <Content>{children}</Content>
      {footer
        ? <Footer>{footer}</Footer>
        : false}
    </Wrapper>
  )
}

// PageTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired
// }

export default PageTemplate;

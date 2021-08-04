import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { darken, rem } from 'polished'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import { ReactComponent as LogoMobile } from '../../assets/svg/logo_mobile.svg'
// import { ReactComponent as AlchemistLogo } from '../../assets/images/alchemist_logo.svg'
import { ReactComponent as MenuIcon } from '../../assets/images/menu_icon.svg'
import { ExternalLink } from '../../theme'
import Row, { RowFixed } from '../Row'
import WalletConnect from '../../components/WalletConnect'
import { ButtonIcon } from '../../components/Button'
import AlchemistMenu from './AlchemistMenu'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.5rem 1rem;
  `}
  background: ${({ theme }) => theme.headerBg};
`

const HeaderRow = styled(RowFixed)`
  flex-grow: 1;
  flex-basis: 0;
  flex: ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  padding: 1rem 0 1rem 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.5rem 0 0.5rem 0;
`};
`

// const MistLogoWrapper = styled.div`
//   display: flex;
//   width: 32px;
//   margin: 0 25px 0 0;

//   svg {
//     display: flex;
//     width: 100%;
//   }
// `

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0 0.1rem 0;
  height: ${rem(80)};
  width: ${rem(80)};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `};

  > svg {
    height: 100%;
    width: auto;
  }
`

const LogoWrapperMobile = styled.div`
  display: flex;
  flex-direction: row;
  height: ${rem(60)};
  width: 5rem;
  margin: 0.5rem 0 0 0;

  > a {
    position: relative;
    height: auto;
    width: 70px;
    right: 10px;
  }

  > svg {
    height: 100%;
    width: auto;
  }
`

const MenuWrapper = styled.div`
  display: flex;

  svg {
    height: 24px;
    width: 100%;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: column;

  svg {
    height: 100%;
    width: auto;
  }
`

const HideLarge = styled.div`
  display: none;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: flex;
  `};
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryText1};
  font-size: 1rem;
  width: fit-content;
  margin: 0 2.5rem 0 0;
  font-weight: 500;
  position: relative;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.text1};

    &:after {
      content: '';
      width: ${rem(35)};
      height: ${rem(4)};
      bottom: -${rem(15)};
      left: 0;
      position: absolute;
      background: ${({ theme }) => theme.secondaryText1};
      border-radius: 1rem;

      :hover,
      :focus {
        color: ${({ theme }) => darken(0.1, theme.secondaryText1)};
      }
    }
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.secondaryText1};
  font-size: 1rem;
  width: fit-content;
  margin: 0 2.5rem 0 0;
  font-weight: 400;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.secondaryText1};

    :hover,
    :focus {
      color: ${({ theme }) => theme.secondaryText1};
    }
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.2, theme.secondaryText1)};
    text-decoration: none;
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `}
`

export const StyledExternalLinkEl = styled.span`
  margin: 0 0 0 0.5rem;
`

export const SocialLinkWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 0 0 1rem;
  width: ${rem(36)};
  height: ${rem(36)};
`

const StyledEllipseWapper = styled.div`
  display: flex;
  position: absolute;
  top: -2px;
  left: -2px;
  opacity: 0;
  transition: opacity 0.2s ease-in;

  > svg {
    height: ${rem(40)};
    width: auto;
  }
`

export const SocialLink = styled(ExternalLink)`
  display: flex;
  position: absolute;
  top: 0;

  &:hover {
    ${StyledEllipseWapper} {
      opacity: 1;
    }
  }

  > svg {
    height: ${rem(36)};
    width: auto;
  }
`

export interface HeaderProps {
  toggleSideBar: any
}

export default function Header({ toggleSideBar }: HeaderProps) {
  const { t } = useTranslation()
  return (
    <HeaderFrame>
      <HideLarge>
        <LogoWrapperMobile>
          <LogoLink to="/" title={t('mistx')}>
            <LogoMobile />
          </LogoLink>
        </LogoWrapperMobile>
      </HideLarge>
      <HeaderRow align="start">
        <HeaderLinks>
          <AlchemistMenu />
          <StyledNavLink id={`swap-nav-link`} to={'/exchange'}>
            {t('exchange')}
          </StyledNavLink>
          <StyledExternalLink id={`sandwiched-nav-link`} rel="" href={'https://sandwiched.wtf'}>
            Sandwiched.wtf <StyledExternalLinkEl style={{ fontSize: '11px' }}>↗</StyledExternalLinkEl>
          </StyledExternalLink>
        </HeaderLinks>
      </HeaderRow>
      <LogoWrapper>
        <LogoLink to="/" title={t('mistx')}>
          <Logo />
        </LogoLink>
      </LogoWrapper>
      <HeaderRow align="end" justify="flex-end">
        <WalletConnect />
        <MenuWrapper>
          <ButtonIcon onClick={() => toggleSideBar()}>
            <MenuIcon />
          </ButtonIcon>
        </MenuWrapper>
      </HeaderRow>
    </HeaderFrame>
  )
}

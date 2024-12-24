import styled from 'styled-components'

const Logo = styled.img.attrs({
  src: 'https://cdn.spacewak.net/logo/waktaplay/default/light.svg',
  alt: 'logo',
  onClick: () => {
    window.location.href = 'https://waktaplay.com'
  },
})`
  width: 100px;
  height: 100px;

  object-fit: contain;
  cursor: pointer;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 25%;
`

export default Logo

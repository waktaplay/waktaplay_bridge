import styled from 'styled-components'

const ActionSect = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

const HelpButton = styled.div`
  width: fit-content;
  height: 40px;
  padding: 4px 32px;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #999999;
  font-size: 16px;

  border-radius: 9999px;
  border: 1px solid #f2f2f7;
  cursor: pointer;
`

export { ActionSect, HelpButton }

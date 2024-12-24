import styled from 'styled-components'
import { useState, useEffect } from 'preact/hooks'
import { route } from 'preact-router'

import { Main, Logo, Text, ActionSect, HelpButton } from '@/styles/components'

export default function PlayDeeplink({
  id,
  retry,
}: {
  id: string
  retry: string
}) {
  const [didRetry, setDidRetry] = useState(false)

  useEffect(() => {
    if (!id) {
      // 실제로는 없는 라우트로 404가 반환된다.
      route('/deeplink/fail', true)
      return
    }

    if (retry) {
      setDidRetry(true)
    }

    window.location.assign(`waktaplay://play?v=${id}`)
  }, [id, retry])

  return (
    <Main>
      <Logo />

      <ActionSect>
        {didRetry ? (
          <Text>
            왁타플레이 앱을 다시 실행했습니다.
            <br />
            앱을 확인해 주세요.
          </Text>
        ) : (
          <Text>
            왁타플레이 앱을 실행하고 있어요.
            <br />
            앱을 확인해 주세요.
          </Text>
        )}

        <HelpButtonContainer>
          <HelpButton
            onClick={() => {
              window.location.href = 'https://waktaplay.com/#download'
            }}
          >
            {didRetry && '왁타플레이'} 앱 설치하기
          </HelpButton>
          {!didRetry && (
            <HelpButton
              onClick={() => {
                setDidRetry(true)
                window.location.assign(`waktaplay://play?v=${id}`)
              }}
            >
              앱 실행하기
            </HelpButton>
          )}
        </HelpButtonContainer>
      </ActionSect>
    </Main>
  )
}

const HelpButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

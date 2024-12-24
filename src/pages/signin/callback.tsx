import { useState, useEffect } from 'preact/hooks'
import { route } from 'preact-router'

import { Main, Logo, Text, ActionSect, HelpButton } from '@/styles/components'

export default function SignInCallback({
  provider,
  code,
  retry,
}: {
  provider: string
  code: string
  retry: string
}) {
  const [didRetry, setDidRetry] = useState(false)

  useEffect(() => {
    if (!code || !provider) {
      route('/signin/fail', true)
      return
    }

    if (retry) {
      setDidRetry(true)
    }

    window.location.assign(
      `waktaplay://signin?provider=${provider}&code=${code}`,
    )
  }, [code, retry])

  return (
    <Main>
      <Logo />

      <ActionSect>
        {didRetry ? (
          <Text>
            왁타플레이 앱을 다시 실행했습니다.
            <br />
            앱에서 로그인을 완료해 주세요.
          </Text>
        ) : (
          <Text>
            사용 중이던 왁타플레이 앱으로 이동하여
            <br />
            로그인을 완료해 주세요.
          </Text>
        )}

        {didRetry ? (
          <HelpButton
            onClick={() => {
              setDidRetry(true)
              window.location.href = 'mailto:support@billboardoo.com'
            }}
          >
            스페이스왁 팀에 문의하기
          </HelpButton>
        ) : (
          <HelpButton
            onClick={() => {
              setDidRetry(true)
              window.location.assign(
                `waktaplay://signin?provider=${provider}&code=${code}`,
              )
            }}
          >
            로그인이 안 되나요?
          </HelpButton>
        )}
      </ActionSect>
    </Main>
  )
}

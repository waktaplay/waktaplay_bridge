import { Main, Logo, Text } from '@/styles/components'

export default function SignInFailure() {
  return (
    <Main>
      <Logo />

      <Text>
        로그인에 실패했습니다.
        <br />
        왁타플레이 앱에서 다시 로그인 해 주세요.
      </Text>
    </Main>
  )
}

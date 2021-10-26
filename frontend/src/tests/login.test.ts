import { authTest } from './AuthTest.config'

const TIMELIMIT = 1000
let TOKEN = ''

test(
  'Testando login',
  async () => {
    const email = 'eduardo.rfarias@outlook.com'
    const password = '123456'

    const response = await authTest.post('login/', { email, password })

    expect(response.data).toBeTruthy()
    expect(response.data.user.email).toBe(email)
    expect(response.data.token).toBeTruthy()
    TOKEN = response.data.token
  },
  TIMELIMIT
)

test(
  'Testando logout',
  async () => {
    const response = await authTest.post(
      'logout/',
      {},
      {
        headers: {
          Authorization: `Token ${TOKEN}`,
        },
      }
    )

    expect(response.status).toBe(204)
  },
  TIMELIMIT
)

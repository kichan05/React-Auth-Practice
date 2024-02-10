const sha256 = require("crypto-js/sha256")

let userTable = [
  {id: 0, email: "ckstmznf@naver.com", password: "qwer1234"},
  {id: 1, email: "edcan@edcan.com", password: "qwer1234"},
  {id: 2, email: "a@a.com", password: "qwer1234"},
]

let tokenTable = [
  {id: 0, userId: 0, token: "aaa"},
]

export function getUsers() {
  return userTable.map(i => i)
}

export async function signUp(email, password){
  const user = {
    id: userTable.length,
    email, password
  }
  userTable.push(user)
  const token = createToken(user)

  return {user, token}
}

export async function signIn(email, password) {
  const user = userTable.filter(u => u.email === email && u.password === password)[0]
  if (user === undefined) {
    throw "Login Exception"
  }

  const token = createToken(user)

  return {user, token}
}

export function getUserData(token) {
  const tokenData = tokenTable.filter(t => t.token === token)[0]
  if(tokenData === undefined)
    throw "403"

  const userData = userTable.filter(u => u.id === tokenData.userId)[0]
  return userData
}

function createToken(user) {
  const timestamp = new Date()
  const token = sha256(user.email + timestamp.toJSON()).toString()

  tokenTable.push({
    id: userTable.length,
    userId: user.id,
    token
  })

  return token
}
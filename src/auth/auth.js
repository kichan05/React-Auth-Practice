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

  return user
}

export async function signIn(email, password) {
  const user = userTable.filter(u => u.email === email && u.password === password)[0]
  if(user === undefined){
    throw "Login Exception"
  }
  return user
}
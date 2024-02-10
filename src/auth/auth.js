let userTable = [
  {id: 0, email: "ckstmznf@naver.com", password: "qwer1234"},
  {id: 1, email: "edcan@edcan.com", password: "qwer1234"},
  {id: 2, email: "a@a.com", password: "qwer1234"},
]

export function getUsers() {
  return userTable.map(i => i)
}

export function signUp(email, password){
  const user = {
    id: userTable.length,
    email, password
  }

  userTable.push(user)

  return user
}
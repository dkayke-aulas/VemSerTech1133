import { User } from "../../typing";
import { ErrorResponse, UserResponseSuccess } from "./types/response";

const headers = new Headers();
headers.append("Content-Type", "application/json");

export const signUpService = async (
  user: User
): Promise<UserResponseSuccess & ErrorResponse> => {
  const response = await fetch("http://localhost:5000/v1/user", {
    body: JSON.stringify(user),
    method: "POST",
    headers,
  });
  return await response.json()
};

// export const signUpService = (user: User): Promise<string> => {
//     console.log(user)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users: User[] = JSON.parse(localStorage.getItem('@users') ?? '[]')
//             const emailExist = users.some((_user) => _user.email === user.email)

//             if(emailExist) {
//                 return reject('E-mail já cadastrado!')
//             }

//             const nicknameExist = users.some((_user) => _user.nickname === user.nickname)

//             if(nicknameExist) {
//                 return reject('Nome de usuário já cadastrado!')
//             }

//             users.push(user)

//             localStorage.setItem('@users', JSON.stringify(users))
//             return resolve('Usuário cadastrado com sucesso!')
//         }, 5000)
//     })
// }

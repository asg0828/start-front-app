import React, {
  useState,
  useEffect
}
from 'react';
import RegForm from './regForm';
import Row from './row';

const Board = () => {
  const [isReg, setIsReg] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
    name: ''
  });

  // useEffect(() => {

  // },[userInfo])

  const handleValue = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
    console.log(userInfo);
  }

  const userSave = () => {
    setUserList([
      ...userList,
      userInfo
    ])

    setUserInfo({
      id: '',
      password: '',
      name: ''
    })
  }

  const regClose = () => {
    setIsReg(false);
  }

  const regOpen = () => {
    setIsReg(true);
  }

  const deleteUser = (id) => {
    setUserList(userList.filter(userInfo => userInfo.id !== id))
    console.log(id);
  }

  const userData = (userList) => {
    return userList.map((userInfo) => {
      return (
        <tr key={userInfo.id}>
          <td>{userInfo.id}</td>
          <td>{userInfo.password}</td>
          <td>{userInfo.name}</td>
          <td>
            <button onClick={() => deleteUser(userInfo.id)}>닫기</button>
          </td>
        </tr>
      )
    })
  }

  return (
  <>
    <div>테이블</div>
    <button
      onClick={regOpen}
    >등록
    </button>
    <table>
      <thead>
        <tr>
          <th>아이디</th>
          <th>비밀번호</th>
          <th>이름</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
        {userData(userList)}
      </tbody>
    </table>
    <RegForm key="test"
      userSave={userSave}
      regClose={regClose}
      handleValue={handleValue}
      userInfo={userInfo}
      isReg={isReg}
    >
    </RegForm>
  </>
  )

}

export default Board;
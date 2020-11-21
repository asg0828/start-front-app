import React, {
  useState,
  useEffect
}
from 'react';

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
    setUserInfo([
      ...userList,
      userInfo
    ])
  }

  const User = () => {
    if(isReg){
      return (
        <>
          <table>
            <tr>
              <th>아이디</th>
              <td>
                <input name="id" onChange={handleValue} value={userInfo.id}/>
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input name="password" onChange={handleValue} value={userInfo.password}/>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input name="name" onChange={handleValue} value={userInfo.name}/>
              </td>
            </tr>
          </table>
          
          <button
            onClick={userSave}
          >확인
          </button>
          <button
            onClick={regClose}
          >닫기
          </button>
        </>
      )
    }
    return null;
  }

  const regClose = () => {
    setIsReg(false);
  }

  const regOpen = () => {
    setIsReg(true);
  }

  return (
  <>
    <div>테이블</div>
    <button
      onClick={regOpen}
    >등록
    </button>
    <User></User>
  </>
  )

}

export default Board;
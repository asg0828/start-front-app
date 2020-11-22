const RegForm = (props) => {
    
  if(props.isReg){
    return (
      <>
        <table key="table">
          <tbody>
            <tr>
              <th>아이디</th>
              <td key="id">
                <input name="id" onChange={props.handleValue} value={props.userInfo.id}/>
              </td>
            </tr>
            <tr >
              <th>비밀번호</th>
              <td key="password">
                <input name="password" onChange={props.handleValue} value={props.userInfo.password}/>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td key="name">
                <input name="name" onChange={props.handleValue} value={props.userInfo.name}/>
              </td>
            </tr>
          </tbody>
        </table>
        
        <button
          onClick={props.userSave}
        >확인
        </button>
        <button
          onClick={props.regClose}
        >닫기
        </button>
      </>
    )
  }else{
    return null;  
  }
}
export default RegForm;
import React from 'react';
import styles from './Button.module.css'
// import styled from 'styled-components';



const Button = props => {
  return (
    /* 
    css모듈을 사용해서 className에 해당 style을 적용하면 렌더링 시 해당 컴포넌트의 클래스에는
    "컴포넌트이름_클래스이름__고유한 해시값"으로 적용되어있는것을 확인할 수 있다.
    
    */
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}; 


/* 
여기서 button은 styled객체의 메서드입니다. 
styled는 styled-components에서 임포트하는 객체이고
button 메소드에 접근할 수 있습니다
이 메서드는 ()를 붙이는게 아니라 백틱(``)을 붙입니다.
결국 이것은 뒷단에서 메서드로 실행됩니다.  

흥미로운 것은 이 button메서드가 새로운 button컴포넌트를 반환한다는 것입니다. 
새로운 button컴포넌트에는 백틱안에 있는 스타일이 담겨있다. 

이 styled component로 스타일을 만들면 렌더링 시에 해당 컴포넌트에 고유한 클래스가 붙으므로 다른 컴포넌트에는 영향을 주지않는다. 
*/

/* 
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media(min-width : 768px){
    width: auto;
  }

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`; 
*/

export default Button;

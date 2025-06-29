
import React from 'react';
import { Header as HeaderContainer, PageTitle } from '../styles/commonStyles';

const HeaderPC = ({ currentStep = 1 }) => {
  const steps = [
    "01 관람일/회차 선택",
    "02 할인 선택", 
    "03 티켓 수령 선택",
    "04 결재 하기"
  ];

  return (
    <HeaderContainer>
      {steps.map((step, index) => (
        <PageTitle 
          key={index}
          className={index === currentStep - 1 ? 'active' : null}
        >
          {step}
        </PageTitle>
      ))}
    </HeaderContainer>
  );
};

export default HeaderPC;
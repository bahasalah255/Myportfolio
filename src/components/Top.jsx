import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <a href="#home" className="button">
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-decoration: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;

    background: linear-gradient(90deg, #5b5cf6 0%, #a855f7 100%);
    box-shadow:
      0 0 0 4px rgba(168, 85, 247, 0.18),
      0 10px 30px rgba(91, 92, 246, 0.35);

    transition: all 0.3s ease;
    position: fixed;
  }

  .svgIcon {
    width: 12px;
    transition: 0.3s ease;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 145px;
    border-radius: 999px;
    background: linear-gradient(90deg, #5b5cf6 0%, #a855f7 100%);
    box-shadow:
      0 0 0 4px rgba(168, 85, 247, 0.22),
      0 14px 35px rgba(91, 92, 246, 0.42);
  }

  .button:hover .svgIcon {
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    content: "Back to Top";
    color: white;
    font-size: 0px;
    font-weight: 600;
    transition: 0.3s ease;
    white-space: nowrap;
  }

  .button:hover::before {
    font-size: 13px;
  }
`;

export default Button;
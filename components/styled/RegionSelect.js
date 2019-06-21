import styled from "styled-components";
import sharedStyles from "./SharedStyles";

const RegionSelect = styled.select`
  @media (max-width: 700px) {
    width: 100%;
  }
  flex: 1 1 20%;

  display: block;
  height: 100%;
  padding: 20px;

  margin: 35px 0;
  border: 1px solid ${props => props.theme.colors.gray_light};
  box-sizing: border-box;

  background-image: url("/static/svg/arrow-down.svg");

  background-position: 12% 10%;
  ${sharedStyles}

  & :-ms-expand {
    display: none;
  }

  & :focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  option {
    margin-left: 200px;
  }
`;

export default RegionSelect;

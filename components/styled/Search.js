import styled from "styled-components";
import sharedStyles from "./SharedStyles";

const Search = styled.div`
  position: relative;
  flex: 1 1 auto;
  margin-right: 20px;
  @media (max-width: 700px) {
    width: 450px;
  }
  width: 680px;
  & .search-icon {
    position: absolute;
    top: -2px;
    margin-left: 17px;
    margin-top: 17px;
    z-index: 1;
    color: #4f5b66;
    width: 20px;
    height: 20px;
    fill: ${props =>
      !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
  }

  input[type="search"] {
    width: 100%;

    border: 1px solid ${props => props.theme.colors.gray_light};

    border-radius: 0.25rem;

    ${sharedStyles}

    & ::-webkit-search-cancel-button {
      position: relative;
      right: 20px;
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: ${props =>
        props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
    }

    & :focus,
    & :hover,
    & :active {
      outline: none;
      background: ${props =>
        !props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
    }
  }

  input[type="search"]::-webkit-input-placeholder {
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
    color: ${props =>
      !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
  }

  input[type="search"]:-moz-placeholder {
    /* Firefox 18- */
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
    color: ${props =>
      !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
  }

  input[type="search"]::-moz-placeholder {
    /* Firefox 19+ */
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
    color: ${props =>
      !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
  }

  input[type="search"]:-ms-input-placeholder {
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
    color: ${props =>
      !props.nightMode ? props.theme.colors.blue : props.theme.colors.white};
  }

  .result-list {
    list-style-type: none;
    padding: 0;
    color: ${props => props.theme.colors.blue};
    background: ${props => props.theme.colors.gray_dark_lighter};
    position: absolute;
    top: 68%;
    margin-left: 6%;
    margin-top: 23px;
    width: 80%;
    max-width: 80%;
    border: 1px solid ${props => props.theme.colors.gray_light};
    border-radius: 5px;
    li {
      cursor: pointer;
      & :last-child {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      & :first-child {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      height: 40px;
      margin: 0;
      padding: 10px 20px 40px 20px;
    }
  }
`;

export default Search;

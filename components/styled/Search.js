import styled from "styled-components";
import sharedStyles from "./SharedStyles";

const Search = styled.div`
  position: relative;
  margin-bottom: 20px;

  & .search-icon {
    position: absolute;
    top: 38%;
    margin-left: 17px;
    margin-top: 17px;
    z-index: 1;
    color: #4f5b66;
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.gray_dark};
  }

  input[type="search"] {
    margin-top: 30px;

    width: 100%;

    border: 1px solid ${props => props.theme.colors.gray_light};

    border-radius: 0.25rem;

    ${sharedStyles}

    & ::-webkit-search-cancel-button {
      -webkit-appearance: none;

      /* Now your own custom styles */
      height: 10px;
      width: 10px;
      background: red;
    }

    & :focus,
    & :hover,
    & :active {
      outline: none;
      background: #ffffff;
    }
  }

  input[type="search"]::-webkit-input-placeholder {
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
  }

  input[type="search"]:-moz-placeholder {
    /* Firefox 18- */
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
  }

  input[type="search"]::-moz-placeholder {
    /* Firefox 19+ */
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
  }

  input[type="search"]:-ms-input-placeholder {
    font-family: ${props => props.theme.fonts.font_family_normal};
    font-size: 0.8rem;
  }

  .result-list {
    list-style-type: none;
    padding: 0;

    background: ${props => props.theme.colors.gray_dark_lighter};
    position: absolute;
    top: 68%;
    margin-left: 6%;
    margin-top: 23px;
    width: 50%;
    max-width: 50%;
    border: 1px solid ${props => props.theme.colors.gray_dark_lght};
    border-radius: 10px;
    li {
      & :last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      & :first-child {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }

      height: 40px;
      margin: 0;
      padding: 10px 20px 40px 20px;
    }
  }
`;

export default Search;

import { css } from "styled-components";

const searchStyles = css`
  box-shadow: ${props => props.theme.shadow};
  -moz-appearance: none; /* older firefox */
  -webkit-appearance: none; /* safari, chrome, edge and ie mobile */
  appearance: none; /* rest */
  padding: 16px 0 16px 60px;
  font-family: ${props => props.theme.fonts.font_family_light};
  letter-spacing: 1px;
  background: ${props =>
    !props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
  color: ${props =>
    props.nightMode ? props.theme.colors.white : props.theme.colors.blue};
`;

export default searchStyles;

import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconStyle = styled(FontAwesomeIcon)`
  color: ${({ color, theme }) => (color ? color : theme.lightGray)};
  font-size: ${({ iconsize }) => (iconsize ? iconsize : "1rem")};
  svg {
    font-size: ${({ iconsize }) => (iconsize ? iconsize : "1rem")};
  }
`;

type IconProps = {
  className?: string,
  color?: string,
  icon: string[],
  iconsize?: string,
  onMouseOut?: (...args: any[]) => any,
  onMouseOver?: (...args: any[]) => any,
  testId?: string
};

const Icon: React.SFC<IconProps> = ({
  className,
  color,
  testId,
  icon,
  iconsize,
  onMouseOver,
  onMouseOut
}) => (
  <IconStyle
    className={className}
    color={color}
    data-testid={testId ? testId : "icon"}
    icon={icon}
    iconsize={iconsize}
    onBlur={onMouseOut}
    onFocus={onMouseOver}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  />
);

Icon.defaultProps = {
  className: "",
  color: "",
  iconsize: "1rem",
  onMouseOut: null,
  onMouseOver: null,
  testId: undefined
};

export default Icon;

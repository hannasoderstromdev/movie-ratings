import React from "react";
import styled from "styled-components";

const LabelStyle = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`;

type LabelProps = {
  className?: string,
  htmlFor?: string
};

const Label: React.SFC<LabelProps> = ({ className, children, htmlFor }) => (
  <LabelStyle className={className} data-testid="label" htmlFor={htmlFor}>
    {children}
  </LabelStyle>
);

Label.defaultProps = {
  className: "",
  htmlFor: ""
};

export default Label;

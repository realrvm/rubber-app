import React from "react";
import styled from "styled-components";

import { mq, widths } from "../utils/styles";

const ContentSection = ({ children }) => <ContentDiv>{children}</ContentDiv>;

export default ContentSection;

/** ContentSection styled component **/
const ContentDiv = styled.div`
  margin: 0 auto;
  max-width: ${widths.desktopPageWidth}px;
  width: 100%;
  padding: 0 20px;
  margin-top: 20px;
  ${mq[2]} {
    margin-top: 0;
  }
`;

/* eslint-disable react/prop-types */
import * as Styled from "./style";

const Picture = ({ srcMobile, srcTablet, srcDesktop, alt }) => {
  return (
    <Styled.Picture>
      <source media="(max-width: 360px)" srcSet={srcMobile} />
      <source media="(max-width: 768px)" srcSet={srcTablet} />
      <img src={srcDesktop} alt={alt} />
    </Styled.Picture>
  );
};

export default Picture;

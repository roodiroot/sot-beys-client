import React from "react";
import SocialPngComponent from "../card-page-components/SocialPngComponent";

const SocialBlockItemPage = () => {
  return (
    <>
      <SocialPngComponent href={process.env.REACT_APP_WA} variant='whatsapp' />
      <SocialPngComponent href={process.env.REACT_APP_TG} variant='telegram' />
      <SocialPngComponent
        href={process.env.REACT_APP_INST}
        variant='instagram'
      />
    </>
  );
};

export default SocialBlockItemPage;

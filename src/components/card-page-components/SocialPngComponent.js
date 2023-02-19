import React from 'react';
import webp from '../../assets/img/socialColorItems/whatsapp.webp';
import png from '../../assets/img/socialColorItems/whatsapp.png';
import webpI from '../../assets/img/socialColorItems/instagram.webp';
import pngI from '../../assets/img/socialColorItems/instagram.png';
import webpT from '../../assets/img/socialColorItems/telegram.webp';
import pngT from '../../assets/img/socialColorItems/telegram.png';

function SocialPngComponent({ variant, href }) {
  const variantItem = (variant) => {
    if (variant === 'whatsapp') return { webp: webp, png: png };
    if (variant === 'instagram') return { webp: webpI, png: pngI };
    if (variant === 'telegram') return { webp: webpT, png: pngT };
  };

  return (
    <a href={href} target="blank" className="socialColor__link">
      <picture>
        <source srcSet={variantItem(variant).webp} type="image/webp" />
        <img src={variantItem(variant).png} alt="whatsapp" />
      </picture>
    </a>
  );
}

export default SocialPngComponent;

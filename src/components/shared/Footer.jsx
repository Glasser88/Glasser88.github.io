import React from 'react';

import STYLES from './Footer.scss';

const Footer = () => (
  <div className={STYLES.Footer}>
    <a href='mailto:glasser1988@gmail.com?subject=Your hired!'><i className="fa fa-envelope"></i></a>
    <a href='https://github.com/Glasser88' target='_blank'><i className='fa fa-github'></i></a>
    <a href='https://twitter.com/Glasser1988' target='_blank'><i className='fa fa-twitter'></i></a>
    <a href='https://www.linkedin.com/pub/trevor-glass/51/484/102' target='_blank'><i className='fa fa-linkedin'></i></a>
  </div>
);

export default Footer;

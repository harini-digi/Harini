/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

 import Img from '@oracle-cx-commerce/react-components/img';
 import Link from '@oracle-cx-commerce/react-components/link';
 import PropTypes from 'prop-types';
 import React from 'react';
 import Styled from '@oracle-cx-commerce/react-components/styled';
 import css from './styles.css';
 import {noop} from '@oracle-cx-commerce/utils/generic';
 
 /**
  * Following widget component renders image and image caption based on the component settings.
  *
  * @param props
  */
 const customimage = props => {
   // props
   const {
     media = {
      
    },
     mediaLink = '',
     mediaLinkBehavior = '',
     mediaScreenText = '',
     mediaScreenTextPosition = '',
     mediaTitle = '',
     mediaAlt = '',
     errorSrc = null,
     onErrorCallback = noop
   } = props;
 
   const mediaSrc = media.src;
 
   let textStyle = {
     order: 2
   };
   let imgLinkCSS = 'Image_Link ';
   let imgCSS = 'Image_Img ';
 
   switch (mediaScreenTextPosition) {
     case 'below':
       textStyle = {
         order: 2
       };
       imgLinkCSS += 'Image_ColumnDirection';
       break;
 
     case 'above':
       textStyle = {
         order: -1
       };
       imgLinkCSS += 'Image_ColumnDirection';
       break;
 
     case 'right':
       textStyle = {
         order: 2
       };
       imgLinkCSS += 'Image_RowDirection';
       break;
 
     case 'left':
       textStyle = {
         order: -1
       };
       imgLinkCSS += 'Image_RowDirection';
       break;
 
     // skip default
   }
 
   if (mediaScreenText) {
     imgCSS += 'Image_WithCaption';
   }
 
   const renderImage = () => {
     return (
       <>
       
         <div className={`Image_ImgContainer ${imgCSS}`}>
         <div>Hello Harini....</div>  
           <Img errorSrc={errorSrc} src={mediaSrc} title={mediaTitle} alt={mediaAlt} onErrorCallback={onErrorCallback} />
         </div>
         {mediaScreenText ? (
           <figcaption style={textStyle} className="Image_FigCaption">
             {mediaScreenText}
           </figcaption>
         ) : null}
       </>
     );
   };
 
   const ImageLink = () => {
     let linkProps = {
       className: imgLinkCSS
     };
 
     if (mediaLink) {
       linkProps = {...linkProps, href: mediaLink};
     }
 
     if (mediaLinkBehavior === '_self') {
       return <Link {...linkProps}>{renderImage()}</Link>;
     }
     linkProps = {...linkProps, target: mediaLinkBehavior};
 
     return <a {...linkProps}>{renderImage()}</a>;
   };
 
   return (
     <Styled id="customImage" css={css}>
       <figure className="customImage">
         <ImageLink />
       </figure>
     </Styled>
   );
 };
 
 customimage.propTypes = {
   media: PropTypes.shape(PropTypes.object.isRequired).isRequired,
   mediaLink: PropTypes.string,
   mediaLinkBehavior: PropTypes.string,
   mediaScreenText: PropTypes.string,
   mediaScreenTextPosition: PropTypes.string,
   mediaTitle: PropTypes.string,
   mediaAlt: PropTypes.string.isRequired,
   errorSrc: PropTypes.string
 };
 
 customimage.defaultProps = {
   mediaLink: '',
   mediaLinkBehavior: '',
   mediaScreenText: '',
   mediaScreenTextPosition: '',
   mediaTitle: '',
   errorSrc: null
 };
 
 export default customimage;
 
import React from 'react'
import EmptyConatiner from '../EmptyConatiner';
import { arrow, emptyheroimg } from '../../images';
import EmailTemplate from '../EmailTemplate';
import Carousel from '../Carousel';
import { templateConfigData } from '../../utils/config';

const TemplateContainer = (props) => {
  const {templateData } = props;

  return (<>
     {templateData.length ? <Carousel data={templateData}  leftArrow={arrow} 
      rightArrow={arrow}/> : <EmptyConatiner  bgImage={emptyheroimg}/>}
    </>
  )
}

export default TemplateContainer
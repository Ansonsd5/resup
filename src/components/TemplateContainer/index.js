import React from 'react'
import EmptyConatiner from '../EmptyConatiner';
import { arrow, emptyheroimg } from '../../images';
import Carousel from '../Carousel';

const TemplateContainer = (props) => {
  const {templateData } = props;

  return (<>
     {templateData.length ? <Carousel data={templateData}  leftArrow={arrow} 
      rightArrow={arrow}/> : <EmptyConatiner  bgImage={emptyheroimg}/>}
    </>
  )
}

export default TemplateContainer
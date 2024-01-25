import React from 'react'
import EmptyConatiner from '../EmptyConatiner';
import { emptyheroimg } from '../../images';

const TemplateContainer = (props) => {
  const {templateData, } = props;
  return (<>
      <EmptyConatiner  bgImage={emptyheroimg}/>
    </>
  )
}

export default TemplateContainer
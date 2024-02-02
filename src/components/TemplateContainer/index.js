import React from 'react'
import EmptyConatiner from '../EmptyConatiner';
import { emptyheroimg } from '../../images';
import EmailTemplate from '../EmailTemplate';

const TemplateContainer = (props) => {
  const {templateData } = props;

  return (<>
     {templateData ? <EmailTemplate />: <EmptyConatiner  bgImage={emptyheroimg}/>}
    </>
  )
}

export default TemplateContainer
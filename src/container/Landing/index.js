import React from 'react'
import Button from '../../components/Button';
import './index.scss'
import InputWrap from '../../components/InputWrap';

const Landing = () => {
  return (
    <div className='landing-wrapper'>
        <article className='input-conatiner'>
            <span className='font-bold block'>Enter Details</span>
            <span>Enter your details to generate template</span>
            <InputWrap label={'Enter your first Name'}>{<input placeholder='Name'></input>}</InputWrap>
        <Button>Generate</Button>
        </article>
        <article>

        </article>
        
        </div>
  )
}

export default Landing;
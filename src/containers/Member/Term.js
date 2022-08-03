import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { TermData } from './TermData';

const Term = () => {
    useEffect(() => {
        console.log(TermData)
    }, [])
    return (
        <div className='term'>
            <div className='term-header'>
                <div>
                    <Link to='/'>SMS Study</Link>
                </div>
            </div>

            <div className='term-wrap'>
                <div className='term-title'>SMS Study 이용약관</div>
                <div className='term-content'>
                    {TermData.map((item, idx) => {
                        return (
                            <div className='con-box' key={idx}>
                                <div className='con-title'>
                                {_.get(item,'title')}
                                </div>
                                {_.get(item,'content').map((item2,idx2)=>{
                                return (
                                    <div className='content1' key={`${idx}-${idx2}`}>
                                        - {_.get(item2,'title')}
                                        {_.get(item2,'content') && _.get(item2,'content').map((item3,idx3)=>{
                                            return (
                                                <div className='content2' key={`${idx}-${idx2}-${idx3}`}>
                                                    {idx3+1}. {item3}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                                })}
                            </div>
                        
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default Term;
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { PrivacyData } from './PrivacyData';

const Privacy = () => {
    useEffect(() => {
        console.log(PrivacyData)
    }, [])
    return (
        <div className='privacy'>
            <div className='privacy-header'>
                <div>
                    <Link to='/'>SMS Study</Link>
                </div>
            </div>

            <div className='privacy-wrap'>
                <div className='privacy-title'>SMS Study 개인정보 처리방침</div>
                <div className='privacy-content'>
                    {PrivacyData.map((item, idx) => {
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

export default Privacy;
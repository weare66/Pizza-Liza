import React from 'react';
import { NoteFoundBlock } from '../components/NoteFoundBlock';
import '../scss/app.scss';
import 'macro-css';
import { Link } from 'react-router-dom';

export const NoteFound = () => {
  return (
    <div>
    <NoteFoundBlock/> 

        <div className='d-flex justify-center'>
            <Link to={'/'}>
                <div className="button button--outline button--add go-back-btn ">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Вернуться назад</span>
                </div>
            </Link>
            
        </div>
    
    </div>
  )
}


import { keyboardKey } from '@testing-library/user-event';
import React,{useEffect} from 'react';
import Button from './Button';
type props ={
    title:string;
    children: JSX.Element | JSX.Element[];
    setVisible(visible: boolean): void;
    visible: boolean;
    buttonText: string;
    onClick(): void;
}
 const Model :React.FC<props>=(props)=>{
    const { title, children, setVisible, visible, buttonText, onClick } = props;
   useEffect(()=>{
    document.onkeydown=(e:KeyboardEvent)=>{
        if(e.key==='Enter'){
            e.preventDefault();
            onClick();
        }
    }
   },[])
   return(<>
   <div 
      className={
        'w-screen h-screen bg-black bg-opacity-25 fixed top-0 left-0 z-20 transition-all'
      }
      style={
        visible
          ? {
              opacity: 1,
              visibility: 'visible',
              transform: 'translateY(0)',
            }
          : {
              opacity: 0,
              visibility: 'hidden',
              transform: 'translateY(30px)',
            }
      }
      onClick={()=>{setVisible(false)}}
      >

      </div>
    

    </>)
 }
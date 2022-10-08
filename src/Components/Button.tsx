import React from 'react';


type props = {
    text: string;
    onClick(e: any): void;
    white?: boolean;
    header?: boolean;
    modal?: boolean;
    padding?: boolean;
    alert?: boolean;
  };


  const Button =(props)=>{

    const {
        text,
        white = false,
        modal = false,
        onClick,
        padding = false,
        alert = false,
      } = props;
      const colours = white
      ? 'text-gray-900 bg-white'
      : alert
      ? 'text-white bg-red-600'
      : 'text-white bg-gray-900';
      return(
        
      )
  }
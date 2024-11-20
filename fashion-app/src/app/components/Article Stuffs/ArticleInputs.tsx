import React from 'react';
import Select from 'react-select'; // npm i --save react-select
import { article_types } from "../Articles";


const customStyles = {
    control: (base, state) => ({
      ...base,
      minWidth: '200px',
      borderRadius: '8px', 
      borderColor: state.isFocused ?'#FFBF5F':'#CBCED5',  
      boxShadow: 'none',    
      borderWidth: '2px',
      height: '43.2px',
      '&:hover': {
        borderColor: '#FFBF5F', // Change border color on hover
      }
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected ? '#FFA216' // Highlight color for selected option
        : state.isFocused
        ? '#FFBF5F' // Highlight color for hovered option
        : 'white', // Default background
        '&:active': {
         backgroundColor: '#FFA216', // Background color when the option is pressed
        },
      color: state.isSelected ? 'white' : 'black',
    }),
  };

  export default function ArticleInputs() {
    return (
        <Select styles={customStyles} options={article_types}/>
    );
  }
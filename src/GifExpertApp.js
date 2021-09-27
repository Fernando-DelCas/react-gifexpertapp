import React, { useState } from 'react';
//import { Fragment } from 'react/cjs/react.production.min';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gifs']);
    
    return (
         <>
            <h2 className="title_app">Gif Expert App</h2>
            <AddCategory setCategories ={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( category => (
                    <GifGrid 
                    key={ category }
                    category =  {category }
                    />
                    ))
                }
            </ol>
           

        </>
    );
}

export default GifExpertApp;
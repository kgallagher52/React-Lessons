import React from 'react';

const Jedi = ({jedi}) => {
    console.log(jedi, "Jedi Array from parent");
    const jediList = jedi.map(function(jedi,index){
    return (  
            <div className="jedi" key={index}>
                <div>Name: {jedi.name}</div>
                <div>Age: {jedi.age}</div>
                <div>Saber: {jedi.saber}</div>
            </div>

            );
        })
        // Return Body
        return (
            <div>
                <div className="jedi-list">
                    {jediList}
                </div>
            </div>
        )         
    }

export default Jedi;
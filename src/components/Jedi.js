import React from 'react';

const Jedi = ({jedi}) => {
    const jediList = jedi.map(function(jedi,index){
        if ( jedi.age < 250 ) {
            return (  
                    <div className="jedi" key={index}>
                        <div>Name: {jedi.name}</div>
                        <div>Age: {jedi.age}</div>
                        <div>Saber: {jedi.saber}</div>
                    </div>

                    );
        } else {
            return null;
        }
    });
    
    return (
        <div>
            <div className="jedi-list">
                {
                    {jediList}
                }
            </div>
        </div>
    )         
};

export default Jedi;
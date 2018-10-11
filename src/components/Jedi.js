import React from 'react';

const Jedi = ({jedi}) => {
    // const jediList = jedi.map(function(jedi,index){
    //     if ( jedi.age < 250 ) {
    //         return (  
    //                 <div className="jedi" key={index}>
    //                     <div>Name: {jedi.name}</div>
    //                     <div>Age: {jedi.age}</div>
    //                     <div>Saber: {jedi.saber}</div>
    //                 </div>

    //                 );
    //     } else {
    //         return null;
    //     }

    // Ternary Operator 
        // condition () ? () : ;
        //  return jedi.age < 250 ? (Stuff to return) : (else return stuff)

  

    return (
        <div>
            <div className="jedi-list">
                {
                    jedi.map(jedi => {
                        return jedi.age < 250 ? (
                            <div className="jedi" key={jedi.id}>
                                <div>Name: {jedi.name}</div>
                                <div>Age: {jedi.age}</div>
                                <div>Saber: {jedi.saber}</div>
                            </div> 
                        ) : null;
                    })
                }
            </div>
        </div>
    )         
};

export default Jedi;
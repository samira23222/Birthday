import React from 'react';

const List = ({ friends }) => {
    return (
        <>
        {friends.map((friend) => {
            const {id, name, bday} = friend;
            return (
                <article key={id} className='friend'>
                   
                    <div className="sami">
                        <p className="name">{name}</p>
                        <p>{bday}</p>

                    </div>
                </article>
            );
           
           })}  

            </>
    
    );
}
export default List;
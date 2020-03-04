import React from 'react';
import Option from './Option';

 const Options = (props)=>(
        <div>
            <div className="widget-header">
                <h3>Opciones</h3>
                <button className="button button--link" onClick={props.handleDelete}>Borrar Todos</button>
            </div>
           
            {props.options.length === 0 && <p className="widget__message">Agrega una opcion para comenzar</p>}
            {props.options.map((op, index) => (
                 <Option
                     key={op} 
                     option={op}
                     count={index+1}
                     handleDeleteOption = {props.handleDeleteOption}
                />))}
            
        </div>
    );


export default Options;
import React, {useEffect, useState} from 'react'

export default function Main(){

    const [type, setType] = useState('')
    const [question, setQuestion] = useState('')
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => {
            const count = () => {
            let countries = []
                for(let i = 0; i < 4; i++){
                    countries.push(res[Math.floor(Math.random() * res.length)])
                }  
                return countries
        } 
            setCountries(count())
            setQuestion(count()[Math.floor(Math.random() * count().length)])
        })    
        const type = ['flag','capital','flag','capital']
        setType(type[Math.floor(Math.random() * type.length)])
         
    }, [])

    return (
        <div>
            <header className="App-header">

                <span className='title'>COUNTRY QUIZ</span>
                <div className='modal'>
                   { type && type === 'flag' ?
                    <div> 
                        <img src={question.flag} width='100px' height='50px' />
                        <h4>¿A qué pais pertenece esta bandera?</h4>
                    </div>: 
                     <div> 
                        {<h4>¿ {question.capital} es la capital de?</h4>}
                    </div>
                    }
                
                    <div>
                        {countries && countries.map(c => (
                            <input type='button' className='input-option' value={c.name} />
                        ))}                        
                    </div> 
                </div>
                <span className='createdBy'>Created by Dayamartinez</span>
            </header>
        </div>
    )
}
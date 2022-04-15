import React from 'react'

const Container = ({Record}) => {

  return (
      
    <div>
        <div>
            {
             <>  <div className='container' id='addBox'>
                  {Record.map((current,index) => {
                      return (
                          <div className='box' key={index}>
                              Name : {current.name}<br />
                              Department : {current.dep}<br />
                              Rating : {current.rating}<br />
                          </div>
                      )
                  })}
              </div></>
             }
    </div>

    </div>
  )
}

export default Container

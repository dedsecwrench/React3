import React from 'react'

const Container = ({Record}) => {

  return (
      
    <div>
        <div>
            {
              <>  <div className='container'>
                  {Record.map((current,index) => {
                      return (
                          <div className='box' key={index}>
                             <b> Name :</b> <span>{current.name}</span><br />
                             <b> Department :</b> <span>{current.dep}</span><br />
                             <b> Rating : </b><span>{current.rating}</span><br />
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

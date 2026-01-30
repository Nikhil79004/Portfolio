import React from 'react'

const Card = (props) => {
  return (
    <div>
      <card>
          <div className="mt-12 overflow-hidden rounded-3xl w-[600px] h-[400px] shadow-lg">
            <img
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              src={props.img}
              alt="project"
            />
          </div>
          <div className="pt-3 w-[400px]">
            <a
              className="bg-blue-200 text-2xl p-2 font-semibold rounded-3xl border-2 border-black justify-center items-center hover:bg-blue-400 "
              href={props.href}
            >
              Click Here...!
            </a>
          </div>
        </card>
    </div>
  )
}

export default Card

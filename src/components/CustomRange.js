import React from 'react'
import { getTrackBackground,Range } from 'react-range'


export default function CustomRange({value,step,min,max,onChange}) {
  return (
    <Range
    values={[value]}
    step={step}
    min={min}
    max={max}
    onChange={values => onChange(values[0]) }
    renderTrack={({ props, children }) => (
      <div
        onMouseDown={props.onMouseDown}
        onTouchStart={props.onTouchStart}
        className='h-9 flex w-full group'
        style={{
          ...props.style,
        }}
      >
        <div
          ref={props.ref}
          className='h-1 w-full rounded-md self-center '
          style={{
            background: getTrackBackground({
              values: [value],
              colors: ["#1db954", "#535353"],
              min: min,
              max: max
            }),
          }}
        >
          {children}
        </div>
      </div>
    )}
    renderThumb={({ props, isDragged }) => (
      <div
        {...props}
        className={`w-3 h-3 rounded-full bg-white opacity-0 ${!isDragged ? 'opacity-0' : 'opacity-100' } group-hover:opacity-100 `}
        style={{
          ...props.style,
          boxShadow: "0px 2px 6px #AAA"
        }}
      />
    )}
  />
  )
}

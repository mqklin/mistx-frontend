import React, { useState, useContext } from 'react'
import { Range, getTrackBackground } from 'react-range'
import { ThemeContext } from 'styled-components'

type Props = {
  max: number
  min: number
  onChange: any
  value: number
  step: number
}

type ITrackProps = {
  props: {
    style: React.CSSProperties
    ref: React.RefObject<any>
    onMouseDown: (e: React.MouseEvent) => void
    onTouchStart: (e: React.TouchEvent) => void
  }
  children: React.ReactNode
  isDragged: boolean
  disabled: boolean
}

const Slider = ({ max, min, onChange, value, step }: Props) => {
  const theme = useContext(ThemeContext)
  const [sliderValue, setSliderValue] = useState<number>(value)
  const onSliderChange = (values: any) => {
    setSliderValue(values)
    onChange(values[0])
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '2rem 0 0'
      }}
    >
      <Range
        values={[sliderValue]}
        step={step}
        min={min}
        max={max}
        onChange={values => onSliderChange(values)}
        renderTrack={(props: ITrackProps) => (
          <div
            onMouseDown={props.props.onMouseDown}
            onTouchStart={props.props.onTouchStart}
            style={{
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
          >
            <div
              ref={props.props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: [value],
                  colors: [theme.primary2, '#192431'],
                  min: min,
                  max: max
                }),
                alignSelf: 'center',
                cursor: 'pointer'
              }}
            >
              {props.children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              height: '32px',
              width: '32px',
              borderRadius: '100%',
              backgroundColor: 'rgba(255, 191, 0, 0.22)',
              border: `2px solid ${theme.primary2}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-38px',
                fontWeight: 700,
                fontSize: '14px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                color: theme.text5,
                padding: '0.25rem 0.5rem',
                cursor: 'pointer'
              }}
            >
              {value}%
            </div>
            <div
              style={{
                height: '14px',
                width: '14px',
                borderRadius: '100%',
                backgroundColor: isDragged ? '#FFF' : '#FFF',
                cursor: 'pointer'
              }}
            />
          </div>
        )}
      />
    </div>
  )
}

export default Slider
import './Description.scss'
import { DescriptionBlock } from '../DescriptionBlock/DescriptionBlock'

export function Description({values}) {
  return (
    <div className='description'>
      {values.map(value => (
        <DescriptionBlock 
          key = {value.title}
          title = {value.title}
          currentValue = {value.currentValue.toLocaleString('ru')} 
          fullValue = {value.fullValue.toLocaleString('ru')}
        />
      ))}
    </div>
  )
}
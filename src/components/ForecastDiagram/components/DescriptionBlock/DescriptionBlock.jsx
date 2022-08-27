import './DescriptionBlock.scss'

export function DescriptionBlock({title, currentValue, fullValue}) {
 
  return (
    <div className='description-block'>
        <div className='description-block__title'>
            {title}
        </div>
        <div className='description-block__values'>
            <span className='description-block__value'>{currentValue}</span>
            <span className='description-block__value'>{fullValue}</span>
        </div>
    </div>
  )
}
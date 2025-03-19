import iconStar from '../../assets/images/icon-star.svg'

export const Title = () => {
  return (
    <div className='flex items-center mb-2'>
      <img src={iconStar} alt="iconStar" />
      <h1 className='text-darkPurple text-3xl font-bold p-2 flex justify-center'>FAQs</h1>
    </div>
  )
}

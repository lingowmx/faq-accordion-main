import mobileImage from '../../assets/images/background-pattern-mobile.svg'
import desktopImage from '../../assets/images/background-pattern-desktop.svg'

export const BgImage = () => {
  return (
    <picture className='absolute'>
      <source srcSet={desktopImage} media='(min-width: 640px)'/>
      <source srcSet={mobileImage} media='(max-width: 639px)'/>
      <img src={mobileImage} alt="mobileImageBackground" />
    </picture>
  )
}

import { ReactComponent as Logo } from './assets/viaj.svg'
import Airplane from '~icons/twemoji/airplane'
import Hotel from '~icons/twemoji/hotel'
import Study from '~icons/twemoji/open-book'
import SportMan from '~icons/twemoji/flexed-biceps-light-skin-tone'
import Code from '~icons/twemoji/laptop'
import SportGirl from '~icons/twemoji/woman-surfing-medium-skin-tone'
import Talya from '~icons/twemoji/man-light-skin-tone-beard'
import Alina from '~icons/twemoji/woman-light-skin-tone'
import image from './assets/screen.jpg'

const stakes = [
  {
    icon: Airplane,
    text: 'Билет туда-обратно по направлению Новосибирск - Сочи (Адлер)',
  },
  {
    icon: Hotel,
    text: 'Недельное проживание в отеле с завтраками',
  },
]

const goalsMe = [
  {
    icon: Study,
    text: 'Закрытие долгов по учебе, возвращение в обучение',
  },
  {
    icon: SportMan,
    text: 'Приведение формы в порядок',
  },
]

const goalsHer = [
  {
    icon: Code,
    text: 'Изучение программирования в свободное время, пэт-проект',
  },
  {
    icon: SportGirl,
    text: 'Приведение формы к желаемой',
  },
]

const App = () => {
  return (
    <div className='container h-full mx-auto max-w-[40rem] ring-0 ring-black py-10 flex flex-col space-y-8 px-4 text-white'>
      <div className='w-full flex items-center justify-center'>
        <Logo className='text-white w-[14rem] lg:w-[20rem]' />
      </div>

      <div className='mt-8 typography ring-0 ring-black px-4 pt-4 pb-12 bg-black/5 rounded-xl flex flex-col space-y-8'>
        <div className='flex flex-col space-y-2'>
          <h2 className='font-display text-xl'>Что это?</h2>
          <p className='text-justify'>
            Viaj или Voyage - спор на путешествие, с периодом подведения итогов
            в 2-2.5 месяца
            <br />
            Целью спора является мотивация к занятию вещами, которые реально
            надо привести в порядок или к желаемому результату
            <br />
            <span className='text-xs italic'>(А времени/мотивации нет)</span>
          </p>
        </div>
        <div className='flex flex-col space-y-6'>
          <h2 className='font-display text-xl'>Ставки спора VIAJ</h2>
          {stakes.map((v, i) => (
            <div className={`flex flex-col gap-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-lg text-center italic`}>
                {v.text}
              </span>
            </div>
          ))}
        </div>
        <div className='flex flex-col space-y-6'>
          <h2 className='font-display text-xl'>Стороны VIAJ</h2>
          <div className='flex items-center justify-between pt-2'>
            <a
              href='https://t.me/talkenson'
              target='_blank'
              className='flex flex-col w-full items-center space-y-3'
            >
              <Talya className='h-16 w-16 shrink-0 ' />
              <span>Таля</span>
            </a>
            <a
              href='https://instagram.com/alnzhdkn'
              target='_blank'
              className='flex flex-col w-full items-center space-y-3'
            >
              <Alina className='h-16 w-16 shrink-0 ' />
              <span>Алина</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col space-y-6'>
          <h2 className='font-display text-xl'>Условия спора VIAJ</h2>
          {goalsMe.map((v, i) => (
            <div className={`flex flex-col gap-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-lg text-center italic`}>
                {v.text}
              </span>
            </div>
          ))}
          <hr className='border-white opacity-40' />
          {goalsHer.map((v, i) => (
            <div className={`flex flex-col gap-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-lg text-center italic`}>
                {v.text}
              </span>
            </div>
          ))}
        </div>
        <div className='flex flex-col space-y-6 items-center'>
          <h2 className='font-display text-xl'>Скрин</h2>
          <img src={image} className='max-w-[20rem]' />
        </div>
      </div>
      <div className='py-10 w-full'>
        <Logo className='mx-auto text-white w-[8rem]' />
      </div>
    </div>
  )
}

export default App

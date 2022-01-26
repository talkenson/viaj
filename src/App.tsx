import { ReactComponent as Logo } from './assets/viaj.svg'
import Airplane from '~icons/twemoji/airplane'
import Hotel from '~icons/twemoji/hotel'
import Study from '~icons/twemoji/open-book'
import SportMan from '~icons/twemoji/flexed-biceps-light-skin-tone'
import Code from '~icons/twemoji/laptop'
import SportGirl from '~icons/twemoji/woman-surfing-medium-skin-tone'
import Talya from '~icons/twemoji/man-light-skin-tone-beard'
import Alina from '~icons/twemoji/woman-light-skin-tone'
import ChevronDown from '~icons/ion/chevron-down'
import image from './assets/screen.jpg'
import {useEffect, useState} from "react";
import {useWindowSize} from "./hooks/useWindowSize";

const stakes = [
  {
    icon: Airplane,
    text: 'Билет туда-обратно по направлению Новосибирск - Сочи (Адлер)',
  },
  {
    icon: Hotel,
    text: `Недельное проживание в отеле с завтраками`,
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

let deletableFunction = (height: number) => {
  let vh = height * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

const App = () => {
  const [canUpdate, setCanUpdate] = useState(true)
  const {height} = useWindowSize()

  useEffect(() => {
    if (canUpdate) deletableFunction(height)
  }, [height])

  useEffect(() => {
    const timer = setTimeout(() => setCanUpdate(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='container h-full mx-auto max-w-[40rem] ring-0 ring-black flex flex-col space-y-8 px-4 text-white'>
      <div className='w-full flex flex-col items-center justify-center shrink-0 screenHeight relative '>
        <Logo className='text-white lg:mt-0 w-[14rem] lg:w-[20rem]' />
        <ChevronDown className='absolute bottom-6 w-8 h-8 animate-bounce' />
      </div>

      <div className='mt-8 typography ring-0 ring-black px-6 pt-6 pb-12 bg-black/10 rounded-xl flex flex-col space-y-12'>
        <div className='flex flex-col space-y-6'>
          <h2 className='font-display text-xl'>Что такое VIAJ?</h2>
          <p className='text-justify'>
            [вояж] - это спор на путешествие, с периодом подведения итогов
            в 2 месяца.
            <br />
            Целью является мотивация к занятию делами, которые реально
            надо привести в порядок, к желаемому результату
            <br />
            <span className='text-xs italic'>(Но времени/мотивации нет)</span>
          </p>
        </div>
        <div className='flex flex-col space-y-8'>
          <h2 className='font-display text-xl'>Ставки VIAJ</h2>
          {stakes.map((v, i) => (
            <div className={`flex flex-col space-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-center text-md`}>
                {v.text}
              </span>
            </div>
          ))}
        </div>
        <div className='flex flex-col space-y-4'>
          <h2 className='font-display text-xl'>Стороны VIAJ</h2>
          <div className='flex items-center justify-between pt-2 space-x-3 group'>
            <a
              href='https://t.me/talkenson'
              target='_blank'
              className='flex flex-col w-full items-center space-y-3 personCard'
            >
              <Talya className='h-16 w-16 shrink-0 hovering-icon' />
              <span>Таля</span>
            </a>
            <a
              href='https://instagram.com/alnzhdkn'
              target='_blank'
              className='flex flex-col w-full items-center space-y-3 personCard'
            >
              <Alina className='h-16 w-16 shrink-0 hovering-icon' />
              <span>Алина</span>
            </a>
          </div>
        </div>
        <div className='flex flex-col space-y-8'>
          <h2 className='font-display text-xl'>Условия VIAJ</h2>
          {goalsMe.map((v, i) => (
            <div className={`flex flex-col space-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-center text-md`}>
                {v.text}
              </span>
            </div>
          ))}
          <hr className='border-white opacity-40  w-5/6 mx-auto' />
          {goalsHer.map((v, i) => (
            <div className={`flex flex-col space-y-3 items-center`}>
              <v.icon className='h-16 w-16 shrink-0 ' />
              <span className={`w-full text-center text-md`}>
                {v.text}
              </span>
            </div>
          ))}
        </div>
        <div className='flex flex-col space-y-6 items-center'>
          <h2 className='font-display text-xl'>Как это началось?</h2>
          <img src={image} alt='Chat screen' className='max-w-[18rem] lg:max-w-[20rem]' />
        </div>
      </div>
      <div className='pt-10 pb-14 w-full'>
        <Logo className='mx-auto text-white w-[8rem]' />
      </div>
    </div>
  )
}

export default App

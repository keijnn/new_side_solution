import { useLocation } from 'react-router-dom'

export const Paragraph = () => {
  const paragraph = useLocation()

  return (
    <div className='bg-[wheat] h-full flex items-center justify-center'>
      {paragraph.pathname.split('/paragraph/')}
    </div>
  )
}

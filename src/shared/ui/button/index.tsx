//import modules
import clsx from 'clsx'

interface ButtonProps {
  label: string
  className?: string
  onClick?: () => void
}

export const Button = ({ label, className, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={clsx('text-md p-1 bg-gray text-[wheat] rounded-md', className)}
  >
    {label}
  </button>
)

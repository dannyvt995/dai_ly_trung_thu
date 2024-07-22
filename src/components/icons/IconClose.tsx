const IconClose = ({
  size = 16,
  color = 'gray'
}: {
  size?: number
  color?: string
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-x'
    >
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  )
}

export default IconClose

interface SliderProps {
  children: React.ReactElement
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      {children}
    </div>
  )
}

export default Slider
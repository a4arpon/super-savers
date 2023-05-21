import imgLoad from '../assets/Loader.svg'
const Loading = () => {
  return (
    <div className="h-[calc(100vh-30vh)] container mx-auto flex justify-center items-center">
      <img src={imgLoad} alt="" />
    </div>
  )
}

export default Loading



const Searchbox = ({onSearch}) => {
  return (
    <div className=' flex flex-col items-center justify-center'>
    <h1 className='text text-5xl p-4 text-white'>ROBOFRIENDS</h1>
    <input type='search' className='px-4 py-3 border mt-12 border-navBar  bg-primary text-cyan-50' placeholder='search robot'
    onChange={onSearch}/>
    </div>
  )
}

export default Searchbox
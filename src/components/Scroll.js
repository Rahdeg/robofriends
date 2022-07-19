
const Scroll = (props) => {
  return (
    <div style={{overflowY:"scroll", scrollBehavior:"smooth" ,border:"5px solid black",height:"500px", scrollbarColor:'unset'}}>
   
    {props.children}
  
    </div>
  )
}

export default Scroll
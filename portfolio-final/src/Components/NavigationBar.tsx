import icon from './../assets//Icons/light-bulb-svgrepo-com.svg'
function NavigationBar(){
    return(
        <div className="min-w-full flex justify-between px-6 lg:px-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold fixed top-0">
        <p className='py-3 '>JBalda</p> 
        <ol className="flex flex-row justify-evenly py-3 px-5">
            <li className='px-3'>About</li>
            <li className='px-3'>Projects</li>
            <li className='px-3'>Contact</li>
            <img src={icon} alt="icon" className='object-scale-down h-6 w-6' />

      </ol>
    </div>
    );

}
export default NavigationBar
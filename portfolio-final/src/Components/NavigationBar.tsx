function NavigationBar(){
    return(
        <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold fixed top-0 z-50">
        <p className='py-3 text-sm sm:text-base'>JBalda</p>
        <ol className="flex flex-row justify-evenly py-3 text-sm sm:text-base">
            <li className='px-2 sm:px-3'>About</li>
            <li className='px-2 sm:px-3'>Projects</li>
            <li className='px-2 sm:px-3'>Contact</li>
      </ol>
    </div>
    );

}
export default NavigationBar
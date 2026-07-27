type TextSectionProps = {
    text:string
    imgSrc:string
    title:string
}
function TextSection({text, imgSrc, title}:TextSectionProps){
const tmpImgSrc:string = (imgSrc==undefined) ?  "https://picsum.photos/200": imgSrc ;
const tmpText:string = (text==undefined) ?  "No estoy definido": text ;
const tmpTitle:string = (title==undefined) ?  "No estoy definido": title ;

    return(
    <div className="py-4 px-4 flex flex-col items-center gap-4 bg-gradient-to-b from-purple-700 via-purple-600  to-purple-700  text-left " >

        <span className=" font-bold py-6 text-lg sm:text-xl tracking-wide text-neutral-200" >{tmpTitle}</span>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto items-center justify-center gap-8 lg:gap-16">
            <img className="object-scale-down h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 shrink-0 rounded-full" src={tmpImgSrc}></img>
            <span className="text-white font-nunito text-base sm:text-lg lg:text-2xl p-2 break-normal max-w-3xl align-text-top ">{tmpText}</span>

        </div>

    </div>
    )
    }
export default TextSection;
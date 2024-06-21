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
    <div className="grid grid-rows row-auto gap-4 place-items-center items-center bg-gradient-to-b from-purple-700 via-purple-600  to-purple-700  text-5xl text-left " >
        
        <span className=" row-span-1 font-bold py-6 text-xl tracking-wide text-neutral-200" >{tmpTitle}</span>
        
        <div className="row-span-2 flex flex-row min-w-full justify-center gap-64">
            <img className="object-scale-down h-96  w-96 justify-center rounded-lg" src={tmpImgSrc}></img>
            <span className="text-white font-nunito text-2xl p-2 break-normal max-w-3xl ">{tmpText}</span>
        
        </div>

    </div>
    )
    }
export default TextSection;
type Props = {
   id: number
   title: string
   url: string
}

export default function GalleryImage({ id, url, title }: Props) {
   return (
      <div
         key={id}
         className="relative flex h-full w-full shrink-0 items-center justify-center"
      >
         <div
            className="absolute z-10 max-w-[24ch] rotate-45 
                       rounded-full bg-neutral-800 bg-opacity-60 px-8 py-4 
                       text-center text-sm font-semibold text-neutral-100 sm:text-base"
         >
            {title}
         </div>
         <img
            className="absolute h-5/6 w-5/6 rounded-lg 
                       border-8 border-neutral-600 object-cover shadow-lg"
            src={url}
            alt={title}
         />
      </div>
   )
}

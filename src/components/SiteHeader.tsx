export default function SiteHeader() {
   return (
      <header>
         <h1 className="mb-2 text-xl sm:text-2xl">
            <span className="italic tracking-tighter">Fetch Gallery</span>
         </h1>
         <h2 className="text-sm">
            Fetching 8 '/photos' Objects from JSONPlaceholder
         </h2>
      </header>
   )
}

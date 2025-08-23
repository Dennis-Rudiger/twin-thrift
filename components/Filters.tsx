export default function Filters() {
  return (
    <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
      {/* ...placeholder for advanced filter controls... */}
      <input name="q" placeholder="Search" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="brand" placeholder="Brand" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="category" placeholder="Category" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="size" placeholder="Size" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="min" placeholder="Min" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="max" placeholder="Max" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <button className="w-full rounded-md bg-ink px-4 py-2 text-oat md:w-auto">Filter</button>
    </form>
  )
}

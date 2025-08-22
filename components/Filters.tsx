export default function Filters() {
  return (
    <form className="grid grid-cols-2 md:grid-cols-6 gap-3">
      {/* ...placeholder for advanced filter controls... */}
      <input name="q" placeholder="Search" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="brand" placeholder="Brand" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="category" placeholder="Category" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="size" placeholder="Size" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="min" placeholder="Min" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="max" placeholder="Max" className="rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <button className="rounded-md bg-ink text-oat px-4 py-2">Filter</button>
    </form>
  )
}

export default function Filters() {
  return (
    <form className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
      {/* ...placeholder for advanced filter controls... */}
      <input name="q" placeholder="Search" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="brand" placeholder="Brand" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <select name="category" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2">
        <option value="">All categories</option>
        <option value="Mummy Jeans">Mummy Jeans</option>
        <option value="Corduroy Pants">Corduroy Pants</option>
        <option value="Denim Shorts">Denim Shorts</option>
        <option value="Cargo Pants">Cargo Pants</option>
        <option value="Flannel Shirts">Flannel Shirts</option>
      </select>
      <input name="size" placeholder="Size" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="min" placeholder="Min (KES)" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <input name="max" placeholder="Max (KES)" className="w-full rounded-md border border-lilac/40 bg-blush px-3 py-2" />
      <button className="w-full rounded-md bg-ink px-4 py-2 text-oat md:w-auto">Filter</button>
    </form>
  )
}

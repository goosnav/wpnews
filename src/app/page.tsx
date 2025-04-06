import Link from 'next/link'

export default function Home() {
  // Temporary mock data - will be replaced with real data from Supabase
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of AI in News Generation",
      excerpt: "Exploring how artificial intelligence is revolutionizing the news industry...",
      category: "Technology",
      date: "2024-04-06",
    },
    {
      id: 2,
      title: "Y2K Aesthetics Make a Comeback",
      excerpt: "The nostalgic design trends of the early 2000s are experiencing a resurgence...",
      category: "Design",
      date: "2024-04-05",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Featured Articles Section */}
      <section>
        <h2 className="text-2xl font-bold text-xp-blue mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link 
              href={`/article/${article.id}`} 
              key={article.id}
              className="group"
            >
              <div className="bg-white rounded-lg p-6 shadow-xp hover:shadow-lg transition-shadow duration-300 border border-xp-gray">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-xp-darker-gray">{article.category}</span>
                  <span className="text-sm text-xp-darker-gray">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-xp-blue group-hover:text-xp-light-blue transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="mt-2 text-xp-darker-gray">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center text-xp-blue group-hover:text-xp-light-blue transition-colors duration-300">
                  <span>Read More</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-2xl font-bold text-xp-blue mb-4">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Technology', 'Science', 'Business', 'Entertainment', 'Sports'].map((category) => (
            <Link
              href={`/categories/${category.toLowerCase()}`}
              key={category}
              className="bg-white rounded-lg p-4 text-center shadow-xp hover:shadow-lg transition-shadow duration-300 border border-xp-gray"
            >
              <span className="text-xp-blue font-medium">{category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

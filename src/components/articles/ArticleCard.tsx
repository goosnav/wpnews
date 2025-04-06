import Link from 'next/link'
import { format } from 'date-fns'
import { Database } from '@/lib/types/database.types'

type Article = Database['public']['Tables']['articles']['Row']

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link 
      href={`/article/${article.slug}`}
      className="group"
    >
      <div className="bg-white rounded-lg p-6 shadow-xp hover:shadow-lg transition-shadow duration-300 border border-xp-gray">
        {article.featured_image && (
          <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
            <img
              src={article.featured_image}
              alt={article.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-xp-darker-gray">
            {format(new Date(article.published_date), 'MMM d, yyyy')}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-xp-blue group-hover:text-xp-light-blue transition-colors duration-300">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="mt-2 text-xp-darker-gray">
            {article.excerpt}
          </p>
        )}
        <div className="mt-4 flex items-center text-xp-blue group-hover:text-xp-light-blue transition-colors duration-300">
          <span>Read More</span>
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  )
} 
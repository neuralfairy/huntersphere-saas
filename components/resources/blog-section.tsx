import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "10 Email Automation Workflows That Convert",
      excerpt: "Discover the most effective email sequences that turn prospects into customers.",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      category: "Automation",
      image: "/placeholder.svg?height=200&width=400",
      slug: "email-automation-workflows-convert",
    },
    {
      title: "The Psychology of B2B Email Marketing",
      excerpt: "Understanding buyer psychology to craft emails that resonate and drive action.",
      author: "Michael Chen",
      date: "Jan 12, 2024",
      category: "Strategy",
      image: "/placeholder.svg?height=200&width=400",
      slug: "psychology-b2b-email-marketing",
    },
    {
      title: "AI in Email Marketing: What's Next?",
      excerpt: "Exploring the future of artificial intelligence in email marketing automation.",
      author: "Emily Rodriguez",
      date: "Jan 10, 2024",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=400",
      slug: "ai-email-marketing-future",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay ahead with expert insights and proven strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="text-red-600 hover:text-red-700 flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/resources/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            View All Blog Posts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

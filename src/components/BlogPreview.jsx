import React from 'react';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Electrical Safety Tips for Homeowners",
      excerpt: "Learn the most important electrical safety practices to protect your family and property from electrical hazards.",
      date: "May 28, 2025",
      readTime: "5 min read",
      category: "Safety",
      image: "/api/placeholder/400/250",
      author: "Mike Johnson"
    },
    {
      id: 2,
      title: "Signs Your Home Needs Electrical Panel Upgrade",
      excerpt: "Discover the warning signs that indicate it's time to upgrade your electrical panel for better safety and efficiency.",
      date: "May 25, 2025",
      readTime: "7 min read",
      category: "Upgrades",
      image: "/api/placeholder/400/250",
      author: "Sarah Chen"
    },
    {
      id: 3,
      title: "Smart Home Electrical Solutions for Modern Living",
      excerpt: "Explore the latest smart home electrical technologies that can enhance your comfort and energy efficiency.",
      date: "May 22, 2025",
      readTime: "6 min read",
      category: "Smart Home",
      image: "/api/placeholder/400/250",
      author: "David Rodriguez"
    }
  ];

  const categories = ["All", "Safety", "Upgrades", "Smart Home", "Maintenance", "Energy Efficiency"];

  return (
    <section className="py-20 bg-gradient-to-br from-cool-white to-soft-cyan/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-graphite-gray mb-6">
            Latest <span className="text-electric-blue">Insights</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert electrical tips, industry news, and helpful guides 
            from our certified electricians.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                index === 0
                  ? 'bg-electric-blue text-white shadow-lg'
                  : 'bg-white text-slate hover:bg-electric-blue hover:text-white border border-slate/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[16/10] bg-gradient-to-br from-electric-blue/20 to-soft-cyan flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-electric-blue/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-electric-blue text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-xl font-bold text-graphite-gray mb-3 group-hover:text-electric-blue transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-slate leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-electric-blue font-semibold hover:gap-3 transition-all duration-300">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <button className="btn-primary group">
            View All Articles
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-graphite-gray mb-4">
              Stay Updated with Electrical Insights
            </h3>
            <p className="text-slate mb-6">
              Get the latest electrical tips, safety guides, and industry news delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

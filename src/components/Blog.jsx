import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // SEO optimization: Set title and meta description on mount
  useEffect(() => {
    document.title = 'Blog | Ashikur Rahman Shaon';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the latest insights, tutorials, and articles on web development, UI/UX design, and digital marketing from Ashikur Rahman Shaon.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read the latest insights, tutorials, and articles on web development, UI/UX design, and digital marketing from Ashikur Rahman Shaon.';
      document.head.appendChild(meta);
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: What to Expect in 2026',
      excerpt: 'Explore the upcoming trends in web development, from AI-driven coding assistants to the rise of WebAssembly and edge computing.',
      date: 'July 24, 2026',
      author: 'Ashikur Rahman Shaon',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      title: 'Mastering Framer Motion in React',
      excerpt: 'A comprehensive guide to creating fluid, highly performant animations in your React applications using Framer Motion.',
      date: 'July 18, 2026',
      author: 'Ashikur Rahman Shaon',
      category: 'Tutorial',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      title: 'UI/UX Principles Every Developer Should Know',
      excerpt: 'Bridge the gap between design and development by mastering these core UI/UX principles that elevate user experiences.',
      date: 'July 05, 2026',
      author: 'Ashikur Rahman Shaon',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-16 min-h-screen relative z-10 w-full">
      
      {/* Background Orbs specific to Blog */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b373]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wide"
          >
            Latest <span className="text-primary">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Thoughts, tutorials, and insights about web development, design, and digital experiences.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden backdrop-blur-xl group hover:border-white/[0.15] transition-all flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-background/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-primary" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-gray-500 font-medium mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group/btn mt-auto"
                >
                  <span className="group-hover/btn:text-primary transition-colors">Read Article</span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center group-hover/btn:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover/btn:text-background transition-colors" />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

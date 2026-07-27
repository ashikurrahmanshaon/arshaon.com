import React, { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

const BLOG_DATA = {
  "1": {
    title: 'The Future of Web Development: What to Expect in 2026',
    date: 'July 24, 2026',
    author: 'Ashikur Rahman Shaon',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">The landscape of web development is shifting faster than ever. As we look towards the next era of digital architecture, the boundaries between the browser and native applications continue to dissolve.</p>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">The AI-Driven Development Ecosystem</h3>
      <p class="text-gray-400 mb-6 leading-loose">We are no longer just writing code; we are orchestrating it. AI assistants have evolved from simple autocomplete tools into architectural co-pilots. Developers in 2026 spend less time fixing syntax errors and more time solving high-level system design problems. This paradigm shift means the value of a developer is increasingly measured by their ability to structure logic and prompt complex systems effectively.</p>
      
      <blockquote class="border-l-4 border-primary pl-6 my-10 italic text-2xl text-gray-300 font-light">"The developer of the future is an architect of logic, not just a writer of syntax."</blockquote>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">WebAssembly & The Edge</h3>
      <p class="text-gray-400 mb-6 leading-loose">WebAssembly (Wasm) has officially matured, allowing high-performance applications—such as video editing tools, 3D rendering engines, and heavy computational software—to run seamlessly in the browser at near-native speeds. Combined with Edge Computing, we are seeing load times drop to near zero globally. Data is no longer routed through centralized servers thousands of miles away; it is processed at the edge, millimeters from the user.</p>
      
      <p class="text-gray-400 mb-6 leading-loose">As we adapt to these massive shifts, one thing remains clear: user experience is still king. The technology is just the vehicle; the destination is always a flawless, frictionless journey for the end user.</p>
    `
  },
  "2": {
    title: 'Mastering Framer Motion in React',
    date: 'July 18, 2026',
    author: 'Ashikur Rahman Shaon',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">Animation is no longer an afterthought in web design; it is a core component of the user experience. When used correctly, animations can guide attention, provide feedback, and create a premium feel.</p>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">Why Framer Motion?</h3>
      <p class="text-gray-400 mb-6 leading-loose">Framer Motion has become the gold standard for React animations. Unlike traditional CSS transitions which can become unmanageable in complex applications, Framer Motion provides a declarative API that integrates perfectly with React's component lifecycle. From simple fade-ins to complex gesture-based interactions, it handles the heavy lifting of physics-based animations effortlessly.</p>
      
      <div class="bg-[#14181f] p-6 rounded-2xl border border-white/10 my-8 font-mono text-sm text-green-400">
        &lt;motion.div<br/>
        &nbsp;&nbsp;initial={{ opacity: 0, y: 50 }}<br/>
        &nbsp;&nbsp;animate={{ opacity: 1, y: 0 }}<br/>
        &nbsp;&nbsp;transition={{ type: "spring", stiffness: 100 }}<br/>
        &gt;<br/>
        &nbsp;&nbsp;Premium Content<br/>
        &lt;/motion.div&gt;
      </div>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">The Psychology of Micro-interactions</h3>
      <p class="text-gray-400 mb-6 leading-loose">The secret to high-end design lies in micro-interactions. A button that slightly scales down when pressed, a menu that staggers its children as it opens, or a card that casts a glowing shadow on hover—these tiny details tell the user that your product is crafted with care. Framer Motion's 'variants' system allows us to orchestrate these complex, multi-stage animations with incredibly clean code.</p>
    `
  },
  "3": {
    title: 'UI/UX Principles Every Developer Should Know',
    date: 'July 05, 2026',
    author: 'Ashikur Rahman Shaon',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p class="text-xl text-gray-300 leading-relaxed mb-8">The most brilliant backend architecture is useless if the user cannot navigate the interface. As developers, we must bridge the gap between engineering and design to build products that people actually want to use.</p>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">Visual Hierarchy & Typography</h3>
      <p class="text-gray-400 mb-6 leading-loose">Hierarchy is how we tell the user what matters most. It is not just about making things bigger; it is about contrast, whitespace, and placement. Using a distinct display font for headings and a highly legible sans-serif for body copy is a fundamental rule. Never underestimate the power of line-height and letter-spacing to instantly elevate a design from amateur to premium.</p>
      
      <blockquote class="border-l-4 border-primary pl-6 my-10 italic text-2xl text-gray-300 font-light">"Design is not just what it looks like and feels like. Design is how it works."</blockquote>
      
      <h3 class="text-3xl font-display font-bold text-white mb-6 mt-12">The Power of Whitespace</h3>
      <p class="text-gray-400 mb-6 leading-loose">Whitespace (or negative space) is the breathing room around your elements. Novice developers try to cram as much information as possible onto the screen to reduce scrolling. Elite designers know that whitespace increases comprehension, reduces cognitive load, and creates a sense of luxury. When in doubt, double your padding.</p>
      
      <p class="text-gray-400 mb-6 leading-loose">Ultimately, good UI/UX is invisible. When the user accomplishes their goal without friction, without confusion, and with a slight sense of delight—you have succeeded.</p>
    `
  }
};

const FacebookIcon = ({ size=16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const LinkedinIcon = ({ size=16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const TwitterIcon = ({ size=16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = useMemo(() => BLOG_DATA[id], [id]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog`;
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-24 px-6 md:px-16 min-h-screen relative z-10 w-full">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-wide">Back to Articles</span>
        </motion.button>

        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-sm text-primary font-bold tracking-wider uppercase mb-6"
          >
            <span className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-8"
          >
            {post.title}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-medium border-y border-white/10 py-6"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="text-white">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <time>{post.date}</time>
            </div>
            <div className="flex items-center gap-4 ml-auto">
              <span className="uppercase tracking-widest text-[10px]">Share:</span>
              <a href="#" className="hover:text-primary transition-colors"><TwitterIcon size={16} /></a>
              <a href="#" className="hover:text-primary transition-colors"><FacebookIcon size={16} /></a>
              <a href="#" className="hover:text-primary transition-colors"><LinkedinIcon size={16} /></a>
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60"></div>
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* End of article marker */}
        <div className="flex justify-center mt-20 mb-10">
          <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;

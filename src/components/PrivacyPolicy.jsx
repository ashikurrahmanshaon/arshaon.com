import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <section className="py-32 px-8 md:px-16 bg-transparent relative z-10 flex-grow">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block bg-white/5 border border-white/10 text-primary text-[10px] uppercase font-bold tracking-widest px-5 py-2 rounded-full backdrop-blur-xl mb-6">
            Last Updated: August 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-8 leading-tight">
            PRIVACY <span className="text-primary">POLICY</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Your privacy is critically important to us. At Ashikur Rahman Shaon's digital agency, we have a few fundamental principles: we don't ask you for personal information unless we truly need it, we don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 text-gray-300 prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tighter prose-a:text-primary hover:prose-a:text-white"
        >
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. We collect this information from three sources: if and when you provide information to us, automatically through operating our services, and from outside sources.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">2. How We Use Information</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              We use the information we collect to provide our services, maintain and improve them, develop new services, and protect our company and our users. We also use this information to offer you tailored content—like giving you more relevant search results and ads.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>To provide, maintain and improve our Services;</li>
              <li>To develop new products, services, features, and functionality;</li>
              <li>To communicate with you, provide customer support, and send personalized marketing;</li>
              <li>To monitor and analyze trends, usage, and activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">3. Security</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              While no online service is 100% secure, we work very hard to protect information about you against unauthorized access, use, alteration, or destruction, and take reasonable measures to do so, such as monitoring our Services for potential vulnerabilities and attacks.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">4. Contact Us</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@arshaon.com" className="text-primary hover:underline font-semibold">contact@arshaon.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

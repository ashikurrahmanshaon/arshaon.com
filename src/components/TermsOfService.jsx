import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            TERMS OF <span className="text-primary">SERVICE</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12 text-gray-300 prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tighter prose-a:text-primary hover:prose-a:text-white"
        >
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">1. Services Provided</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              We provide digital marketing, SEO, social media management, and web development services. The specific details, scope, and deliverables of any project will be agreed upon in writing before the commencement of work.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">2. Client Responsibilities</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              To ensure the success of our collaboration, clients agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Provide necessary access to accounts, assets, and information required for the project.</li>
              <li>Respond to feedback requests and approvals in a timely manner.</li>
              <li>Ensure that any materials provided do not infringe on third-party copyrights or trademarks.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">3. Payment & Billing</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              Payment terms will be outlined in your specific contract or invoice. Generally, a deposit is required upfront before work begins. We reserve the right to suspend services if payments are not made according to the agreed schedule.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">4. Intellectual Property</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              Upon full payment, the client will own the final deliverables as outlined in the project agreement. However, we retain the right to showcase the completed work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) is signed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">5. Contact Us</h2>
            <p className="leading-relaxed mb-4 text-gray-400">
              If you have any questions about these Terms, please contact us at <a href="mailto:contact@arshaon.com" className="text-primary hover:underline font-semibold">contact@arshaon.com</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService;

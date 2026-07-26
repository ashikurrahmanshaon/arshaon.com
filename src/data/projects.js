export const projects = [
  {
    id: 'ecom-scale',
    title: 'Apex Apparel - The $4M Scale',
    category: 'E-Commerce Scaling',
    description: 'Scaled a struggling fashion brand from $50k/mo to generating $4.2M in annual profit through aggressive Meta Ad restructuring and Server-Side Tracking.',
    tags: ['Meta Ads', 'CAPI Tracking', 'Funnel CRO'],
    image: '/images/dashboard_1.png',
    metrics: [
      { label: 'Total Profit Generated', value: '$4.2M' },
      { label: 'Average ROAS', value: '5.8x' },
      { label: 'CPA Reduction', value: '-62%' }
    ],
    challenge: 'Apex Apparel was burning through $30k/month in ad spend with a meager 1.2x ROAS. Their iOS 14 tracking was completely broken, meaning they were flying blind. They were paying for vanity metrics ("brand awareness") instead of direct response purchases. If they didn\'t fix their acquisition cost, they were going to go bankrupt in 4 months.',
    strategy: [
      'Implemented advanced Server-Side Tracking (CAPI) to recover 35% of lost purchase data blocked by iOS updates.',
      'Killed 80% of their existing campaigns and consolidated budget into 3 highly optimized Advantage+ Shopping Campaigns.',
      'Completely rewrote their ad copy, shifting from generic "fashion" language to aggressive, direct-response hooks focusing on fabric technology and exclusivity.',
      'Optimized their Shopify checkout flow, increasing conversion rate (CVR) from 1.8% to 4.1%.'
    ],
    resultsText: 'Within 90 days, we stabilized the account. By month 6, we scaled spend to $100k/mo profitably. By the end of year one, Apex Apparel had generated over $4.2M in net profit, allowing the founders to completely exit the daily operations of the business.'
  },
  {
    id: 'b2b-saas',
    title: 'Nexus SaaS - Lead Gen Explosions',
    category: 'B2B Lead Generation',
    description: 'Repaired broken tracking infrastructure and deployed high-intent Google Search campaigns to increase Marketing Qualified Leads (MQLs) by 300%.',
    tags: ['Google Ads', 'GTM', 'B2B Strategy'],
    image: '/images/dashboard_2.png',
    metrics: [
      { label: 'Increase in MQLs', value: '+300%' },
      { label: 'Cost Per Lead', value: '$42' },
      { label: 'Annual Contract Value', value: '$1.2M+' }
    ],
    challenge: 'Nexus Software had a great product but a terrible customer acquisition strategy. They were relying entirely on cold email and outbound sales. Their Google Ads account was a mess—bidding on broad, expensive keywords that brought in low-quality traffic. They needed high-intent enterprise leads, fast.',
    strategy: [
      'Conducted a massive technical SEO and Google Ads audit, pausing $15k/mo in wasted spend on irrelevant broad match keywords.',
      'Built custom landing pages for 5 specific enterprise use-cases, drastically increasing Quality Score and lowering CPC.',
      'Implemented offline conversion tracking (OCT) in Google Ads, feeding CRM data back to the algorithm so it learned what a "closed deal" looked like, not just a "form fill".',
      'Launched highly targeted LinkedIn retargeting for users who visited the pricing page but didn\'t convert.'
    ],
    resultsText: 'The shift from volume to quality changed everything. While overall website traffic actually decreased, the volume of high-intent Marketing Qualified Leads (MQLs) skyrocketed by 300%. We dropped their Cost Per Lead (CPL) to $42, resulting in over $1.2M in closed Annual Contract Value (ACV) within 6 months.'
  },
  {
    id: 'info-launch',
    title: 'Mastery Course - 7-Figure Launch',
    category: 'Info-Product Launch',
    description: 'Orchestrated a massive $1M+ course launch relying entirely on organic TikTok virality and hyper-aggressive retargeting.',
    tags: ['TikTok Organic', 'Retargeting', 'Launch Strategy'],
    image: '/images/dashboard_3.png',
    metrics: [
      { label: 'Launch Revenue', value: '$1.1M' },
      { label: 'Ad Spend', value: '$15k' },
      { label: 'Community Size', value: '45k+' }
    ],
    challenge: 'An established industry expert wanted to launch their flagship high-ticket course ($2,000 price point). However, they had a small email list and zero warm audience. Launching a high-ticket product to cold traffic is notoriously difficult and expensive.',
    strategy: [
      'Designed a 60-day organic TikTok and Instagram Reels content sprint to build massive authority and a warm audience before the launch.',
      'Created a high-converting "Free Masterclass" VSL (Video Sales Letter) funnel to capture emails and pixel the audience.',
      'Spent 95% of the ad budget exclusively on retargeting the warm audience (people who watched 50%+ of the organic videos or opted into the Masterclass).',
      'Deployed a 7-day cart-close urgency sequence using email marketing and SMS.'
    ],
    resultsText: 'The results were staggering. Because we built massive organic trust prior to the launch, our retargeting ads converted at incredible rates. We spent only $15,000 on ads and generated over $1.1M in course sales in just 7 days, completely selling out the cohort.'
  },
  {
    id: 'ads-manager-recovery',
    title: 'Ad Account Recovery & Scaling',
    category: 'Ads Management',
    description: 'Recovered a restricted Meta Ads account for a health brand and scaled their daily spend to $2,000/day while maintaining a 3.5x ROAS.',
    tags: ['Meta Ads', 'Account Recovery', 'Scaling'],
    image: '/images/ads_manager.png',
    metrics: [
      { label: 'Daily Spend Scaled', value: '$2,000' },
      { label: 'Sustained ROAS', value: '3.5x' },
      { label: 'Account Bans Resolved', value: '100%' }
    ],
    challenge: 'A prominent health and wellness brand had their Meta Ads account abruptly restricted during their peak season. They were losing thousands of dollars in potential revenue every single day. Furthermore, their previous campaigns were suffering from ad fatigue and plummeting ROAS.',
    strategy: [
      'Successfully appealed and recovered the restricted Meta Ads account by auditing and correcting all policy compliance issues.',
      'Restructured the ad account architecture, moving away from micro-targeting to broad audiences optimized by Meta\'s machine learning.',
      'Implemented a rapid creative testing framework to continuously feed fresh video ads to the algorithm, combating ad fatigue.',
      'Set up automated rules to scale winning ad sets by 15% daily while instantly pausing any ad sets dropping below a 2.0x ROAS.'
    ],
    resultsText: 'Within 48 hours, the account was fully restored. Over the next 30 days, we aggressively but safely scaled their daily spend from $0 to $2,000/day. More importantly, we stabilized their ROAS at a highly profitable 3.5x, resulting in a record-breaking quarter for the brand.'
  },
  {
    id: 'social-media-viral',
    title: 'Zero to 500k in 90 Days',
    category: 'Social Media Growth',
    description: 'Engineered a viral short-form content strategy that grew a lifestyle brand\'s Instagram and TikTok following from zero to over 500,000 in 3 months.',
    tags: ['TikTok Growth', 'Instagram Reels', 'Viral Strategy'],
    image: '/images/social_media.png',
    metrics: [
      { label: 'Total Followers Gained', value: '520K' },
      { label: 'Organic Video Views', value: '45M+' },
      { label: 'Engagement Rate', value: '12.4%' }
    ],
    challenge: 'A new lifestyle and apparel brand had zero online presence. Paid acquisition costs were too high to rely solely on ads. They needed a massive organic audience to build brand awareness and drive top-of-funnel traffic without burning through venture capital.',
    strategy: [
      'Developed a hyper-specific content pillar strategy focusing on relatable, high-retention short-form videos.',
      'Analyzed viral hooks and editing styles in the niche, implementing a fast-paced, high-energy editing style with dynamic captions.',
      'Established a rigorous posting schedule of 3 high-quality short-form videos per day across TikTok, Instagram Reels, and YouTube Shorts.',
      'Leveraged controversial (but brand-safe) opinions in the niche to drive massive comment section engagement, pushing the videos into algorithmic hyper-drive.'
    ],
    resultsText: 'The compounding effect of consistent, high-retention content was explosive. By day 45, a single video hit 10 million views, bringing in 150,000 followers overnight. By day 90, the brand had surpassed 500,000 highly engaged followers across platforms, resulting in massive organic sales.'
  },
  {
    id: 'youtube-monetization',
    title: 'The $30k/mo YouTube Engine',
    category: 'Monetization',
    description: 'Optimized a creator\'s YouTube channel to maximize AdSense revenue, securing high-paying sponsorships and exploding their monthly income.',
    tags: ['YouTube SEO', 'AdSense', 'Sponsorships'],
    image: '/images/monetization.png',
    metrics: [
      { label: 'Monthly Revenue', value: '$32,500' },
      { label: 'RPM Increase', value: '+140%' },
      { label: 'Subscriber Growth', value: '+85K' }
    ],
    challenge: 'A talented educational YouTuber with 200,000 subscribers was only making $4,000 a month. Their RPM (Revenue Per Mille) was terribly low because they weren\'t optimizing for high-value advertiser demographics. They were leaving massive amounts of money on the table.',
    strategy: [
      'Conducted a deep-dive audit into their YouTube Analytics to identify which specific topics and keywords drove the highest CPM/RPM.',
      'Pivoted content strategy slightly to integrate high-value financial and software keywords without alienating the core audience.',
      'Optimized mid-roll ad placements for maximum revenue without severely impacting viewer retention.',
      'Created a professional media kit and began outbound pitching to software companies for lucrative brand integrations.'
    ],
    resultsText: 'By optimizing video metadata for high-CPM advertisers and strategically placing mid-roll ads, we increased their base AdSense RPM by 140%. Combined with the new inbound and outbound sponsorship deals we secured, the creator\'s monthly revenue skyrocketed from $4,000 to over $32,500 within 4 months.'
  }
];

import { Download, ExternalLink } from 'lucide-react';

const PaymentHistory = () => {
  const invoices = [
    { id: 'INV-2026-081', date: 'Jul 15, 2026', amount: '$999.00', status: 'Paid', service: 'Meta Ads Management' },
    { id: 'INV-2026-074', date: 'Jun 15, 2026', amount: '$999.00', status: 'Paid', service: 'Meta Ads Management' },
    { id: 'INV-2026-068', date: 'May 22, 2026', amount: '$499.00', status: 'Paid', service: 'Technical SEO Audit' },
    { id: 'INV-2026-062', date: 'May 15, 2026', amount: '$999.00', status: 'Paid', service: 'Meta Ads Management' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-display font-bold text-white mb-2">Billing History</h2>
          <p className="text-gray-400">View your past invoices and receipts.</p>
        </div>
        
        <button className="hidden sm:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
          <ExternalLink size={16} /> Manage Billing Portal
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Invoice ID</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Date</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Service</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Amount</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Status</th>
                <th className="p-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-right">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 text-sm font-semibold text-white">{invoice.id}</td>
                  <td className="p-4 text-sm text-gray-400">{invoice.date}</td>
                  <td className="p-4 text-sm text-gray-300">{invoice.service}</td>
                  <td className="p-4 text-sm font-bold text-white">{invoice.amount}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#00ffaa]/10 text-[#00ffaa] border border-[#00ffaa]/20">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 inline-flex items-center justify-center">
                      <Download size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

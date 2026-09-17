import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import servicesImg from "../assets/ServiceDeskPlus.jpg";

// Import your 728x90 Leaderboard Banner image
import sdpLeaderboard from "../assets/sdp-leaderboard.png";

function ServiceDeskPlusLanding() {
  const navigate = useNavigate();

  // ManageEngine affiliate / resource links
  const AFFILIATE_LINK = "https://zurl.to/IgcH";
  const LOG360_AFFILIATE_LINK = "https://zurl.to/vkqS";
  const CISO_HANDBOOK_LINK = "https://zurl.to/jasQ";
  const LOG360_SIEM_EBOOK_LINK = "https://zurl.to/a1fJ";

  const featuresList = [
    {
      title: "SLA Rules That Actually Escalate",
      desc: "You set response and resolution targets by ticket priority. If a ticket is about to breach its SLA, the system escalates it automatically — nobody has to remember to check.",
      focus: "Setting up SLA tiers and escalation paths that match how your team actually works, not a generic template."
    },
    {
      title: "Assets Linked to Tickets",
      desc: "Every device has a history. If the same laptop generates three tickets in a month, you see that pattern immediately instead of treating each one as a fresh mystery.",
      focus: "Getting asset discovery running and keeping the inventory accurate over time."
    },
    {
      title: "A Self-Service Portal Staff Will Actually Use",
      desc: "Employees log their own tickets and check status without emailing or walking over to your desk. This alone cuts a surprising amount of interruption-driven work.",
      focus: "Structuring ticket categories so the portal is simple enough that people bother using it."
    },
    {
      title: "Reports You Can Hand to an Owner",
      desc: "SLA compliance, ticket volume by category, average resolution time — the numbers that let you say 'here's proof we're on top of this' instead of 'trust me.'",
      focus: "Building dashboards that answer the questions ownership actually asks."
    }
  ];

  const comparisonRows = [
    { criteria: "Ticket tracking", inbox: "Scattered across email, Slack, sticky notes", sdp: "One queue, one status, one owner" },
    { criteria: "SLA accountability", inbox: "Nobody's really tracking it", sdp: "Automatic targets and escalation" },
    { criteria: "Asset history", inbox: "Lives in someone's memory", sdp: "Attached to every ticket automatically" },
    { criteria: "Realistic fit", inbox: "Under 5 people, low ticket volume", sdp: "10–150 seat teams that have outgrown ad hoc support" }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto bg-gray-50/50 rounded-3xl my-6 text-left">
      <Helmet>
        <title>ManageEngine ServiceDesk Plus for Toronto SMBs | CareEZ IT Sol</title>
        <meta name="description" content="An honest, hands-on look at ManageEngine ServiceDesk Plus — what it does well, where it's clunky, and whether it's worth it for a small Toronto IT team." />
      </Helmet>

      {/* Official ManageEngine 728x90 Leaderboard Banner */}
      <div className="w-full flex justify-center mb-8">
        <a 
          href={AFFILIATE_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group max-w-full"
        >
          <img 
            src={sdpLeaderboard} 
            alt="ManageEngine ServiceDesk Plus Official Banner" 
            className="w-full h-auto max-w-[728px] rounded-xl border border-gray-200 shadow-xs group-hover:opacity-95 transition-opacity"
          />
        </a>
      </div>

      {/* Header Block */}
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
          ITSM Solutions
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-3 text-gray-900 tracking-tight">
          Is ServiceDesk Plus Worth It for a Small Toronto IT Team?
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          I've spent years on the incident management side of IT support — this is what I'd actually tell
          a business owner sitting across the table from me, not a sales pitch.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Feature Cards */}
        <div className="space-y-4">
          {featuresList.map((f, i) => (
            <div key={i} className="p-5 bg-white border border-gray-200 rounded-xl shadow-xs transition-all hover:shadow-md">
              <h3 className="font-bold text-lg text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-2 mb-4 leading-relaxed">{f.desc}</p>
              <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                <span className="font-semibold text-emerald-800">What setup actually involves: </span>
                {f.focus}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Visuals, Primary CTA, & Affiliate Box */}
        <div className="flex flex-col gap-6 sticky top-6">
          <img
            src={servicesImg}
            className="rounded-xl h-[300px] w-full object-cover shadow-sm bg-gray-200"
            alt="ManageEngine ServiceDesk Plus dashboard interface"
          />

          <button
            onClick={() => navigate('/contact')}
            className="w-full bg-emerald-700 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer text-center"
          >
            Talk to Us About ITSM Setup
          </button>

          {/* ManageEngine Affiliate CTA Box */}
          <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-5 text-center flex flex-col items-center justify-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
              Evaluating the Platform?
            </span>
            <p className="text-xs text-gray-600 max-w-sm leading-normal mb-4">
              Get started with the free tier (up to 5 technicians) or explore cloud and on-premise deployment options directly.
            </p>
            
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-colors shadow-xs text-center block"
            >
              Try ServiceDesk Plus Free *
            </a>
            <span className="text-[10px] text-gray-500 mt-1 block">
              (Directs to ManageEngine's official trial portal for ServiceDesk Plus and related IT management tools)
            </span>
            <span className="text-[10px] text-gray-500 mt-2 block">
              *Affiliate Link: CareEZ IT Sol may receive a referral fee if you register or purchase through this link at no additional cost to you.
            </span>
            
          </div>
        </div>
      </div>

      {/* Honest Trade-Offs Review Section */}
      <div className="mt-14 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-xs">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What I'd Tell You Before You Buy</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-emerald-800 mb-2">Where it earns its price</h4>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>The free edition covers up to 5 technicians — genuinely usable for a small team, not a crippled trial.</li>
              <li>SLA and escalation rules hold up in real day-to-day use, not just in a demo.</li>
              <li>If you're already using other tools in the ManageEngine stack, the native integrations save real time.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-2">Where to go in with eyes open</h4>
            <ul className="space-y-2 text-gray-600 list-disc pl-5">
              <li>The interface feels slightly dated next to newer cloud competitors — functional, not flashy.</li>
              <li>Initial configuration takes intentional planning. Budget a few dedicated hours, not five minutes.</li>
              <li>Deep custom reporting parameters can take some trial and error to dial in perfectly.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-10 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-xs">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Shared Inbox vs. ServiceDesk Plus</h2>
        <p className="text-sm text-gray-500 mb-6">
          Why teams eventually move off a shared inbox — usually after the third missed ticket, not before.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-4 font-bold text-gray-900 rounded-l-xl">Criteria</th>
                <th className="p-4 font-bold text-gray-900">Shared Inbox</th>
                <th className="p-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-r-xl">ServiceDesk Plus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonRows.map((r, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{r.criteria}</td>
                  <td className="p-4 text-gray-600">{r.inbox}</td>
                  <td className="p-4 text-gray-800 font-medium">{r.sdp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Free PDF Guides & E-Books Section */}
      <div className="mt-10 bg-white border border-emerald-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Free PDF Guides & E-Books
          </span>
        </div>
        
        <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
          Download Official ManageEngine Log360 Resources
        </h3>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          Get your free copy of complimentary e-books and white papers on SIEM optimization, cybersecurity metrics, and financial calculations directly from ManageEngine.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {/* 1. Log360 E-Book */}
          <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                ManageEngine Log360 E-Book: Getting the Best Out of Your SIEM
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Discover strategic insights on maximizing SIEM efficacy, streamlining threat detection workflows, and enhancing security log intelligence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <a
                href={LOG360_SIEM_EBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors shadow-xs w-full text-center"
              >
                Get Your Free Copy →
              </a>
            </div>
          </div>

          {/* 2. Log360 Cost Savings White Paper */}
          <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                ManageEngine Log360: How to Calculate the Cost Savings from Your SIEM Implementation White Paper
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Calculate your SIEM ROI, reduce audit compliance labor, and eliminate alert fatigue with official financial framework white papers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <a
                href={LOG360_AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors shadow-xs w-full text-center"
              >
                Get Your Free Copy →
              </a>
            </div>
          </div>

          {/* 3. ManageEngine Log360 CISO Handbook */}
          <div className="p-5 rounded-xl border border-gray-100 bg-gray-50/50 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                ManageEngine Log360: CISO Handbook Cybersecurity Metrics, Budgeting and Leadership
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Learn best practices for tracking critical security metrics, optimizing cybersecurity budgets, and leading effective security strategy across your enterprise.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200/60">
              <a
                href={CISO_HANDBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors shadow-xs w-full text-center"
              >
                Get Your Free Copy →
              </a>
            </div>
          </div>
        </div>

        <span className="text-[10px] text-gray-400 mt-4 block text-center md:text-left">
          *Note: All direct PDF resource links point to official ManageEngine landing pages to ensure proper registration access and affiliate tracking compliance.
        </span>
      </div>

      {/* Disclosures Footer */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="p-5 bg-emerald-50/40 rounded-xl border border-emerald-100/60 text-sm text-emerald-900 leading-relaxed">
          <strong className="text-gray-900 block mb-1">Affiliate & Assessment Disclosure</strong>
          This review represents our independent evaluation of ManageEngine ServiceDesk Plus based on hands-on IT operations experience—not sponsored vendor content. CareEZ IT Sol is a ManageEngine affiliate partner; if you register or purchase through affiliate links on this page, we may earn a referral commission at zero extra cost to you.
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-xs text-gray-500 leading-relaxed mt-6">
          <div>
            <h4 className="font-bold text-gray-700 uppercase tracking-wider mb-2">Who Wrote This</h4>
            <p>
              Written by the CareEZ IT Sol team, based in Toronto, with hands-on experience in helpdesk
              and incident management across government and enterprise IT environments.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 uppercase tracking-wider mb-2">Trademark Note</h4>
            <p>
              ManageEngine and ServiceDesk Plus are registered trademarks of Zoho Corporation. CareEZ IT Sol is an independent
              consultancy and service provider.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDeskPlusLanding;
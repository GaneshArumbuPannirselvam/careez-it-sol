import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import servicesImg from "../assets/ServiceDeskPlus.jpg";

function ServiceDeskPlusLanding() {
  const navigate = useNavigate();

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

      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
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

        {/* Right Column: Visuals & CTAs */}
        <div className="flex flex-col gap-6 sticky top-6">
          <img
            src={servicesImg}
            className="rounded-xl h-[300px] w-full object-cover shadow-sm bg-gray-200"
            alt="ManageEngine ServiceDesk Plus dashboard interface"
          />

          <button
            onClick={() => navigate('/contact')}
            className="w-full bg-emerald-700 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-600 transition-colors shadow-sm cursor-pointer"
          >
            Talk to Us About ITSM Setup
          </button>

          {/* Affiliate placeholder slot aligned with the human tone */}
          <div className="border-2 border-dashed border-gray-300 bg-white rounded-xl p-5 text-center flex flex-col items-center justify-center min-h-[140px]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Evaluating the Platform?
            </span>
            <p className="text-xs text-gray-500 max-w-sm leading-normal">
              We work with growing Toronto businesses to configure ticket queues, build custom portals, and structure SLAs cleanly. Drop us a line if you need a hand setting it up.
            </p>
          </div>
        </div>
      </div>

      {/* Honest trade-offs review section */}
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

      {/* Disclosures Footer */}
      <div className="mt-10 pt-8 border-t border-gray-200">
        <div className="p-5 bg-emerald-50/40 rounded-xl border border-emerald-100/60 text-sm text-emerald-900 leading-relaxed">
          <strong className="text-gray-900 block mb-1">A Note on How We Cover This</strong>
          This page is our own hands-on assessment of ServiceDesk Plus — not paid vendor content. We're
          currently in the application process for the ManageEngine affiliate program and don't have a
          commercial relationship with them yet. If that changes, any links here will say so clearly.
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
              ManageEngine and ServiceDesk Plus are trademarks of Zoho Corporation. We're an independent
              consultancy — this review isn't sponsored by or affiliated with ManageEngine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDeskPlusLanding;
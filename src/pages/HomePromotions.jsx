import React from 'react';

import sdpLeaderboard from '../assets/sdp-leaderboard.png';
import log360Banner from '../assets/log360-banner.jpeg';

function HomePromotions() {
  const SDP_AFFILIATE_LINK = "https://zurl.to/IgcH";
  const LOG360_AFFILIATE_LINK = "https://zurl.to/IgcH";

  return (
    <div className="space-y-10 my-10 max-w-6xl mx-auto px-4 text-left">
      <div className="w-full flex flex-col md:flex-row items-center gap-6">
        
        {/* ServiceDesk Plus Banner */}
        <div className="w-full md:w-1/2 flex justify-center">
          <a 
            href={SDP_AFFILIATE_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group max-w-full w-full"
          >
            <img 
              src={sdpLeaderboard} 
              alt="ManageEngine ServiceDesk Plus Official Banner" 
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm group-hover:opacity-95 transition-opacity object-cover"
            />
          </a>
        </div>

        {/* Log360 Banner */}
        <div className="w-full md:w-1/2 flex justify-center">
          <a 
            href={LOG360_AFFILIATE_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block group max-w-full w-full"
          >
            <img 
              src={log360Banner} 
              alt="ManageEngine Log360 Free Download Banner" 
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm group-hover:opacity-95 transition-opacity object-cover"
            />
          </a>
        </div>

      </div>
    </div>
  );
}

export default HomePromotions;
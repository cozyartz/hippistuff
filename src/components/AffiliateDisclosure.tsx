import React from 'react';
import { Info, Heart } from 'lucide-react';

export const AffiliateDisclosure: React.FC = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Info className="w-5 h-5 text-green-600 stroke-1 mt-0.5" />
        </div>
        <div className="flex-1">
          <h3 className="font-light text-green-800 mb-2 flex items-center gap-2">
            Sacred Transparency 
            <Heart className="w-4 h-4 stroke-1" />
          </h3>
          <p className="text-sm text-green-700 font-light leading-relaxed">
            We believe in honest, conscious commerce. Some links on this page are affiliate links, 
            meaning we may receive a small commission if you make a purchase through them. This helps 
            support our mission of spreading earth-conscious wisdom and maintaining our sacred sanctuary. 
            We only recommend products that align with our values and that we genuinely believe will 
            benefit your conscious living journey. Your support helps us continue sharing wisdom and 
            building community. 🌿
          </p>
        </div>
      </div>
    </div>
  );
};
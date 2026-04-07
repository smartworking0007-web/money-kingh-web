import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import { Typography } from "@/app/components/ui/Typography";
import { cn } from "@/app/lib/utils";

const TrustBar: React.FC = () => {
  return (
    <div className="-mt-10 w-full flex justify-center px-2 py-4">
      <div
        className={cn(
          "grid grid-cols-2 md:flex md:flex-row items-center justify-center",
          "border-2 border-[#FFC107] rounded-2xl bg-white shadow-sm",
          "p-4 md:py-3 md:px-8 w-full md:w-fit gap-y-5 gap-x-2 md:gap-0",
        )}
      >
        {/* Section 1: Trusted By */}
        <div className="-translate-y-1 flex items-center gap-2 md:gap-3 shrink-0 md:pr-6 md:border-r border-slate-100">
          <div className="bg-[#F0F4F8] p-2 rounded-full shrink-0">
            <ShieldCheck
              className="w-6 h-6 md:w-7 md:h-7 text-[#5C7285]"
              strokeWidth={2}
            />
          </div>
          <Typography
            variant="s2"
            as="p"
            className="m-0 font-bold leading-tight text-slate-900 text-[11px] md:text-sm whitespace-nowrap"
          >
            Trusted by 10K+ <br />
            Customers 90+ Branches 155+ Bank Partners
          </Typography>
        </div>

        {/* Section 2: Rating */}
        <div className="flex flex-col items-center shrink-0 md:px-8 md:border-r border-slate-100">
          <div className="flex items-baseline gap-0.5">
            <Typography
              variant="h5"
              as="span"
              className="m-0 font-bold text-slate-900 text-base md:text-xl"
            >
              4.5
            </Typography>
            <Typography
              variant="caption"
              as="span"
              className="m-0 text-[10px] md:text-xs text-slate-400"
            >
              /5
            </Typography>
          </div>
          <div className="flex text-[#FFC107] -mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3 md:w-3.5 md:h-3.5 fill-current",
                  i === 4 && "opacity-30",
                )}
              />
            ))}
          </div>
        </div>

        {/* Section 3: Happy Customers */}
        <div className="flex flex-col items-center shrink-0 md:px-8 md:border-r border-slate-100">
          <Typography
            variant="h5"
            as="span"
            className="m-0 font-bold text-slate-900 text-base md:text-xl leading-none"
          >
            1K+
          </Typography>
          <Typography
            variant="b3"
            as="span"
            className="m-0 italic text-slate-500 font-light text-[10px] md:text-xs whitespace-nowrap"
          >
            Happy Customers
          </Typography>
        </div>

        {/* Section 4: Banks */}
        <div className="flex flex-col items-center shrink-0 md:px-8">
          <Typography
            variant="h5"
            as="span"
            className="m-0 font-bold text-slate-900 text-base md:text-xl leading-none"
          >
            30+
          </Typography>
          <Typography
            variant="b3"
            as="span"
            className="m-0 italic text-slate-500 font-light text-[10px] md:text-xs whitespace-nowrap"
          >
            Banks
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
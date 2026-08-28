import React from "react";

const ReferralSystem: React.FC = () => {
  return (
    <section className="px-6 py-[110px] lg:px-8">
      <div className="mx-auto grid max-w-[1160px] items-center gap-[60px] md:grid-cols-[1.1fr_0.9fr]">
       
        <div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
           
            Referral System
          </span>

          <h2 className="mt-[14px] text-[clamp(1.9rem,3.2vw,2.4rem)] font-semibold leading-tight text-[#0e1b30]">
            Introduce a Friend,{" "}
            <em className="font-serif text-[#b8892f]">
              Grow Together
            </em>
          </h2>

          <p className="mt-4 text-[0.98rem] leading-7 text-[#5b6472]">
            Existing customers can refer friends, relatives and people they
            know to Yes Time Global's programs each customer gets a unique
            referral number to share.
          </p>

          <p className="mt-4 text-[0.98rem] leading-7 text-[#5b6472]">
            When a new customer joins a program through your referral, it's
            recorded against your account. Depending on the program's
            eligibility rules, both you and the new customer may receive a
            related benefit.
          </p>

          <p className="mt-[18px] border-l-2 border-[#b8892f] pl-[14px] text-[0.82rem] italic leading-6 text-[#8a92a0]">
            Referral benefit is only given once the referral program's set
            terms are fully met, and does not guarantee any reward. The company
            may cancel any referral found to be fake or improperly obtained.
          </p>
        </div>

   
        <div className="mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full border border-[#e7e3da] bg-[#f8f6f1]">
          <img
            src="https://images.pexels.com/photos/7144207/pexels-photo-7144207.jpeg?cs=srgb&w=500&h=500&fit=crop"
            alt="Referring a friend to Yes Time Global"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ReferralSystem;
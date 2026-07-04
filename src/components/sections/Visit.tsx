import { InfoRow } from "../common/InfoRow";

export function Visit() {
  return (
    <section id="contact" className="relative">
      <div className="bg-rose pt-20 pb-32 lg:pt-28 lg:pb-44">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="font-script text-2xl text-cream/90">visit</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream mt-2">
            Find us in Dilsukhnagar.
          </h2>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 -mt-24 lg:-mt-32 relative">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="bg-cream p-8 sm:p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] space-y-7">
            <InfoRow icon="pin" title="Address">
              16-11-578/A, Opposite Red Cross Hospital,
              <br />
              Near Raghavendra Hotel, Gaddiannaram Cross Road,
              <br />
              Dilsukhnagar, Hyderabad – 500060
            </InfoRow>
            <InfoRow icon="phone" title="Phone">
              +91 8985504044
            </InfoRow>
            <InfoRow icon="instagram" title="Instagram">
              @hyderabadi.derma.docs
            </InfoRow>
            <InfoRow icon="clock" title="Hours">
              Mon – Sat · 6:30 PM – 9:30 PM
              <br />
              Sunday · 10:00 AM – 2:00 PM
              <br />
              <span className="text-ink/50 text-xs">Appointments only</span>
            </InfoRow>
          </div>
          <div className="bg-cream shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] overflow-hidden min-h-[360px]">
            <iframe
              title="Clinic location"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Dilsukhnagar%20Hyderabad&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

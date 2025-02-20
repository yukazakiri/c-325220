import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle2, ShieldCheck } from "lucide-react";

const Download = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Download Our App Today!
        </h2>
        <p className="text-lg text-white/70 mb-8">
          Experience the future of productivity and collaboration. Available on
          all major platforms.
        </p>

        {/* Download Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            <ArrowDownToLine className="mr-2 w-5 h-5" />
            Download for iOS
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
            <ArrowDownToLine className="mr-2 w-5 h-5" />
            Download for Android
          </Button>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Cross-Platform Sync
              </h3>
            </div>
            <p className="text-white/60">
              Seamlessly sync your data across all your devices.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Secure & Private
              </h3>
            </div>
            <p className="text-white/60">
              Your data is encrypted and stored securely.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover-lift">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Offline Access
              </h3>
            </div>
            <p className="text-white/60">
              Access your important data even without an internet connection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;

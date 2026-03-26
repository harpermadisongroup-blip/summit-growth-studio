import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const publishers = [
  "Amazon Ads",
  "Walmart Connect",
  "Google Ads",
  "YouTube Ads",
  "Microsoft Ads",
  "Meta (Facebook/Instagram)",
  "TikTok Ads",
  "Snapchat Ads",
  "Pinterest Ads",
  "LinkedIn Ads",
  "Instacart Ads",
  "Criteo",
  "Target Roundel",
  "Other RMNs",
];

const PublisherMultiSelect = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (pub: string) => {
    setSelected((prev) =>
      prev.includes(pub) ? prev.filter((p) => p !== pub) : [...prev, pub]
    );
  };

  return (
    <div className="space-y-3">
      <Label>Which publishers are you actively advertising on?</Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {publishers.map((pub) => {
          const isSelected = selected.includes(pub);
          return (
            <button
              key={pub}
              type="button"
              onClick={() => toggle(pub)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-body-sm font-medium transition-all border text-left ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <div
                className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center transition-colors ${
                  isSelected
                    ? "bg-primary-foreground/20"
                    : "border border-border"
                }`}
              >
                {isSelected && <Check className="w-3 h-3" />}
              </div>
              <span className="truncate">{pub}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PublisherMultiSelect;

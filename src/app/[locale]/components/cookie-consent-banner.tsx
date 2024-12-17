"use client";

import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { Button } from "@/components/ui/button";

interface CookieConsentBannerProps {
  text: string;
  acceptButtonText: string;
  rejectButtonText: string;
}

const CookieConsentBanner = ({
  text,
  acceptButtonText,
  rejectButtonText,
}: CookieConsentBannerProps) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sticky bottom-4 z-60 container print:hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 p-4 rounded-lg bg-foreground/20 backdrop-blur text-center md:text-left">
        <p>{text}</p>
        <div className="flex w-full md:w-auto justify-between flex-row gap-2">
          <Button onClick={handleAccept} className="w-full md:w-auto">
            {acceptButtonText}
          </Button>
          <Button
            variant="outline"
            onClick={handleReject}
            className="w-full md:w-auto"
          >
            {rejectButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;

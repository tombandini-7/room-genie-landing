interface GtagEventParams {
  [key: string]: string | number | boolean | undefined;
}

interface Window {
  gtag?: (
    command: "config" | "event" | "js" | "set",
    targetOrAction: string | Date,
    params?: GtagEventParams
  ) => void;
  dataLayer?: Array<unknown>;
}

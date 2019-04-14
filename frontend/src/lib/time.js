import ago from "s-ago";

export const fromEpoch = s => {
  const d = new Date(0);
  d.setUTCSeconds(s);
  return d;
};

export const agoFromString = s => ago(new Date(s));

import ago from "s-ago";

export const agoFromString = s => ago(new Date(s));

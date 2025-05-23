import { getHealthTip } from "@/lib/api-caller";
import { unstable_cache } from "next/cache";
import HealthTipsClient from "./health-tips-client";

const getCachedTip = unstable_cache(
  async (tipId: string) => await getHealthTip(tipId),
  ["health-tips"]
);

const HealthTips = async () => {
  const initialTip = await getCachedTip("0").catch(() => null);

  return <HealthTipsClient initialTip={initialTip} />;
};

export default HealthTips;

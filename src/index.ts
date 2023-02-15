import {
  postOutletV1GetAllOutlets,
  postStockLocationV1GetAllStockLocations,
} from "./bmapi/services.js";
import { TENANT_ID } from "./auth.js";

const printGroupedOutletsByStockLocation = async () => {
  const [outlets, stockLocations] = await Promise.all([
    postOutletV1GetAllOutlets({
      tenantId: TENANT_ID,
    }).then((res) => res.data.outlets),

    postStockLocationV1GetAllStockLocations({
      tenantId: TENANT_ID,
    }).then((res) => res.data.stockLocations),
  ]);

  stockLocations?.forEach((stockLocation) => {
    console.log(stockLocation.name);
    console.log(
      outlets
        ?.filter((outlet) => outlet.stockLocationId === stockLocation.id)
        .map((outlet) => outlet.displayName)
    );
  });
};

printGroupedOutletsByStockLocation();

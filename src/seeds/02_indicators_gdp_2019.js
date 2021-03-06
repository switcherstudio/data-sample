const INSERT_BATCH_SIZE = 50;

exports.seed = async function (knex) {
  await knex.raw(`delete from indicators where indicator_id = 'NY.GDP.MKTP.CD' and date = '2019'`);
  await knex.batchInsert('indicators', [
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARB", "date": "2019", "value": 2815410447182.25 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CSS", "date": "2019", "value": 76290373254.4853 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CEB", "date": "2019", "value": 1656928913107.65 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAR", "date": "2019", "value": 11981574482646.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAS", "date": "2019", "value": 26979805534122.7 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAP", "date": "2019", "value": 17214358920071.6 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TEA", "date": "2019", "value": 17181503825380.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EMU", "date": "2019", "value": 13335843259019.7 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECS", "date": "2019", "value": 22748788538189.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECA", "date": "2019", "value": 3239459350297.98 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TEC", "date": "2019", "value": 4142093595765.05 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EUU", "date": "2019", "value": 15592795166700.2 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FCS", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HPC", "date": "2019", "value": 759266600603.65 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2019", "value": 55098717125559.6 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IBD", "date": "2019", "value": 31618204428931.7 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IBT", "date": "2019", "value": 33912132433932.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDB", "date": "2019", "value": 989721112790.581 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDX", "date": "2019", "value": 1315248865134.09 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDA", "date": "2019", "value": 2301372398524.79 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LTE", "date": "2019", "value": 22985816197741.2 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LCN", "date": "2019", "value": 5719252824663.02 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LAC", "date": "2019", "value": 5136327518155.87 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TLA", "date": "2019", "value": 5474751287356.85 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LDC", "date": "2019", "value": 1105397168763.63 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LMY", "date": "2019", "value": 32705773165069.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2019", "value": 521273843020.466 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2019", "value": 6341105055559.54 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MEA", "date": "2019", "value": 3701386017855.84 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNA", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TMN", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MIC", "date": "2019", "value": 32165979692375.4 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NAC", "date": "2019", "value": 23171055090594.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OED", "date": "2019", "value": 53634550008082.1 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OSS", "date": "2019", "value": 438468157980.326 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PSS", "date": "2019", "value": 10456001896.8144 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PST", "date": "2019", "value": 50724555756931.5 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRE", "date": "2019", "value": 1391261013601.99 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SST", "date": "2019", "value": 525221276646.776 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SAS", "date": "2019", "value": 3597970348647.58 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TSA", "date": "2019", "value": 3597970348647.58 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSF", "date": "2019", "value": 1755011419750.84 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSA", "date": "2019", "value": 1739115379284.58 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TSS", "date": "2019", "value": 1755011419750.84 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2019", "value": 25817130358727.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "WLD", "date": "2019", "value": 87751540848579.4 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AFG", "date": "2019", "value": 19101353832.7371 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ALB", "date": "2019", "value": 15278077446.8643 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DZA", "date": "2019", "value": 169988236398.126 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ASM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AND", "date": "2019", "value": 3154057987.23833 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AGO", "date": "2019", "value": 94635415869.9851 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ATG", "date": "2019", "value": 1727759259.25926 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARG", "date": "2019", "value": 449663446954.073 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARM", "date": "2019", "value": 13672802157.8324 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ABW", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AUS", "date": "2019", "value": 1392680589329.14 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AUT", "date": "2019", "value": 446314739528.47 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AZE", "date": "2019", "value": 48047647058.8235 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BHS", "date": "2019", "value": 12827000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BHR", "date": "2019", "value": 38574069148.9362 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BGD", "date": "2019", "value": 302571254131.135 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRB", "date": "2019", "value": 5209000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BLR", "date": "2019", "value": 63080457022.6599 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BEL", "date": "2019", "value": 529606710418.038 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BLZ", "date": "2019", "value": 1879613600 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BEN", "date": "2019", "value": 14390709094.9386 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BMU", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BTN", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BOL", "date": "2019", "value": 40895322865.4124 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BIH", "date": "2019", "value": 20047848434.5487 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BWA", "date": "2019", "value": 18340510789.4272 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRA", "date": "2019", "value": 1839758040765.62 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VGB", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRN", "date": "2019", "value": 13469422941.3919 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BGR", "date": "2019", "value": 67927179736.6915 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BFA", "date": "2019", "value": 15745810234.6602 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BDI", "date": "2019", "value": 3012334881.64057 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CPV", "date": "2019", "value": 1981845740.70615 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KHM", "date": "2019", "value": 27089389786.9684 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CMR", "date": "2019", "value": 38760467033.389 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CAN", "date": "2019", "value": 1736425629519.96 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CYM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CAF", "date": "2019", "value": 2220307368.69593 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TCD", "date": "2019", "value": 11314951342.7807 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHI", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHL", "date": "2019", "value": 282318159744.65 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHN", "date": "2019", "value": 14342902842915.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COL", "date": "2019", "value": 323802808108.246 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COM", "date": "2019", "value": 1185728676.65112 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COD", "date": "2019", "value": 47319624204.0938 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COG", "date": "2019", "value": 10820591130.7349 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CRI", "date": "2019", "value": 61773944173.6736 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CIV", "date": "2019", "value": 58792205642.1538 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HRV", "date": "2019", "value": 60415553038.8826 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CUB", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CUW", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CYP", "date": "2019", "value": 24564647934.6244 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CZE", "date": "2019", "value": 246489245494.882 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DNK", "date": "2019", "value": 348078018463.905 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DJI", "date": "2019", "value": 3318716359.44182 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DMA", "date": "2019", "value": 596033333.333333 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DOM", "date": "2019", "value": 88941298257.7215 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECU", "date": "2019", "value": 107435665000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EGY", "date": "2019", "value": 303175127597.521 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLV", "date": "2019", "value": 27022640000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GNQ", "date": "2019", "value": 11026774945.3415 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ERI", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EST", "date": "2019", "value": 31386949981.236 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SWZ", "date": "2019", "value": 4405405802.44294 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ETH", "date": "2019", "value": 96107662398.1749 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FRO", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FJI", "date": "2019", "value": 5535548972.41252 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FIN", "date": "2019", "value": 268761201364.705 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FRA", "date": "2019", "value": 2715518274227.45 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PYF", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GAB", "date": "2019", "value": 16657960228.0892 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GMB", "date": "2019", "value": 1763819047.69838 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GEO", "date": "2019", "value": 17743195770.1998 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DEU", "date": "2019", "value": 3845630030823.52 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GHA", "date": "2019", "value": 66983634223.943 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GIB", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRC", "date": "2019", "value": 209852761468.681 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRL", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRD", "date": "2019", "value": 1228170370.37037 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GUM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GTM", "date": "2019", "value": 76710385879.6627 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GIN", "date": "2019", "value": 13590281808.6928 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GNB", "date": "2019", "value": 1340389410.76003 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GUY", "date": "2019", "value": 4280443645.08393 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HTI", "date": "2019", "value": 8498981820.87012 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HND", "date": "2019", "value": 25095395475.0393 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HKG", "date": "2019", "value": 366029556273.051 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HUN", "date": "2019", "value": 160967157503.612 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ISL", "date": "2019", "value": 24188035738.7846 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IND", "date": "2019", "value": 2875142314811.85 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDN", "date": "2019", "value": 1119190780752.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRN", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRQ", "date": "2019", "value": 234094042938.917 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRL", "date": "2019", "value": 388698711348.156 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IMN", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ISR", "date": "2019", "value": 395098666121.616 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ITA", "date": "2019", "value": 2001244392041.57 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JAM", "date": "2019", "value": 16458071067.8176 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JPN", "date": "2019", "value": 5081769542379.77 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JOR", "date": "2019", "value": 43743661971.831 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KAZ", "date": "2019", "value": 180161741180.147 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KEN", "date": "2019", "value": 95503088538.092 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KIR", "date": "2019", "value": 194647201.946472 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRK", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KOR", "date": "2019", "value": 1642383217167.26 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "XKX", "date": "2019", "value": 7926108374.38424 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KWT", "date": "2019", "value": 134761198945.982 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KGZ", "date": "2019", "value": 8454619607.81795 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LAO", "date": "2019", "value": 18173839128.2699 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LVA", "date": "2019", "value": 34117202555.0666 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBN", "date": "2019", "value": 53367042272.1725 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LSO", "date": "2019", "value": 2460072443.62842 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBR", "date": "2019", "value": 3070518100 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBY", "date": "2019", "value": 52076250947.5792 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LIE", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LTU", "date": "2019", "value": 54219315600.0854 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LUX", "date": "2019", "value": 71104919108.1411 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAC", "date": "2019", "value": 53859116535.5306 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDG", "date": "2019", "value": 14083906356.618 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MWI", "date": "2019", "value": 7666704427.00915 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MYS", "date": "2019", "value": 364701517787.844 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDV", "date": "2019", "value": 5729248472.24028 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MLI", "date": "2019", "value": 17510141171.3403 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MLT", "date": "2019", "value": 14786156563.3046 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MHL", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MRT", "date": "2019", "value": 7593752450.2055 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MUS", "date": "2019", "value": 14180444557.2047 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MEX", "date": "2019", "value": 1258286717124.53 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FSM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDA", "date": "2019", "value": 11955435456.7957 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MCO", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNG", "date": "2019", "value": 13852850259.4854 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNE", "date": "2019", "value": 5494736901.03 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAR", "date": "2019", "value": 118725279596.13 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MOZ", "date": "2019", "value": 14934159925.5234 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MMR", "date": "2019", "value": 76085852617.1371 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NAM", "date": "2019", "value": 12366527719.3322 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NRU", "date": "2019", "value": 118223430.124446 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NPL", "date": "2019", "value": 30641380604.2984 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NLD", "date": "2019", "value": 909070395160.783 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NCL", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NZL", "date": "2019", "value": 206928765543.935 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NIC", "date": "2019", "value": 12520915291.1837 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NER", "date": "2019", "value": 12928145120.0296 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NGA", "date": "2019", "value": 448120428858.769 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MKD", "date": "2019", "value": 12694823394.0947 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNP", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NOR", "date": "2019", "value": 403336363636.364 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OMN", "date": "2019", "value": 76983094928.4785 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PAK", "date": "2019", "value": 278221906022.841 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PLW", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PAN", "date": "2019", "value": 66800800000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PNG", "date": "2019", "value": 24969611434.7684 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRY", "date": "2019", "value": 38145288939.8488 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PER", "date": "2019", "value": 226848050819.525 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PHL", "date": "2019", "value": 376795508679.676 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "POL", "date": "2019", "value": 592164400687.607 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRT", "date": "2019", "value": 237686075634.698 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRI", "date": "2019", "value": 104988600000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "QAT", "date": "2019", "value": 183466208791.209 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ROU", "date": "2019", "value": 250077444017.084 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "RUS", "date": "2019", "value": 1699876578871.35 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "RWA", "date": "2019", "value": 10122472590.172 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "WSM", "date": "2019", "value": 850655017.220488 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SMR", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "STP", "date": "2019", "value": 429016605.208205 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SAU", "date": "2019", "value": 792966838161.659 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SEN", "date": "2019", "value": 23578084052.0147 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SRB", "date": "2019", "value": 51409167350.7548 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SYC", "date": "2019", "value": 1698843062.76141 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLE", "date": "2019", "value": 3941474310.76913 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SGP", "date": "2019", "value": 372062527488.638 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SXM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SVK", "date": "2019", "value": 105422304975.576 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SVN", "date": "2019", "value": 53742159516.9278 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLB", "date": "2019", "value": 1425074225.77798 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SOM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZAF", "date": "2019", "value": 351431649241.439 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSD", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ESP", "date": "2019", "value": 1394116310768.63 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LKA", "date": "2019", "value": 84008783756.068 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KNA", "date": "2019", "value": 1050992592.59259 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LCA", "date": "2019", "value": 2122450629.62963 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAF", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VCT", "date": "2019", "value": 825385185.185185 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SDN", "date": "2019", "value": 18902284475.6054 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SUR", "date": "2019", "value": 3985250737.46313 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SWE", "date": "2019", "value": 530832908737.862 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHE", "date": "2019", "value": 703082435360.117 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SYR", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TJK", "date": "2019", "value": 8116626794.25837 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TZA", "date": "2019", "value": 63177068174.549 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "THA", "date": "2019", "value": 543649976165.63 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TLS", "date": "2019", "value": 1673540300 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TGO", "date": "2019", "value": 5459979416.66908 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TON", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TTO", "date": "2019", "value": 24100202833.7504 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUN", "date": "2019", "value": 38797709923.6641 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUR", "date": "2019", "value": 754411708202.616 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TKM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TCA", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUV", "date": "2019", "value": 47271463.3298575 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UGA", "date": "2019", "value": 34387229486.4008 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UKR", "date": "2019", "value": 153781069118.148 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARE", "date": "2019", "value": 421142267937.65 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GBR", "date": "2019", "value": 2827113184695.58 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "USA", "date": "2019", "value": 21427700000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "URY", "date": "2019", "value": 56045912952.342 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UZB", "date": "2019", "value": 57921286440.3495 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VUT", "date": "2019", "value": 917058850.816563 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VEN", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VNM", "date": "2019", "value": 261921244843.172 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VIR", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PSE", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "YEM", "date": "2019", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZMB", "date": "2019", "value": 23064722446.3513 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZWE", "date": "2019", "value": 21440758800 }
  ], INSERT_BATCH_SIZE);
};

const INSERT_BATCH_SIZE = 50;

exports.seed = async function (knex) {
  await knex.raw(`delete from indicators where indicator_id = 'NY.GDP.MKTP.CD' and date = '2017'`);
  await knex.batchInsert('indicators', [
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARB", "date": "2017", "value": 2513494434830.3 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CSS", "date": "2017", "value": 69913144887.4144 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CEB", "date": "2017", "value": 1458696736645.45 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAR", "date": "2017", "value": 11377092504041.2 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAS", "date": "2017", "value": 24223285701971.4 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EAP", "date": "2017", "value": 14835611946612.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TEA", "date": "2017", "value": 14807303641278 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EMU", "date": "2017", "value": 12655504662573.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECS", "date": "2017", "value": 21581860912437 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECA", "date": "2017", "value": 3108431403073.36 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TEC", "date": "2017", "value": 3901827241973.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EUU", "date": "2017", "value": 14735710571465.3 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FCS", "date": "2017", "value": 1517591275154.62 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HPC", "date": "2017", "value": 705521452844.014 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2017", "value": 51416068828736.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IBD", "date": "2017", "value": 28851320771455 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IBT", "date": "2017", "value": 30941555943939.8 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDB", "date": "2017", "value": 920435301795.34 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDX", "date": "2017", "value": 1177370035220.26 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDA", "date": "2017", "value": 2096707795621.73 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LTE", "date": "2017", "value": 20551045153102.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LCN", "date": "2017", "value": 5985647360814.57 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LAC", "date": "2017", "value": 5416130983383.76 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TLA", "date": "2017", "value": 5745984224045.25 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LDC", "date": "2017", "value": 1027031212048.55 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LMY", "date": "2017", "value": 29845120321213.1 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2017", "value": 494892781230.879 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2017", "value": 5761733418445.18 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MEA", "date": "2017", "value": 3270329262072.42 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNA", "date": "2017", "value": 1428592790217.68 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TMN", "date": "2017", "value": 1413870262588.08 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MIC", "date": "2017", "value": 29337418670054.4 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NAC", "date": "2017", "value": 21141594444340.1 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OED", "date": "2017", "value": 50257605239562 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OSS", "date": "2017", "value": 404126868252.702 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PSS", "date": "2017", "value": 10008508092.0496 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PST", "date": "2017", "value": 47415034220935.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRE", "date": "2017", "value": 1265557357216.69 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SST", "date": "2017", "value": 484048521232.165 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SAS", "date": "2017", "value": 3347019816218.73 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TSA", "date": "2017", "value": 3347019816218.73 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSF", "date": "2017", "value": 1639171578758.92 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSA", "date": "2017", "value": 1624372548153.57 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TSS", "date": "2017", "value": 1639171578758.92 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "", "date": "2017", "value": 23570009724735.5 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "WLD", "date": "2017", "value": 81229182706392.5 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AFG", "date": "2017", "value": 20191760000.0587 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ALB", "date": "2017", "value": 13019693450.8816 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DZA", "date": "2017", "value": 167389364980.671 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ASM", "date": "2017", "value": 602000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AND", "date": "2017", "value": 3000180750.11297 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AGO", "date": "2017", "value": 122123822333.591 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ATG", "date": "2017", "value": 1467977777.77778 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARG", "date": "2017", "value": 642695864756.35 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARM", "date": "2017", "value": 11527458565.7334 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ABW", "date": "2017", "value": 3056424581.00559 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AUS", "date": "2017", "value": 1330135756844.41 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AUT", "date": "2017", "value": 418316161095.683 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "AZE", "date": "2017", "value": 40865558912.3867 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BHS", "date": "2017", "value": 12150400000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BHR", "date": "2017", "value": 35423643617.0213 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BGD", "date": "2017", "value": 249711052937.012 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRB", "date": "2017", "value": 4978000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BLR", "date": "2017", "value": 54726595249.1849 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BEL", "date": "2017", "value": 503788776542.824 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BLZ", "date": "2017", "value": 1836600000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BEN", "date": "2017", "value": 12701656930.6889 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BMU", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BTN", "date": "2017", "value": 2450364928.07302 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BOL", "date": "2017", "value": 37508642112.8799 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BIH", "date": "2017", "value": 18080118128.3854 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BWA", "date": "2017", "value": 17405538618.3969 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRA", "date": "2017", "value": 2062831045935.95 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VGB", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BRN", "date": "2017", "value": 12128104859.1498 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BGR", "date": "2017", "value": 58950125036.0127 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BFA", "date": "2017", "value": 14169905602.3981 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "BDI", "date": "2017", "value": 3172292379.36329 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CPV", "date": "2017", "value": 1769787215.42141 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KHM", "date": "2017", "value": 22177200511.5811 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CMR", "date": "2017", "value": 35009262788.15 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CAN", "date": "2017", "value": 1649878054226.82 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CYM", "date": "2017", "value": 5141833913.35653 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CAF", "date": "2017", "value": 2072350151.13061 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TCD", "date": "2017", "value": 10000395242.1457 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHI", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHL", "date": "2017", "value": 277044950259.009 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHN", "date": "2017", "value": 12310408652423.5 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COL", "date": "2017", "value": 311883730442.045 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COM", "date": "2017", "value": 1077439662.5798 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COD", "date": "2017", "value": 38019265625.8845 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "COG", "date": "2017", "value": 9035182061.96536 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CRI", "date": "2017", "value": 58481858042.5721 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CIV", "date": "2017", "value": 51588158717.5348 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HRV", "date": "2017", "value": 55319605060.5393 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CUB", "date": "2017", "value": 96851000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CUW", "date": "2017", "value": 3116610111.73184 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CYP", "date": "2017", "value": 22638608224.1301 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CZE", "date": "2017", "value": 215913545038.43 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DNK", "date": "2017", "value": 329417067127.817 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DJI", "date": "2017", "value": 2751461055.59307 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DMA", "date": "2017", "value": 519837037.037037 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DOM", "date": "2017", "value": 79997975621.8654 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ECU", "date": "2017", "value": 104295862000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EGY", "date": "2017", "value": 235369129337.711 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLV", "date": "2017", "value": 24979200000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GNQ", "date": "2017", "value": 12200914929.5961 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ERI", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "EST", "date": "2017", "value": 26859101053.8139 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SWZ", "date": "2017", "value": 4446248676.29633 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ETH", "date": "2017", "value": 81770791970.982 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FRO", "date": "2017", "value": 2833300519.46872 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FJI", "date": "2017", "value": 5353404422.08138 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FIN", "date": "2017", "value": 255122545770.778 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FRA", "date": "2017", "value": 2595151045197.65 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PYF", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GAB", "date": "2017", "value": 14929488770.7315 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GMB", "date": "2017", "value": 1498044491.4304 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GEO", "date": "2017", "value": 16242916915.7203 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "DEU", "date": "2017", "value": 3665804120835.3 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GHA", "date": "2017", "value": 58998132329.6173 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GIB", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRC", "date": "2017", "value": 203588424288.428 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRL", "date": "2017", "value": 2826651925.66902 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GRD", "date": "2017", "value": 1125685185.18519 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GUM", "date": "2017", "value": 5851000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GTM", "date": "2017", "value": 71612352781.0667 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GIN", "date": "2017", "value": 10336634798.7593 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GNB", "date": "2017", "value": 1346841897.00437 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GUY", "date": "2017", "value": 3555205811.13802 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HTI", "date": "2017", "value": 8409497402.4589 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HND", "date": "2017", "value": 23136232229.6069 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HKG", "date": "2017", "value": 341244161576.759 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "HUN", "date": "2017", "value": 141510583019.556 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ISL", "date": "2017", "value": 24488176539.6549 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IND", "date": "2017", "value": 2652754685834.59 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IDN", "date": "2017", "value": 1015618742565.81 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRN", "date": "2017", "value": 445345282122.682 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRQ", "date": "2017", "value": 195473049875.127 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IRL", "date": "2017", "value": 335663113959.724 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "IMN", "date": "2017", "value": 6770532818.53282 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ISR", "date": "2017", "value": 353253406954.97 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ITA", "date": "2017", "value": 1961796197354.36 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JAM", "date": "2017", "value": 14806340821.0871 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JPN", "date": "2017", "value": 4866864409657.68 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "JOR", "date": "2017", "value": 40708943661.9718 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KAZ", "date": "2017", "value": 166805800595.704 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KEN", "date": "2017", "value": 78965004656.1823 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KIR", "date": "2017", "value": 187276210.91355 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRK", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KOR", "date": "2017", "value": 1623901496835.79 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "XKX", "date": "2017", "value": 7245707184.81699 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KWT", "date": "2017", "value": 120707220573.689 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KGZ", "date": "2017", "value": 7702934800.12836 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LAO", "date": "2017", "value": 16853087485.4118 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LVA", "date": "2017", "value": 30273007510.3024 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBN", "date": "2017", "value": 53140638269.1211 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LSO", "date": "2017", "value": 2405289382.35938 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBR", "date": "2017", "value": 3285455000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LBY", "date": "2017", "value": 37883243650.452 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LIE", "date": "2017", "value": 6552858738.70214 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LTU", "date": "2017", "value": 47750908128.259 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LUX", "date": "2017", "value": 64181944722.7283 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAC", "date": "2017", "value": 50751059058.0613 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDG", "date": "2017", "value": 13176313233.1978 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MWI", "date": "2017", "value": 6303292264.18905 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MYS", "date": "2017", "value": 318958236443.122 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDV", "date": "2017", "value": 4735989972.05433 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MLI", "date": "2017", "value": 15375605991.6302 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MLT", "date": "2017", "value": 12747857570.0407 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MHL", "date": "2017", "value": 212881000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MRT", "date": "2017", "value": 6758390728.71734 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MUS", "date": "2017", "value": 13259351418.4459 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MEX", "date": "2017", "value": 1157736189998.15 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "FSM", "date": "2017", "value": 366666800 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MDA", "date": "2017", "value": 9669759987.02633 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MCO", "date": "2017", "value": 6431314957.07185 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNG", "date": "2017", "value": 11425755279.5254 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNE", "date": "2017", "value": 4856632399.45775 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAR", "date": "2017", "value": 109714300453.983 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MOZ", "date": "2017", "value": 13219084261.3664 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MMR", "date": "2017", "value": 68945867477.6054 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NAM", "date": "2017", "value": 12741746433.6716 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NRU", "date": "2017", "value": 109585941.624557 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NPL", "date": "2017", "value": 25180583770.2719 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NLD", "date": "2017", "value": 833869641687.06 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NCL", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NZL", "date": "2017", "value": 205415864857.984 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NIC", "date": "2017", "value": 13785943183.0661 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NER", "date": "2017", "value": 11166063886.8555 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NGA", "date": "2017", "value": 375745486520.656 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MKD", "date": "2017", "value": 11307058382.3435 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MNP", "date": "2017", "value": 1601000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "NOR", "date": "2017", "value": 398393955268.99 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "OMN", "date": "2017", "value": 70600000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PAK", "date": "2017", "value": 304567253219.097 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PLW", "date": "2017", "value": 286321800 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PAN", "date": "2017", "value": 62219000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PNG", "date": "2017", "value": 22742613553.6879 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRY", "date": "2017", "value": 39008900331.6733 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PER", "date": "2017", "value": 211007207483.515 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PHL", "date": "2017", "value": 328480738147.729 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "POL", "date": "2017", "value": 526380811261.345 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRT", "date": "2017", "value": 221357874718.93 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PRI", "date": "2017", "value": 103445500000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "QAT", "date": "2017", "value": 166928571428.571 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ROU", "date": "2017", "value": 211695422578.655 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "RUS", "date": "2017", "value": 1574199387070.9 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "RWA", "date": "2017", "value": 9253098954.27769 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "WSM", "date": "2017", "value": 831903809.749172 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SMR", "date": "2017", "value": 1528468142.79259 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "STP", "date": "2017", "value": 375040835.10034 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SAU", "date": "2017", "value": 688586133333.333 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SEN", "date": "2017", "value": 20996564751.5994 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SRB", "date": "2017", "value": 44120425319.8576 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SYC", "date": "2017", "value": 1524486801.19044 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLE", "date": "2017", "value": 3739577973.23943 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SGP", "date": "2017", "value": 341863349989.138 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SXM", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SVK", "date": "2017", "value": 95481955557.6908 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SVN", "date": "2017", "value": 48561672400.8437 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SLB", "date": "2017", "value": 1309631133.19979 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SOM", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZAF", "date": "2017", "value": 349554116683.818 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SSD", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ESP", "date": "2017", "value": 1312551705955.3 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LKA", "date": "2017", "value": 87428125557.573 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "KNA", "date": "2017", "value": 996937037.037037 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "LCA", "date": "2017", "value": 1999090407.40741 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "MAF", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VCT", "date": "2017", "value": 792177777.777778 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SDN", "date": "2017", "value": 45379127306.436 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SUR", "date": "2017", "value": 3210064505.78949 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SWE", "date": "2017", "value": 541018749769.097 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "CHE", "date": "2017", "value": 679950482029.061 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "SYR", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TJK", "date": "2017", "value": 7157865188.25222 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TZA", "date": "2017", "value": 53320625958.5628 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "THA", "date": "2017", "value": 456294704152.647 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TLS", "date": "2017", "value": 1609669330.12439 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TGO", "date": "2017", "value": 4819949975.18151 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TON", "date": "2017", "value": 430174168.740104 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TTO", "date": "2017", "value": 22474828527.1775 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUN", "date": "2017", "value": 39802430354.6334 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUR", "date": "2017", "value": 852676779693.539 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TKM", "date": "2017", "value": 37926285714.2857 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TCA", "date": "2017", "value": 962525840 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "TUV", "date": "2017", "value": 40619251.9926426 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UGA", "date": "2017", "value": 30756466548.0543 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UKR", "date": "2017", "value": 112190355158.178 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ARE", "date": "2017", "value": 385605506854.881 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "GBR", "date": "2017", "value": 2666229179958.01 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "USA", "date": "2017", "value": 19485393853000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "URY", "date": "2017", "value": 59530088536.2179 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "UZB", "date": "2017", "value": 59159945320.5667 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VUT", "date": "2017", "value": 880043553.748442 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VEN", "date": "2017", "value": null },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VNM", "date": "2017", "value": 223779865815.183 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "VIR", "date": "2017", "value": 3855000000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "PSE", "date": "2017", "value": 14498100000 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "YEM", "date": "2017", "value": 24561327989.312 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZMB", "date": "2017", "value": 25868142076.7897 },
    { "indicator_id": "NY.GDP.MKTP.CD", "countryiso3code": "ZWE", "date": "2017", "value": 22040902300 }
  ], INSERT_BATCH_SIZE);
};

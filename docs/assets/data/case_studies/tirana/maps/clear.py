import json

with open("CasStudy003_Tirane_RrugaDibres.geojson", encoding="utf-8") as f:
     data = json.load(f)

for ftr in data["features"]:
    if ftr["properties"] is None:
        ftr["properties"] = {}

with open("fixed.geojson", "w", encoding="utf-8") as f:
    json.dump(data, f)
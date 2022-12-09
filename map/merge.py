import json


a = open('./bael.json')
b = open('./genabackis.json')
c = open('./genostel.json')
d = open('./jacuruku.json')
e = open('./lether.json')
f = open('./quon_tali.json')
g = open('./seven_cities.json')
h = open('./stratem.json')

aa = json.load(a)
bb = json.load(b)
cc = json.load(c)
dd = json.load(d)
ee = json.load(e)
ff = json.load(f)
gg = json.load(g)
hh = json.load(h)

merged_data = {
    "5": {
        "1": [],
        "11": [],
        "12": []
    },
    "8": {
        "2": []
    },
    "6": {
        "2": []
    },
    "4": {
        "3": []
    },
    "7": {
        "4": []
    },
    "9": {
        "2": []
    },
    "1": {
        "2": []
    },
    "10": {
        "2": []
    },
    "3": {
        "2": []
    },
    "2": {
        "2": []
    }
}

for i in merged_data:
    
    for ii in merged_data[i]:
        if (i in aa):
            if (ii in aa[i]):
                merged_data[i][ii] = merged_data[i][ii] + aa[i][ii]
        if (i in bb):
            if (ii in bb[i]):
                merged_data[i][ii] = merged_data[i][ii] + bb[i][ii]
        if (i in cc):
            if (ii in cc[i]):
                merged_data[i][ii] = merged_data[i][ii] + cc[i][ii]
        if (i in dd):
            if (ii in dd[i]):
                merged_data[i][ii] = merged_data[i][ii] + dd[i][ii]
        if (i in ee):
            if (ii in ee[i]):
                merged_data[i][ii] = merged_data[i][ii] + ee[i][ii]
        if (i in ff):
            if (ii in ff[i]):
                merged_data[i][ii] = merged_data[i][ii] + ff[i][ii]
        if (i in gg):
            if (ii in gg[i]):
                merged_data[i][ii] = merged_data[i][ii] + gg[i][ii]
        if (i in hh):
            if (ii in hh[i]):
                merged_data[i][ii] = merged_data[i][ii] + hh[i][ii]



with open(f"merged.json", "w") as outfile:
    json.dump(merged_data, outfile)

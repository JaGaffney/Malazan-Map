# from PIL import Image


# img = Image.open("map-crop.png")
# data = img.getdata()


# i = 0
# for item in data:
#     if (i > 10):
#         print(item)
#     i += 1

from PIL import Image

img = Image.open('map-crop-manual.png')
pixels = img.load() 

width, height = img.size



map = []
for x in range(0, width, 15):
        for y in range(0, height, 15):
                r, g, b = pixels[x, y]
                hex = f"{r:02x}{g:02x}{b:02x}"
                if (hex != "c4dfff"):
                    if (r in range(119, 191)) and (g in range(136, 213)) and (b in range(23, 156)):
                        j = 1
                    else:
                        t=5
                        if (hex == "fff0bd"): # sand
                            t = 2
                        if (hex == "3b8315"): #forest
                            t = 6
                        if (hex == "b7855c"): #moutain
                            t = 7
                        if (hex == "ffffff"): #ice
                            t = 1
                        value = {"x": x / 15, "y": y / 15, "z": 1, "t": t}
                        map.append(value)

                # if item[0] in list(range(200, 256)):
        
                # value = {"x": x, "y": y, "hex": hex}
                # map.append(value)

print(len(map))

import json
    
    
with open("sample.json", "w") as outfile:
    json.dump(map, outfile)
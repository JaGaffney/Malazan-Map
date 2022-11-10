# from PIL import Image


# img = Image.open("map-crop.png")
# data = img.getdata()


# i = 0
# for item in data:
#     if (i > 10):
#         print(item)
#     i += 1

from PIL import Image
from collections import Counter
from random import *

img = Image.open('map-crop-manual-test.png')
pixels = img.load() 

width, height = img.size

def f2(lst):
   return Counter(lst).most_common(1)

def nearest_colour( subjects, query ):
    return min( subjects, key = lambda subject: sum( (s - q) ** 2 for s, q in zip( subject, query ) ) )


map = []
coloursUsed = []
incriement = 20

# commonColors = ((196, 223, 255), (201, 229, 178), (183, 133, 92), (59, 131, 21), (255, 240, 189), (255, 255, 255), (203, 167, 139))
commonColors = ((196, 223, 255), (0, 255, 0), (224, 228, 24), (0, 77, 0), (196, 41, 255), (255, 255, 255), (65, 65, 65), (0, 0, 0))

for x in range(0, width, incriement):
        for y in range(0, height, incriement):
                # r, g, b = pixels[x, y]
                # hex = f"{r:02x}{g:02x}{b:02x}"
                hexCount = []
                if (x + incriement < width):
                    for xx in range(x, x + incriement):
                        if (y + incriement < height):
                            for yy in range(y, y + incriement):
                                #rr, gg, bb = pixels[xx, yy]
                                #hex2 = f"{rr:02x}{gg:02x}{bb:02x}"
                                rgb = pixels[xx, yy]
                                closet_color = nearest_colour(commonColors, rgb)
                                hexCount.append(closet_color)

                    hexCount.append(hex) 
                    hexValue = f2(hexCount)
                    hexValue = [a[0] for a in hexValue]
                    hexColor = hexValue[0]
                    coloursUsed.append(hexColor)
                    # if (hexColor != (196, 223, 255)):
                    #         t=1
                    #         z=1
                    #         if (hexColor == (201, 229, 178)): # grass
                    #             t = 5
                    #             z= 1
                    #         if (hexColor == (255, 240, 189)): # sand
                    #             t = 2
                    #             z=2
                    #         if (hexColor == (59, 131, 21)): #forest
                    #             t = 6
                    #             z=2
                    #         if (hexColor == (183, 133, 92)): #moutain
                    #             t = 4
                    #             z=4
                    #         if (hexColor == (203, 167, 139)): #low moutain
                    #             t = 3
                    #             z=3
                    #         if (hexColor == (255, 255, 255)): #ice
                    #             t = 1
                    #             z=2
                    #         value = {"x": x / incriement, "y": y / incriement, "z": z, "t": t}
                    #         map.append(value)
                    if (hexColor != (196, 223, 255)):
                            t=0
                            z=0
                            if (hexColor == (0, 255, 0)): # grass
                                ran = randint(1, 20)
                                z= 1
                                if (ran == 1):
                                    z = 1.1
                                if (ran == 2):
                                    z = 1.2
                                t = 5

                            if (hexColor == (224, 228, 24)): # sand
                                t = 2
                                z=2
                            if (hexColor == (0, 77, 0)): #forest
                                t = 6
                                z=2
                            if (hexColor == (224, 24, 24)): #moutain
                                t = 7
                                z=4
                            if (hexColor == (196, 41, 255)): #low moutain
                                t = 4
                                z=3
                            if (hexColor == (255, 255, 255)): #ice
                                t = 1
                                z=2
                            if (hexColor == (65, 65, 65)): #town
                                t = 8
                                z=2
                            if (hexColor == (0, 0, 0)): #city
                                t = 9
                                z=3

                            # removes blanks if any made it through
                            if (z != 0 and t != 0):
                                value = {"x": x / incriement, "y": y / incriement, "z": z, "t": t}
                                map.append(value)

                # if item[0] in list(range(200, 256)):
        
                # value = {"x": x, "y": y, "hex": hex}
                # map.append(value)

print(len(map))
# print(Counter(coloursUsed))
print(len(Counter(coloursUsed)))

import json
    
    
with open("sample.json", "w") as outfile:
    json.dump(map, outfile)